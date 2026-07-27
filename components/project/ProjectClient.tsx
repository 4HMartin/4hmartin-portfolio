import { Project } from "@/data/types";
import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectTechStack from "./ProjectTechStack";
import ProjectKeyFeatures from "./ProjectKeyFeatures";

interface ProjectClientProps {
    project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {

    return (
        <>
            <ProjectHero project={project} />

            <section className="flex flex-col lg:flex-row">
                <div className="flex flex-col md:mx-17 lg:mr-0 xl:ml-20 2xl:ml-48 lg:w-2/3">
                    <ProjectOverview overview={project.overview} />
                    <ProjectKeyFeatures
                        keyFeaturesUsers={project.keyFeaturesUser}
                        keyFeaturesAdmin={project.keyFeaturesAdmin}
                    />
                </div>
                <ProjectTechStack
                    techStack={project.techStack}
                    publicURL={project.publicUrl}
                    publicRepo={project.publicRepo}
                    category={project.category}
                    otherProjects={project.otherProjects}
                />
            </section>
        </>
    )
}