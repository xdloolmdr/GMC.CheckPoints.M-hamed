import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home({
  projects,
}: {
  projects: { name: string; description: string }[];
}) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className="text-center p-10">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4">Showcasing my skills and projects.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="mt-4">
            {projects.map((project, index) => (
              <li key={index} className="mt-2">
                <strong>{project.name}</strong>: {project.description}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

// Server-side data fetching
export async function getServerSideProps() {
  const projects = [{ name: "Project One", description: "Description here" }];
  return { props: { projects } };
}
