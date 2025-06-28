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
  className?: string;
}

const NavMenuItem = ({ Trigger, Items, className }: NavMenuItemProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={`${className}`}>
        {Trigger}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="!w-[220px] pt-4 text-right" dir="rtl">
        <h3 className="text-xs text-primary-light mb-2 px-2">{Trigger}</h3>
        {Items.map((item, index) => (
          <NavigationMenuLink
            href={item.path}
            key={index}
            className="!text-gray-600 text-sm hover:!text-primary-hover"
          >
            {item.label}
          </NavigationMenuLink>
        ))}
        <div className="flex justify-end px-4">
          <SeeMore path="/PropertiesForRent/explore" />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavMenuItem;
