import { useState } from "react";
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
const candidates = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Abhishek trivedi`,
  scores: skills.map(() => Math.floor(Math.random() * 3)), // 0 = low, 1 = medium, 2 = high
}));

function App() {
  const [view, setView] = useState("compare");
  const [selectedTab, setSelectedTab] = useState("recommended");

  return (
    // <div className="min-h-screen bg-background flex">
    //   {/* Left Sidebar */}
    //   <div className="w-[300px] border-r flex flex-col">
    //     <div className="border-b">
    //       <Tabs value={selectedTab} onValueChange={setSelectedTab}>
    //         <TabsList className="w-full rounded-none">
    //           <TabsTrigger
    //             value="recommended"
    //             className="w-full"
    //           >
    //             Most recommended
    //           </TabsTrigger>
    //         </TabsList>
    //       </Tabs>
    //     </div>
    //     <div className="p-4 text-sm text-muted-foreground flex items-center gap-2">
    //       <Info className="h-4 w-4" />
    //       <p>Recommendations are based on your skill requirements and candidate's performance.</p>
    //     </div>
    //     <div className="flex-1 overflow-auto">
    //       {candidates.slice(0, 5).map((candidate) => (
    //         <div key={candidate.id} className="p-4 border-b hover:bg-accent cursor-pointer flex items-center gap-3">
    //           <Avatar className="h-8 w-8">
    //             <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
    //           </Avatar>
    //           <div className="flex-1">
    //             <div className="font-medium">{candidate.name}</div>
    //             <Button variant="link" size="sm" className="h-auto p-0 text-muted-foreground">
    //               <Info className="h-3 w-3 mr-1" />
    //               View details
    //             </Button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex-1">
    //     <header className="border-b">
    //       <div className="container mx-auto px-4 py-4">
    //         <div className="flex items-center gap-4">
    //           <Button variant="ghost" size="icon">
    //             <ChevronLeft className="h-4 w-4" />
    //           </Button>
    //           <div>
    //             <h1 className="text-xl font-semibold">Posk_UXdesigner_sr001</h1>
    //             <div className="flex items-center gap-2 text-sm text-muted-foreground">
    //               <Users className="h-4 w-4" />
    //               <span>23 Candidates</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </header>

    //     <main className="container mx-auto px-4 py-6">
    //       <div className="flex justify-between items-center mb-6">
    //         <Tabs value={view} onValueChange={setView} className="w-[400px]">
    //           <TabsList className="grid w-full grid-cols-3">
    //             <TabsTrigger value="compare">Compare View</TabsTrigger>
    //             <TabsTrigger value="individual">Individual view</TabsTrigger>
    //             <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
    //           </TabsList>
    //         </Tabs>

    //         <div className="flex gap-2">
    //           <Button variant="outline" size="icon">
    //             <ChevronLeft className="h-4 w-4" />
    //           </Button>
    //           <Button variant="outline" size="icon">
    //             <ChevronLeft className="h-4 w-4 rotate-180" />
    //           </Button>
    //         </div>
    //       </div>

    //       <div className="border rounded-lg">
    //         <Table>
    //           <TableHeader>
    //             <TableRow>
    //               <TableHead className="w-[250px]">Skills</TableHead>
    //               {candidates.map((candidate) => (
    //                 <TableHead key={candidate.id} className="text-center w-[50px]">
    //                   {candidate.id}
    //                 </TableHead>
    //               ))}
    //             </TableRow>
    //           </TableHeader>
    //           <TableBody>
    //             {skills.map((skill, skillIndex) => (
    //               <TableRow key={skill}>
    //                 <TableCell className="font-medium">{skill}</TableCell>
    //                 {candidates.map((candidate) => (
    //                   <TableCell key={`${candidate.id}-${skill}`} className="p-0">
    //                     <div
    //                       className={`w-full h-12 ${
    //                         candidate.scores[skillIndex] === 0
    //                           ? 'bg-yellow-100'
    //                           : candidate.scores[skillIndex] === 1
    //                           ? 'bg-green-100'
    //                           : 'bg-green-500'
    //                       }`}
    //                     />
    //                   </TableCell>
    //                 ))}
    //               </TableRow>
    //             ))}
    //           </TableBody>
    //         </Table>
    //       </div>
    //     </main>
    //   </div>
    // </div>
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
        <div style={{width:'22%'}} className="w-1/4 mr-4 border-[2px] border-black">
          <div style={{borderWidth:'0px'}} className="border rounded-lg max-h-[40rem] overflow-y-scroll">
            <div  className="sticky top-0 flex  border-b-[2px] border-black justify-center bg-white "> <h2 style={{padding:'1.2rem'}} className="text-xl font-semibold mb-0 sticky top-0 bg-white z-10 border-b-2 pb-2">
             Most Recommended 
            </h2></div>
           
            <ul className="space-y-2">
              {candidates.map((candidate) => (
                <li
                  key={candidate.id}
                  className="flex items-center gap-2 p-2 border-b"
                >
                  <span className="font-medium">{candidate.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{width:'70%'}}>
         <Header/>
        </div>
      </div>
    </>
  );
}

export default App;
