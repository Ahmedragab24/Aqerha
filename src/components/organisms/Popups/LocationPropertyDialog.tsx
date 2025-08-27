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
import { ProjectType } from "@/types/projects";
import GoogleMapProperty from "@/components/molecules/Locations/LocationProperty";

interface LocationPropertyDialogProps {
  children: React.ReactNode;
  project: ProjectType | undefined;
}

const LocationPropertyDialog = ({
  children,
  project,
}: LocationPropertyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold"></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <GoogleMapProperty
          location={{
            latitude: Number(project?.latitudes),
            longitude: Number(project?.longitudes),
          }}
          address={project?.location}
        />
      </DialogContent>
    </Dialog>
  );
};

export default LocationPropertyDialog;
