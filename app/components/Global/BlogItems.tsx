import BlogCard from "./BlogCard";
import CarOne from "../../../public/assets/car-one.png";
import CarTwo from "../../../public/assets/car-two.png";
import CarThree from "../../../public/assets/car-three.png";
import CarFour from "../../../public/assets/car-four.png";
import CarFive from "../../../public/assets/car-five.png";
import CarSix from "../../../public/assets/car-six.png";

const BlogItems = () => {
  const cardInformation = [
    {
      imageSrc: CarOne,
      alt: "",
      title: "Auto Detailing | Costs & Prices Explained",
      description:
        "loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla in neque hendrerit volutpat. Nulla facilisi. Vestibulum facilisis sed elit id laoreet. Nulla mauris dolor, auctor vitae lectus vitae, pretium euismod elit. Donec eget urna leo. Suspendisse maximus mauris ac nisi venenatis, in suscipit sem congue. Nulla tristique iaculis augue nec pellentesque. Ut nec erat fringilla, scelerisque orci vitae, fringilla ipsum. Nunc sit amet tellus nibh.m50",
      authorInfo: "Salim Rana",
      publishDate: "20 December 2024",
    },
    {
      imageSrc: CarTwo,
      alt: "",
      title: "Auto Detailing | Costs & Prices Explained",
      description:
        "loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla in neque hendrerit volutpat. Nulla facilisi. Vestibulum facilisis sed elit id laoreet. Nulla mauris dolor, auctor vitae lectus vitae, pretium euismod elit. Donec eget urna leo. Suspendisse maximus mauris ac nisi venenatis, in suscipit sem congue. Nulla tristique iaculis augue nec pellentesque. Ut nec erat fringilla, scelerisque orci vitae, fringilla ipsum. Nunc sit amet tellus nibh.m50",
      authorInfo: "Salim Rana",
      publishDate: "20 December 2024",
    },
    {
      imageSrc: CarThree,
      alt: "",
      title: "Auto Detailing | Costs & Prices Explained",
      description:
        "loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla in neque hendrerit volutpat. Nulla facilisi. Vestibulum facilisis sed elit id laoreet. Nulla mauris dolor, auctor vitae lectus vitae, pretium euismod elit. Donec eget urna leo. Suspendisse maximus mauris ac nisi venenatis, in suscipit sem congue. Nulla tristique iaculis augue nec pellentesque. Ut nec erat fringilla, scelerisque orci vitae, fringilla ipsum. Nunc sit amet tellus nibh.m50",
      authorInfo: "Salim Rana",
      publishDate: "20 December 2024",
    },
    {
      imageSrc: CarSix,
      alt: "",
      title: "Auto Detailing | Costs & Prices Explained",
      description:
        "loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla in neque hendrerit volutpat. Nulla facilisi. Vestibulum facilisis sed elit id laoreet. Nulla mauris dolor, auctor vitae lectus vitae, pretium euismod elit. Donec eget urna leo. Suspendisse maximus mauris ac nisi venenatis, in suscipit sem congue. Nulla tristique iaculis augue nec pellentesque. Ut nec erat fringilla, scelerisque orci vitae, fringilla ipsum. Nunc sit amet tellus nibh.m50",
      authorInfo: "Salim Rana",
      publishDate: "20 December 2024",
    },
    {
      imageSrc: CarFour,
      alt: "",
      title: "Auto Detailing | Costs & Prices Explained",
      description:
        "loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla in neque hendrerit volutpat. Nulla facilisi. Vestibulum facilisis sed elit id laoreet. Nulla mauris dolor, auctor vitae lectus vitae, pretium euismod elit. Donec eget urna leo. Suspendisse maximus mauris ac nisi venenatis, in suscipit sem congue. Nulla tristique iaculis augue nec pellentesque. Ut nec erat fringilla, scelerisque orci vitae, fringilla ipsum. Nunc sit amet tellus nibh.m50",
      authorInfo: "Salim Rana",
      publishDate: "20 December 2024",
    },
    {
      imageSrc: CarFive,
      alt: "",
      title: "Auto Detailing | Costs & Prices Explained",
      description:
        "loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla in neque hendrerit volutpat. Nulla facilisi. Vestibulum facilisis sed elit id laoreet. Nulla mauris dolor, auctor vitae lectus vitae, pretium euismod elit. Donec eget urna leo. Suspendisse maximus mauris ac nisi venenatis, in suscipit sem congue. Nulla tristique iaculis augue nec pellentesque. Ut nec erat fringilla, scelerisque orci vitae, fringilla ipsum. Nunc sit amet tellus nibh.m50",
      authorInfo: "Salim Rana",
      publishDate: "20 December 2024",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {cardInformation.map((item, index) => {
        return <BlogCard cardInfo={item} key={index} />;
      })}
    </div>
  );
};

export default BlogItems;
