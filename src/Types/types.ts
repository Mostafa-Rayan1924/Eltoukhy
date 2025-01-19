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
