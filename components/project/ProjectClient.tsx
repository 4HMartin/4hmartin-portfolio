"use client";
import { Project } from "@/data/types";
import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectTechStack from "./ProjectTechStack";
import ProjectKeyFeatures from "./ProjectKeyFeatures";
import ProjectArchitecture from "./ProjectArchitecture";
import ProjectDatabase from "./ProjectDatabase";
import ProjectFigmaWireframe from "./ProjectFigmaWireframe";
import ProjectScreenshots from "./ProjectScreenshots";

import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import NextJsImage from "../layout/NextJsImage";
import type { buildItemProps } from "@/data/types";

interface ProjectClientProps {
    project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slides = useMemo(() => {
        const images: buildItemProps[] = [];
        project.images.architectureImage && images.push(project.images.architectureImage);
        project.images.dbDiagramImage && images.push(project.images.dbDiagramImage);
        project.images.figmaWireframe && images.push(project.images.figmaWireframe);
        project.images.screenshots.forEach((image) => images.push(image));

        return images
    },[project.images]);

    const handleLightboxOpen = (imgSrc: buildItemProps['src']) => {
        const idx = slides.findIndex((slide) => slide.src === imgSrc);
        idx >= 0 ? setLightboxIndex(idx) : setLightboxIndex(0);
        setLightboxOpen(true);
    }

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
                    
                    <div className="flex flex-col lg:flex-row w-full">
                        {project.images.architectureImage && 
                            <ProjectArchitecture
                                architectureImage={project.images.architectureImage}
                                handleLightboxOpen={handleLightboxOpen}
                            />
                        }
                        {project.images.dbDiagramImage && 
                            <ProjectDatabase
                                dbDiagramImage={project.images.dbDiagramImage}
                                handleLightboxOpen={handleLightboxOpen}
                            />
                        }
                        {project.images.figmaWireframe && project.publicFigmaWireframe &&
                            <ProjectFigmaWireframe
                                figmaWireframe={project.images.figmaWireframe}
                                publicFigmaWireframe={project.publicFigmaWireframe}
                                handleLightboxOpen={handleLightboxOpen}
                            />
                        }
                    </div>
                    <ProjectScreenshots
                        screenshots={project.images.screenshots}
                        handleLightboxOpen={handleLightboxOpen}
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

            {/*  LIGHTBOX  */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={slides}
                plugins={[Captions, Counter, Zoom]}
                captions={{ showToggle: true, descriptionTextAlign: "start" }}
                counter={{ container: { style: { top: 0 } } }}
                zoom={{ maxZoomPixelRatio: 3 }}
                carousel={{ padding: 88 }}
                render={{ slide: NextJsImage }}
                styles={{
                    container: { backgroundColor: "rgba(3, 2, 19, 0.95)" },
                    captionsTitle: {
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: "#ffffff",
                        paddingLeft: "5rem",
                        paddingTop: "4px"
                    },
                    captionsDescription: {
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#e8b43a",
                    },
                }}
                on={{
                    view: ({ index }) => setLightboxIndex(index),
                }}
            />
        </>
    )
}