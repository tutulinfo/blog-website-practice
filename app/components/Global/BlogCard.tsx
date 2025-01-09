import Image from "next/image";

interface CardInfo {
  imageSrc: any;
  alt: string;
  title: string;
  description: string;
  authorInfo: string;
  publishDate: string;
}

interface Props {
  cardInfo: CardInfo;
  key: number;
}
const BlogCard = ({ cardInfo, key }: Props) => {
  return (
    <a key={key} className="max-w-sm min-w-64 bg-neutral-50 shadow">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden ">
        <Image
          src={cardInfo?.imageSrc}
          alt={cardInfo?.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-3 space-y-3">
        <h3 className="text-lg font-semibold text-neutral-900 ">
          {cardInfo?.title}
        </h3>
        <p className="text-sm font-normal text-neutral-600 line-clamp-4 ">
          {" "}
          {cardInfo?.description}
        </p>
        <div className="flex justify-start items-center space-x-3 text-xs font-medium text-sky-600">
          <p className="">by {cardInfo?.authorInfo}</p>
          <span className="w-1 h-1 bg-sky-600 rounded-full"></span>
          <p className="">{cardInfo?.publishDate}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
