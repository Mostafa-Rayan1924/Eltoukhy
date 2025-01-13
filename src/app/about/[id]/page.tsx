"use client";

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.title = "Page2 Title";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Page2 description");
    } else {
      // Create meta tag if it doesn't exist
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content = "Page2 description 2";
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  return (
    <div>
      <p>Hello world!</p>
    </div>
  );
};

export default Page;
