import SupplierSwiper from "../sharable/SupplierSwiper";

const Suppliers = () => {
  let suppliers: { image: string; title: string }[] = [
    {
      image:
        "https://glassteceg.com/wp-content/uploads/2023/12/7-5-300x300.jpg",
      title: "شركاء النجاح",
    },
    {
      image:
        "https://glassteceg.com/wp-content/uploads/2023/12/6-5-300x300.jpg",
      title: "شركاء النجاح",
    },
    {
      image:
        "https://glassteceg.com/wp-content/uploads/2023/12/4-4-300x300.jpg",
      title: "شركاء النجاح",
    },
    {
      image:
        "https://glassteceg.com/wp-content/uploads/2023/12/5-5-300x300.jpg",
      title: "شركاء النجاح",
    },
    {
      image:
        "https://glassteceg.com/wp-content/uploads/2023/12/3-5-300x300.jpg",
      title: "شركاء النجاح",
    },
    {
      image:
        "https://glassteceg.com/wp-content/uploads/2023/12/1-6-300x300.jpg",
      title: "شركاء النجاح",
    },
  ];
  return (
    <div className="max-w-[850px] mx-auto ">
      <SupplierSwiper items={suppliers} numOFSlides={4} />
    </div>
  );
};

export default Suppliers;
