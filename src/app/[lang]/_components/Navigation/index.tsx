import { getCurrentLocale } from "@/lib/getCurrentLocale";
import Header from "./Header";
import getTrans from "@/lib/translation";

const Navigation = async () => {
  const locale = await getCurrentLocale();
  const { Nav } = await getTrans(locale);
  return <Header Nav={Nav} />;
};

export default Navigation;
