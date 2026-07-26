import { Project } from "@/data/types";
import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";

interface ProjectClientProps {
    project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {

    return (
        <>
            <ProjectHero project={project} />

            <section className="flex flex-col lg:flex-row">
                <ProjectOverview overview={project.overview} />
            </section>
        </>
    )
}