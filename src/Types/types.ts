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
  opt1 = "Glass Work",
  opt2 = "Aluminum Work",
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
