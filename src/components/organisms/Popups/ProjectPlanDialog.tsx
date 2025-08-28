"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import Image from "next/image";
import { ProjectType } from "@/types/projects";

interface ProjectPlanDialogProps {
  children: React.ReactNode;
  project: ProjectType | undefined;
}

const ProjectPlanDialog = ({ children, project }: ProjectPlanDialogProps) => {
  console.log(project);

  const ProjectDiagram = project?.project_diagram;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-fit h-fit" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold"></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex justify-center items-center">
          <Image
            src={ProjectDiagram || ""}
            alt="ProjectDiagram"
            width={300}
            height={300}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPlanDialog;
