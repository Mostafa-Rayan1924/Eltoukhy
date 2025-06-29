import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Links } from "@/Types/types";

const Footer = ({
  locale,
  Nav,
  Home,
}: {
  locale: string;
  Nav: any;
  Home: any;
}) => {
  let links: Links[] = [
    {
      id: 1,
      title: Nav.home,
      url: `/${locale}`,
    },
    {
      id: 2,
      title: Nav.services,
      url: `/${locale}/services`,
    },
    {
      id: 3,
      title: Nav.projects,
      url: `/${locale}/projects`,
    },
    {
      id: 4,
      title: Nav.about,
      url: `/${locale}/about`,
    },
    {
      id: 5,
      title: Nav.suppliers,
      url: `/${locale}/suplliers`,
    },
    {
      id: 6,
      title: Nav.profile,
      url: `/${locale}/profile`,
    },
    {
      id: 7,
      title: Nav.contact,
      url: `/${locale}/contact`,
      onMobile: false,
    },
  ];
  return (
    <footer className="bg-background lg:grid lg:grid-cols-5 mt-20">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          fill
          src="https://images.unsplash.com/photo-1489465033131-30f7e2025f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3MlMjBjb21wYW55fGVufDB8fDB8fHww" // Interior glass design
          alt=""
          className="absolute inset-0  object-cover"
        />
      </div>

      <div className="px-4 pt-16 pb-6 sm:px-6 lg:col-span-3 border-t border-border lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {Home.footer.call}
              </span>
              <h2 className="block text-2xl font-medium text-foreground hover:opacity-75 sm:text-3xl">
                01148101041
              </h2>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-muted-foreground">
              <li>
                {Home.footer.Hours}: {Home.footer.time}
              </li>
              <li>
                {Home.footer.location}: {Home.footer.locationSub}
              </li>
            </ul>

            <ul className="mt-8 flex gap-3">
              {socialLinks.map((link) => (
                <li className="relative h-10 w-10" key={link.id}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground transition hover:opacity-75">
                    <Image src={link.icon} fill alt={link.path} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-foreground">{Home.footer.links}</p>

              <ul className="mt-4 space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="text-muted-foreground transition hover:opacity-75">
                      {link.onMobile !== false && link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">
                {Home.footer.callUs}
              </p>

              <ul className="mt-4 space-y-4 text-sm">
                <Link href={`/${locale}/contact`}>
                  <Button
                    className={(buttonVariants({ size: "lg" }), "text-white")}>
                    {Home.footer.call}
                  </Button>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t text-center border-border pt-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-muted-foreground text-sm transition hover:opacity-75">
                {Home.footer.p1}
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
              {Home.footer.p2}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
