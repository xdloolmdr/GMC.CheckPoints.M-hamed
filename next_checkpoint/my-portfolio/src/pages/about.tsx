import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4">
          I am a passionate developer with experience in web technologies.
        </p>
      </main>
    </div>
  );
}
