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
