import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-4">
            <Image
              src="/project1.jpg"
              width={300}
              height={200}
              alt="Project 1"
            />
            <h2 className="text-xl font-semibold mt-2">Project One</h2>
            <p>A description of the project.</p>
          </div>
          {/* Add more projects here */}
        </div>
      </main>
    </div>
  );
}
