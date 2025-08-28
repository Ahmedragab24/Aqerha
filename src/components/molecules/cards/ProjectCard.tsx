import { House, MapPin } from "lucide-react";
import ArrowTLBlend from "../../atoms/Icons/ArrowTLBlend";
import GradientOverlay from "../../atoms/sliders/GradientOverlay";
import type { ProjectType } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { id, name, real_estates_number, cover_image, city } = project;

  return (
    <Link
      href={`/projects/${id}`}
      className="relative w-full max-w-md mx-auto group"
    >
      {/* Main card container */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg duration-300 group-hover:shadow-xl">
        {/* Background image */}
        <div className="relative h-44 md:h-64 w-full">
          <Image
            src={cover_image}
            alt={name}
            fill
            loading="lazy"
            className="object-cover duration-300 group-hover:scale-105"
          />
          <GradientOverlay position="bottom" />
        </div>

        {/* Top left icon */}
        <ArrowTLBlend
          color="white"
          className="duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
        />

        {/* Bottom right text content */}
        <div className="absolute bottom-4 right-4 text-right">
          <h3
            className="text-white text-sm md:text-xl font-bold mb-1 drop-shadow-sm drop-shadow-gray-700"
            dir="rtl"
          >
            {name}
          </h3>
          <div className="flex items-center text-white">
            <MapPin size={15} />
            <h4 className="text-xs md:text-sm drop-shadow-sm drop-shadow-gray-700">
              {city}
            </h4>
          </div>
          <div
            className="text-white/90 text-xs md:text-sm flex items-center gap-1"
            dir="rtl"
          >
            <span>{real_estates_number}</span>
            <span>وحدات متاحة</span>
            <House size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
