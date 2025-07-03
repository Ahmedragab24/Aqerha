"use client";

import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronLeft, User, Mail, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import RegisterDeveloperDialog from "@/components/organisms/Popups/RegisterDeveloperDialog";

export interface UserMenuType {
  id: number;
  name: string;
  icon: string;
  path?: string;
  subMenu?: UserMenuType[];
  popup?: React.ReactNode;
  popupType?: "RegisterDeveloperDialog" | "ChangePassword";
}

export interface UserMenuListType {
  orders: UserMenuType[];
  advertisements: UserMenuType[];
  more: UserMenuType[];
}

const MenuItemsList: UserMenuListType = {
  orders: [
    {
      id: 1,
      name: "أطلب عقارك",
      icon: "/Icons/solar_document-add-outline.svg",
      path: "/order-property",
    },
    {
      id: 2,
      name: "طلبات الفحص والتقييم",
      icon: "/Icons/BoxIcons.svg",
      path: "/inspection-requests",
    },
    {
      id: 3,
      name: "طلب تسويق عقار",
      icon: "/Icons/uit_house-user.svg",
      path: "/marketing-request",
    },
    {
      id: 4,
      name: "طلبات المسوق/الوسيط",
      icon: "/Icons/material-symbols_map-search-outline-rounded.svg",
      path: "/MarketerOrBrokerRequests",
    },
  ],
  advertisements: [
    {
      id: 1,
      name: "إعلان عن عقار من المالك/الوكيل",
      icon: "/Icons/fluent_building-32-regular.svg",
      path: "/owner-ad",
    },
    {
      id: 2,
      name: "إعلان عن عقار من وسيط",
      icon: "/Icons/bi_house-add.svg",
      path: "/broker-ad",
    },
    {
      id: 3,
      name: "إعلاناتي",
      icon: "/Icons/streamline_annoncement-megaphone.svg",
      path: "/my-ads",
    },
  ],
  more: [
    {
      id: 1,
      name: "المحادثات",
      icon: "/Icons/proicons_chat-gray.svg",
      path: "/conversations",
    },
    {
      id: 2,
      name: "خدمات الترويج",
      icon: "/Icons/carbon_text-link-analysis.svg",
      path: "/promotion-services",
    },
    {
      id: 3,
      name: "الاشتراكات",
      icon: "/Icons/fluent_person-money-20-regular.svg",
      path: "/subscriptions",
    },
    {
      id: 4,
      name: "التسجيل كفاحص ومقيم",
      icon: "/Icons/system-uicons_home-check.svg",
      path: "/register-inspector",
    },
    {
      id: 5,
      name: "التسجيل كمكتب هندسي",
      icon: "/Icons/formkit_add.svg",
      path: "/register-engineering",
    },
    {
      id: 6,
      name: "التسجيل كمطور عقاري",
      icon: "/Icons/formkit_add.svg",
      popup: (
        <RegisterDeveloperDialog>
          <button className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group w-full cursor-pointer">
            <Image
              src="/Icons/formkit_add.svg"
              alt="التسجيل كمطور عقاري"
              width={18}
              height={18}
              className="flex-shrink-0 opacity-80 group-hover:opacity-100"
            />
            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
              التسجيل كمطور عقاري
            </span>
          </button>
        </RegisterDeveloperDialog>
      ),
    },
    {
      id: 7,
      name: "التسجيل كشركة مزادات",
      icon: "/Icons/formkit_add.svg",
      path: "/register-auction",
    },
    {
      id: 8,
      name: "التسجيل كشركة مقاولات",
      icon: "/Icons/formkit_add.svg",
      path: "/register-contractor",
    },
    {
      id: 9,
      name: "خدمة العملاء",
      icon: "/Icons/MessagesCircle.svg",
      path: "/customer-service",
    },
    {
      id: 10,
      name: "مشاركة التطبيق",
      icon: "/Icons/solar_share-outline.svg",
      path: "/share-app",
    },
    {
      id: 11,
      name: "مستندات قانونية",
      icon: "/Icons/solar_document-linear.svg",
      subMenu: [
        {
          id: 1,
          name: "الشروط والأحكام",
          icon: "/Icons/T&C.svg",
          path: "/terms-and-conditions",
        },
        {
          id: 2,
          name: "رخصة فال",
          icon: "/Icons/Fal License.svg",
          path: "/edit-company",
        },
        {
          id: 3,
          name: "شهادة ضريبة القيمة المضافة",
          icon: "/Icons/VAT.svg",
          path: "/change-password",
        },
      ],
    },
    {
      id: 12,
      name: "عن تطبيق عقرها",
      icon: "/Icons/mdi_about-circle-outline.svg",
      path: "/about",
    },
    {
      id: 13,
      name: "الإعدادات",
      icon: "/Icons/Setting.svg",
      subMenu: [
        { id: 1, name: "العربية", icon: "/Icons/globe.svg", path: "/language" },
        {
          id: 2,
          name: "تعديل تفاصيل شركة المقاولات",
          icon: "/Icons/solar_document-add-outline.svg",
          path: "/edit-company",
        },
        {
          id: 3,
          name: "تغيير كلمة المرور",
          icon: "/Icons/Lock.svg",
          path: "/change-password",
        },
        {
          id: 4,
          name: "تغيير رقم الجوال",
          icon: "/Icons/ph_phone-light.svg",
          path: "/change-phone",
        },
        {
          id: 5,
          name: "تسجيل الخروج",
          icon: "/Icons/Logout.svg",
          path: "/logout",
        },
      ],
    },
  ],
};

interface MenuItemProps {
  item: UserMenuType;
  onItemClick?: () => void;
}

const MenuItem = ({ item, onItemClick }: MenuItemProps) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

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
            {item.subMenu.map((subItem, index) => (
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
            ))}
          </div>
        )}
      </div>
    );
  }

  if (item.popup) {
    return (
      <div className="w-full">
        <div onClick={() => onItemClick && onItemClick}>{item.popup}</div>
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
}

const MenuSection = ({ items, onItemClick }: MenuSectionProps) => {
  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

const UserAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              src="/Images/UserProfile.jpg"
              alt="صورة المستخدم"
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-80 max-w-[90vw] max-h-[80vh] overflow-y-auto p-2"
        sideOffset={8}
        align="end"
      >
        {/* User Profile Header */}
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg mb-2">
          <Avatar className="h-12 w-12 ring-2 ring-primary/20">
            <AvatarImage
              src="/Images/UserProfile.jpg"
              alt="صورة المستخدم"
              className="object-cover"
            />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start min-w-0 flex-1">
            <span className="font-semibold text-gray-900 dark:text-white truncate">
              اسم المستخدم
            </span>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <Mail className="h-3 w-3" />
              <span className="truncate">test@test.com</span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="my-2" />

        <Accordion type="single" collapsible className="w-full space-y-1">
          <AccordionItem value="orders" className="border-none">
            <AccordionTrigger className="hover:no-underline py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              <h3 className="text-primary font-semibold text-sm">الطلبات</h3>
            </AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <MenuSection
                items={MenuItemsList.orders}
                onItemClick={handleItemClick}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="advertisements" className="border-none">
            <AccordionTrigger className="hover:no-underline py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              <h3 className="text-primary font-semibold text-sm">الإعلانات</h3>
            </AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <MenuSection
                items={MenuItemsList.advertisements}
                onItemClick={handleItemClick}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="more" className="border-none">
            <AccordionTrigger className="hover:no-underline py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              <h3 className="text-primary font-semibold text-sm">المزيد</h3>
            </AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <MenuSection
                items={MenuItemsList.more}
                onItemClick={handleItemClick}
              />
            </AccordionContent>
          </AccordionItem>
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
            <Settings className="h-3 w-3 ml-1" />
            الإعدادات
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
            onClick={handleItemClick}
          >
            <LogOut className="h-3 w-3 ml-1" />
            خروج
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
