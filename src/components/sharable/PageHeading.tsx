const PageHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center container justify-center gap-4">
      <div className=" flex-1 h-[2px] rounded-lg  bg-primary" />
      <h2 className=" text-xl md:text-2xl lg:text-4xl capitalize text-center">
        {title}
      </h2>
      <div className=" flex-1 h-[2px] rounded-lg  bg-primary" />
    </div>
  );
};

export default PageHeading;
