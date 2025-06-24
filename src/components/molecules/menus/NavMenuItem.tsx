import SeeMore from "@/components/atoms/buttons/SeeMore";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuType } from "@/constants/navMenu";
import React from "react";

interface NavMenuItemProps {
  Trigger: string;
  Items: MenuType[];
}

const NavMenuItem = ({ Trigger, Items }: NavMenuItemProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{Trigger}</NavigationMenuTrigger>
      <NavigationMenuContent className="!w-[200px] py-4 text-right" dir="rtl">
        <h3 className="text-sm text-primary-light mb-2 px-2">{Trigger}</h3>
        {Items.map((item, index) => (
          <NavigationMenuLink
            href={item.path}
            key={index}
            className="!text-primary text-sm hover:!text-primary-hover"
          >
            {item.label}
          </NavigationMenuLink>
        ))}
        <div className="flex justify-end">
          <SeeMore path="/" />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavMenuItem;
