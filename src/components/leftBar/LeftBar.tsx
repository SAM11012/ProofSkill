import React, { useEffect, useState } from "react";
import { CirclePlus } from "lucide-react";
import { Avatar } from "primereact/avatar";
import { getPeopleData } from "./helper";
import { People } from "@/interface";
import './leftbar.css'
interface LeftBarProps {
  handleClick: (id: string) => void;
}


const LeftBar = ({ handleClick }: LeftBarProps) => {
  const [candidates, setCandidates] = useState<People[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const peopleData = await getPeopleData();
      //console.log("peopleData", peopleData);
      setCandidates(peopleData);
     
    };
    fetchData();
  }, []);
  return (
    <div className="left_container w-1/4 mr-4 ">
      <div className="border-[2px] border-black rounded-lg max-h-[40rem] overflow-y-scroll">
        <div className="sticky top-0 flex  border-b-[2px] border-black justify-center bg-white ">
          {" "}
          <h2
        
            className="divTitle text-xl font-semibold mb-0 sticky top-0 bg-white z-10 border-b-2 pb-2"
          >
            Most Recommended
          </h2>
        </div>

        <ul className="space-y-2 mt-0">
          {candidates.map((candidate) => (
            <li
              key={candidate.id}
              className="flex items-center justify-between p-2 mt-0 px-10 border-b w-full"
            >
              {/* Avatar */}
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
              />

              {/* Candidate Name (Fixed Width, Truncated if Needed) */}
              <span className="font-bold w-[150px] text-center truncate">
                {candidate.name}
              </span>

              {/* Add Icon */}
              <CirclePlus
                size={20}
                color="purple"
                className="cursor-pointer transition-transform active:scale-90 hover:scale-110"

                onClick={() => {
                  handleClick(candidate.id);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
