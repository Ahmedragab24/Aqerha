import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Map } from "lucide-react";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const SearchMapDialog = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button variant={"outline"} className="SelectBtn">
            ابحث بالخريطة
            <Map />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>ابحث بالخريطة</DialogTitle>
          <DialogDescription>
            ابحث عن البيوت المتاحة علي الخريطة
          </DialogDescription>
        </DialogHeader>

        <div>
          <Image src="/Images/Map.jpg" alt="map" width={500} height={500} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchMapDialog;
