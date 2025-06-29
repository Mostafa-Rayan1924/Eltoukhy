import React from "react";
import MainTitle from "../sharable/MainTitle";
import { ourNumbers } from "@/Types/types";

const OurNumbers = ({
  Home,
}: {
  Home: {
    whyUs: {
      titleNumber: string;
      project: {
        title1: string;
        title2: string;
        title3: string;
        title4: string;
        titlepart1: string;
        titlepart2: string;
        titlepart3: string;
        titlepart4: string;
      };
    };
  };
}) => {
  const numberForm: ourNumbers[] = [
    {
      id: 1,
      title: Home.whyUs.project.title1,
      number: Home.whyUs.project.titlepart1,
    },
    {
      id: 2,
      title: Home.whyUs.project.title2,
      number: Home.whyUs.project.titlepart2,
    },
    {
      id: 3,
      title: Home.whyUs.project.title3,
      number: Home.whyUs.project.titlepart3,
    },
    {
      id: 3,
      title: Home.whyUs.project.title4,
      number: Home.whyUs.project.titlepart4,
    },
  ];
  return (
    <section>
      <MainTitle title={Home?.whyUs?.titleNumber} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {numberForm.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col border-border border rounded-md even:border-primary bg-background   items-center gap-2 p-4">
            <h1
              className={`text-5xl ${
                index % 2 === 0 ? "text-primary" : ""
              }   font-semibold`}>
              {item.number}
            </h1>
            <p className="text-center capitalize">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurNumbers;
