"use client";

import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { ChevronLeft, User, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { UserMenuType } from "@/types/Auth/UserNavMenu";
import { MenuItemsList } from "@/constants/navMenu/user/UserNavMenu";
import { useGetFileAndInfoQuery } from "@/store/services/CompanyInfo";
import { useGetProfileQuery } from "@/store/services/Profile";
import { ProfileType } from "@/types/Profile";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";

import LogOutBtn from "@/components/atoms/buttons/LogOutBtn";

interface MenuItemProps {
  item: UserMenuType;
  onItemClick?: () => void;
  userType?: MembershipType | ServicesProvidersType;
}

const MenuItem = ({ item, onItemClick, userType }: MenuItemProps) => {
  const { data } = useGetFileAndInfoQuery();
  const FileData = data?.data;
  const [showSubMenu, setShowSubMenu] = useState(false);

  // فلترة العناصر حسب العضوية
  if (
    userType &&
    item.membershipType &&
    !item.membershipType.includes(userType)
  ) {
    return null;
  }

  const handlerDownloadFile = (name: string) => {
    let fileUrl = "";

    if (name === "رخصة فال") {
      fileUrl = FileData?.about || "";
    } else if (name === "شهادة ضريبة القيمة المضافة") {
      fileUrl = FileData?.privacy || "";
    }

    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = name + ".pdf";
      link.target = "_blank";
      link.click();
    } else {
      console.warn("الرابط غير متوفر");
    }
  };

  if (item.subMenu) {
    return (
      <div className="w-full">
        <button
          onClick={() => setShowSubMenu(!showSubMenu)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <Image
              src={item.icon || "/placeholder.svg"}
              alt={item.name}
              width={18}
              height={18}
              className="flex-shrink-0"
            />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {item.name}
            </span>
          </div>
          <ChevronLeft
            className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
              showSubMenu ? "rotate-90" : ""
            }`}
          />
        </button>

        {showSubMenu && (
          <div className="mt-1 mr-6 space-y-1">
            {item.subMenu.map((subItem, index) => {
              if (
                userType &&
                subItem.membershipType &&
                !subItem.membershipType.includes(userType)
              ) {
                return null;
              }

              if (subItem.onClick) {
                return (
                  <div
                    key={index}
                    onClick={() => handlerDownloadFile(subItem.name)}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
                  >
                    <Image
                      src={subItem.icon || "/placeholder.svg"}
                      alt={subItem.name}
                      width={18}
                      height={18}
                      className="flex-shrink-0 opacity-80 group-hover:opacity-100"
                    />
                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      {subItem.name}
                    </span>
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={subItem.path || "#"}
                  onClick={onItemClick}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <Image
                    src={subItem.icon || "/placeholder.svg"}
                    alt={subItem.name}
                    width={16}
                    height={16}
                    className="flex-shrink-0 opacity-70 group-hover:opacity-100"
                  />
                  <span className="font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                    {subItem.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (item.onClick) {
    return (
      <div
        onClick={() => handlerDownloadFile(item.name)}
        className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
      >
        <Image
          src={item.icon || "/placeholder.svg"}
          alt={item.name}
          width={18}
          height={18}
          className="flex-shrink-0 opacity-80 group-hover:opacity-100"
        />
        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <Link
      href={item.path || "#"}
      onClick={onItemClick}
      className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
    >
      <Image
        src={item.icon || "/placeholder.svg"}
        alt={item.name}
        width={18}
        height={18}
        className="flex-shrink-0 opacity-80 group-hover:opacity-100"
      />
      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
        {item.name}
      </span>
    </Link>
  );
};

interface MenuSectionProps {
  items: UserMenuType[];
  onItemClick?: () => void;
  userType?: MembershipType | ServicesProvidersType;
}

const MenuSection = ({ items, onItemClick, userType }: MenuSectionProps) => {
  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          item={item}
          onItemClick={onItemClick}
          userType={userType}
        />
      ))}
    </div>
  );
};

const UserAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetProfileQuery();
  const userData = data?.data as ProfileType;
  const UserMemberType = userData?.membership_type as
    | MembershipType
    | ServicesProvidersType;

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu dir="rtl" open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-2 hover:border-primary/50 transition-colors duration-200 bg-transparent"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={`${userData?.profile?.image}`}
              alt="user"
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-80 max-w-[90vw] max-h-[80vh] overflow-y-auto p-2 border-gray-300 shadow-lg"
        sideOffset={8}
        align="end"
      >
        {/* User Profile Header */}
        <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg mb-2">
          <Avatar className="h-12 w-12 ring-2 ring-primary/20">
            <AvatarImage
              src={`${userData?.profile?.image}`}
              alt="user"
              className="object-cover"
            />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start min-w-0 flex-1">
            <span className="font-semibold text-gray-900 dark:text-white truncate">
              {userData?.profile?.name}
            </span>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <Mail className="h-3 w-3" />
              <span className="truncate"> {userData?.email}</span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="my-2" />

        <Accordion type="single" collapsible className="w-full space-y-1">
          {[
            "company_agent",
            "individual_agent",
            "Owner or agent",
            "owner",
            "agent",
            "property_seeker",
            "contracting_company",
          ].includes(UserMemberType) && (
            <AccordionItem value="orders" className="border-none">
              <AccordionTrigger className="hover:no-underline py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                <h3 className="text-primary font-semibold text-sm">الطلبات</h3>
              </AccordionTrigger>
              <AccordionContent className="pb-2 pt-1">
                <MenuSection
                  items={MenuItemsList.orders}
                  onItemClick={handleItemClick}
                  userType={UserMemberType}
                />
              </AccordionContent>
            </AccordionItem>
          )}

          {[
            "company_agent",
            "individual_agent",
            "Owner or agent",
            "property_seeker",
            "contracting_company",
          ].includes(UserMemberType) && (
            <AccordionItem value="advertisements" className="border-none">
              <AccordionTrigger className="hover:no-underline py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                <h3 className="text-primary font-semibold text-sm">
                  الإعلانات
                </h3>
              </AccordionTrigger>
              <AccordionContent className="pb-2 pt-1">
                <MenuSection
                  items={MenuItemsList.advertisements}
                  onItemClick={handleItemClick}
                  userType={UserMemberType}
                />
              </AccordionContent>
            </AccordionItem>
          )}

          {[
            "company_agent",
            "individual_agent",
            "owner",
            "agent",
            "property_seeker",
            "contracting_company",
          ].includes(UserMemberType) ? (
            <AccordionItem value="more" className="border-none">
              <AccordionTrigger className="hover:no-underline py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                <h3 className="text-primary font-semibold text-sm">المزيد</h3>
              </AccordionTrigger>
              <AccordionContent className="pb-2 pt-1">
                <MenuSection
                  items={MenuItemsList.more}
                  onItemClick={handleItemClick}
                  userType={UserMemberType}
                />
              </AccordionContent>
            </AccordionItem>
          ) : (
            <MenuSection
              items={MenuItemsList.more}
              onItemClick={handleItemClick}
              userType={UserMemberType}
            />
          )}
        </Accordion>

        <DropdownMenuSeparator className="my-2" />

        {/* Quick Actions */}
        <div className="flex gap-2 p-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs bg-transparent"
            onClick={handleItemClick}
          >
            <User className="h-3 w-3 ml-1" />
            الملف الشخصي
          </Button>
          <LogOutBtn setIsOpen={setIsOpen} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
