"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/data/types";
import { useTranslations } from "next-intl";
import TechBadge from "../ui/TechBadge";
import CornerIcons from "../ui/cornerIcons";
import SectionHeader from "../layout/SectionHeader";

interface ProjectTechStackProps {
    techStack: Project['techStack'];
    publicURL: Project['publicUrl'];
    publicRepo: Project['publicRepo'];
    category: Project['category'];
}

export default function ProjectTechStack() {

    return (
        <section className="md:mx-17 lg:ml-0 xl:mr-20 2xl:mr-48 lg:w-1/3 border border-red-500">
            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="tech_stack_label" sectionNumber="06" />

            <article>

            </article>
        </section>
    )
}