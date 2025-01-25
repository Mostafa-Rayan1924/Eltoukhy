export type Links = {
  id: number;
  title: string;
  url: string;
  onMobile?: boolean;
};
export type ContactItem = {
  id: number;
  icon: React.ElementType;
  title: string;
  desc: string;
};
export type WhyUsItem = {
  id: number;
  icon: React.ElementType;
  title: string;
  desc: string;
};
export type GoalsItem = {
  id: number;
  img: string;
  title: string;
  desc: string;
};
export type profileTypeItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
};
export enum category {
  GlassWork = "678d9cb50255a46ffcfbdf0b",
  AluminumWork = "678e629e0876f8971d65e290",
}
export type BannerType = {
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  _id: string;
  image: string;
  __v: number;
};
export type ServicesType = {
  title: {
    en: string;
    ar: string;
  };
  image: string;
  images: string[];
  category: string;
  _id: string;
  __v: number;
};
export type SupplierType = {
  title: {
    en: string;
    ar: string;
  };
  image: string;
  type: {
    en: string;
    ar: string;
  };
  _id: string;
  __v: number;
};
export type ProjectType = {
  title: {
    en: string;
    ar: string;
  };
  image: string;
  images: string[];
  _id: string;
  __v: number;
};
export type loginType = {
  user: {
    token: string | null;
    userData: {
      id: number;
      name: string;
      email: string;
    } | null;
  };
  loading: boolean;
  error: string | undefined;
};
export const Languages = {
  ARABIC: "ar",
  ENGLISH: "en",
};
export const Directions = {
  RTL: "rtl",
  LTR: "ltr",
};
