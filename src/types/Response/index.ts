export interface LinksType {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface MetaLinksType {
  url: string | null;
  label: string;
  active: boolean;
}
export interface MetaType {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLinksType[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export type MessageType = string;
export type StatusCodeType = number;
