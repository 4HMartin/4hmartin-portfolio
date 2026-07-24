import { Project } from "@/data/types";
import ProjectHero from "./ProjectHero";

interface ProjectClientProps {
    project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {

    return (
        <>
            <ProjectHero project={project} />
        </>
    )
}