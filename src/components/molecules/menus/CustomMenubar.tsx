import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenuType } from "@/constants/navMenu";
import Link from "next/link";

interface CustomMenubarProps {
  Trigger: string;
  Items: MenuType[];
  className?: string;
}

const CustomMenubar = ({ Trigger, Items, className }: CustomMenubarProps) => {
  return (
    <Menubar dir={"rtl"}>
      <MenubarMenu>
        <MenubarTrigger className={`${className}`}>{Trigger}</MenubarTrigger>
        <MenubarContent>
          {Items.map((item) => (
            <Link href={item.path} key={item.label}>
              <MenubarItem>{item.label}</MenubarItem>
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CustomMenubar;
