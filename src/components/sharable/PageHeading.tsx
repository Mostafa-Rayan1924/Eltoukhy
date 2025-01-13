const PageHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="text-center text-3xl md:text-4xl lg:text-5xl container relative before:absolute before:content-[''] before:w-[calc(35%-40px)] md:before:w-[calc(40%-40px)] before:ml-[20px] before:h-[1px] before:bg-primary    before:left-4 before:top-[55%] before:-translate-y-1/2 before:z-20 uppercase after:absolute after:content-[''] after:w-[calc(35%-40px)] md:after:w-[calc(40%-40px)] after:mr-[20px] after:h-[1px] after:bg-primary   after:right-4 after:top-[55%] after:-translate-y-1/2 after:-z-20">
      {title}
    </h2>
  );
};

export default PageHeading;
