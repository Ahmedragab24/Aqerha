import ArrowTLBlend from "@/components/atoms/Icons/ArrowTLBlend";
import Riyal from "@/components/atoms/Icons/Riyal";
import GradientOverlay from "@/components/atoms/sliders/GradientOverlay";
import type { ProjectType } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectType;
  developerId?: string;
}

const ProjectCard = ({ project, developerId }: ProjectCardProps) => {
  const { id, name, image, utils } = project;

  return (
    <Link
      href={`/developers/${developerId}/${id}`}
      className="relative w-full max-w-md mx-auto group"
    >
      {/* Main card container */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg duration-300 group-hover:shadow-xl">
        {/* Background image */}
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill
            loading="lazy"
            className="object-cover duration-300 group-hover:scale-105"
          />
          <GradientOverlay />
        </div>

        {/* Top left icon */}
        <ArrowTLBlend
          color="white"
          className="duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
        />

        {/* Bottom right text content */}
        <div className="absolute bottom-4 right-4 text-right">
          <h3 className="text-white text-xl font-bold mb-1" dir="rtl">
            {name}
          </h3>
          <div
            className="text-white/90 text-sm flex items-center gap-1"
            dir="rtl"
          >
            <span>{utils}</span>
            <span>وحدات متاحة</span>
            <span>
              <Riyal />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
