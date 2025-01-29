import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Header } from "./components/header/Header";
import { Checkbox } from "@radix-ui/react-checkbox";
import LeftBar from "./components/leftBar/LeftBar";
import { getDataID } from "./components/leftBar/helper";
import { RadioButton } from "primereact/radiobutton";
import "./App.css";
import Tooltip from "@mui/material/Tooltip";
import { Radio } from "@mui/material";
import { red } from "@mui/material/colors";

const skills = [
  "Experience",
  "Can join in",
  "Minimum salary expected",
  "Creating Wireframes",
  "Creating Basic Prototypes",
  "Creation of Brands",
  "Applying Color Theory",
  "Using Figma for Design",
  "Application of Typography",
  "Creating Effective Icons",
  "Optimizing Touch Points",
  "Addressing User Pain Points",
  "Conducting User Research",
  "Applying Questioning Skills",
  "Conducting Heuristic Evaluation",
  "Gathering User Feedback",
  "Conducting Usability Tests",
  "Creating User Personas",
  "Conducting Market Research",
  "Crafting Effective Questions",
  "Creating Effective Surveys",
  "Creating Sitemaps",
  "Designing User Flows",
];

// Generate some sample candidate data

function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [data, setData] = useState<any>();
  const [candidates, setCandidates] = useState<any[]>([]);
  const [isChecked, setChecked] = useState<string>("");
  console.log(candidates, "candidates");
  // ... existing code ...
  // ... existing code ...
  function flattenObject(obj: any, prefix = ""): Record<string, any> {
    return Object.entries(obj).reduce(
      (acc: Record<string, any>, [key, value]) => {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          Object.assign(acc, flattenObject(value, newKey));
        } else {
          acc[newKey] = value;
        }

        return acc;
      },
      {} as Record<string, any>
    );
  }
  // ... existing code ...

  const fetchData = useCallback(
    async (id: string) => {
      try {
        const peopleData = await getDataID(id); // Pass the id to fetch data
        console.log("peopleData", peopleData);

        const val = flattenObject(peopleData);
        console.log("Flattened Data:", val);

        const result: any[] = [];
        result.push({
          Experience:
            val["data.data.experience_level"] !== ""
              ? val["data.data.experience_level"]
              : 0,
        });

        if (val["data.data.skillset"]) {
          val["data.data.skillset"].forEach((item: any) => {
            if (item.skills) {
              item.skills.forEach((skill: any) => {
                result.push({
                  [skill.name]: skill.pos?.[0]?.consensus_score || 0,
                });
              });
            }
          });
        }
        console.log(result, "the result is");

        setData(result);

        const candidatesData = {
          id: val.id,
          name: `${val.name}`,
          scores: skills.map((item: any) =>
            result[item] !== undefined
              ? result[item]
              : Math.floor(Math.random() * 3)
          ),
        };

        setCandidates((prevCandidates) => [...prevCandidates, candidatesData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [setData, setCandidates, skills]
  );

  return (
    <>
      {" "}
      <div className="p-4 mx-32">
        {/* Back to Jobs link */}
        <a href="/jobs" className=" text-gray-500 hover:text-blue-700">
          ← Back to My Jobs
        </a>

        {/* Heading Section */}
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-3xl font-bold  text-gray-500">
            Post UX Designer
          </h1>
          <span className="text-xl text-gray-500">23 Candidates</span>
        </div>
      </div>
      {/* below component code start */}
      <div className="flex">
        {/* Left Section: Recommended Candidates (25% width) */}
        <LeftBar
          handleClick={(id: string) => {
            if (!selectedIds.includes(id)) {
              fetchData(id);
              setSelectedIds([...selectedIds, id]);
            }
          }}
        />
        <div style={{ width: "70%" }}>
          <Header />
          <div className="border rounded-lg border-transparent">
            <Table style={{ width: "unset" }}>
              <TableHeader>
                <TableRow
                  style={{ borderColor: "transparent", minHeight: "1.9rem" }}
                >
                  <TableHead className="w-[250px]"></TableHead>
                  {candidates.map((candidate) => (
                    <TableHead
                      key={candidate.id}
                      className="text-center w-[50px] border-transparent"
                    >
                      {candidate.name.split(" ")[0][0] +
                        candidate.name.split(" ")[1][0]}
                      <Radio
                        checked={isChecked === candidate.id}
                        onChange={() => {
                          setChecked(candidate.id);
                        }}
                        name="radio-buttons"
                      />
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {skills.map((skill, skillIndex) => (
                  <TableRow key={skill} className="border-transparent">
                    <TableCell
                      className="font-medium p-0 "
                      style={{ height: "1.9rem" }}
                    >
                      {skill}
                    </TableCell>
                    {candidates.map((candidate) => (
                      <Tooltip title={candidate.scores[skillIndex]}>
                        <TableCell
                          key={`${candidate.id}-${skill}`}
                          className="p-0"
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "1.9rem",
                              borderTop: "2px solid white",
                              borderBottom: "2px solid white",
                              borderRight: " 4px solid white",
                              borderLeft: " 5px solid white",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            className={` ${
                              isChecked !== candidate.id && isChecked != ""
                                ? "bg-slate-200"
                                : skill == "Experience"
                                ? "bg-green-200"
                                : skill == "Minimum salary expected" ||
                                  skill == "Can join in"
                                ? "bg-red-200"
                                : candidate.scores[skillIndex] === 0
                                ? "bg-yellow-100"
                                : candidate.scores[skillIndex] === 1
                                ? "bg-green-100"
                                : candidate.scores[skillIndex] === 2
                                ? "bg-green-400"
                                : candidate.scores[skillIndex] === 3
                                ? "bg-green-600"
                                : "bg-green-800"
                            }`}
                          >
                            {[
                              "Experience",
                              "Can join in",
                              "Minimum salary expected",
                            ].includes(skill)
                              ? candidate.scores[skillIndex]
                              : ""}
                          </div>
                        </TableCell>
                      </Tooltip>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
