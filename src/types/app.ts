import * as Icons from "../icons";

export type IconName = keyof typeof Icons;

import { PropsWithChildren } from "react";

export type PropsWithClassName = {
  className?: string;
};

export type PropsWithClassNameAndChildren = PropsWithChildren &
  PropsWithClassName;

export interface APIResponse<T> {
  data?: T;
  code?: string;
  message?: string;
}

export interface AuthResponse {
  email: string;
  username: string;
  name: string | null;
  address: string | null;
  phone: string | null;
  gender: string | null;
  birth_date: string | null;
  access_token: string;
  refresh_token: string;
  social_provider: string;
  social_id: string;
  email_verified_at: string | null;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconName;
}

export interface Message {
  flag: string;
  text: string;
}

export interface UserInfo {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  joined_on: string;
  state: boolean;
  messages: Message[] | null;
}

export interface Review {
  username: string;
  avatar_url: string;
  review: string;
  rate: number;
}

export interface ProductItem {
  id: number;
  photo: string;
  name: string;
  shortDescription: string;
  featureDescription: string;
  londDescription: string;
  price: string;
  qty: number;
  rating: number;
  reviews: Review[] | null;
}
