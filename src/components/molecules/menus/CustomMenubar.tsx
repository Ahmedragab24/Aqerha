import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../ui/menubar";
import { MenuType } from "@/constants/navMenu";
import Link from "next/link";

interface CustomMenubarProps {
  Trigger: string;
  Items: MenuType[];
  className?: string;
  setOpen: (value: boolean) => void;
}

const CustomMenubar = ({
  Trigger,
  Items,
  className,
  setOpen,
}: CustomMenubarProps) => {
  return (
    <Menubar dir={"rtl"}>
      <MenubarMenu>
        <MenubarTrigger className={`${className}`}>{Trigger}</MenubarTrigger>
        <MenubarContent>
          {Items.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              onClick={() => setOpen(false)}
            >
              <MenubarItem>{item.label}</MenubarItem>
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CustomMenubar;
