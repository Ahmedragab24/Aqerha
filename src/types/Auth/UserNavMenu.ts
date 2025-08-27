import { MembershipType, ServicesProvidersType } from "../Membership";

export interface UserMenuType {
  id: number;
  name: string;
  membershipType: (MembershipType | ServicesProvidersType)[];
  icon: string;
  path?: string;
  subMenu?: UserMenuType[];
  onClick?: boolean;
}

export interface UserMenuListType {
  orders: UserMenuType[];
  advertisements: UserMenuType[];
  more: UserMenuType[];
}
