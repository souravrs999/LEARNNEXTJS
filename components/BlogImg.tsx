import Image from "next/image";

export default function BlogImg(props) {
  return (
    <div className="my-3">
      <Image
        src={props.src}
        alt={props.alt}
        {...props}
        placeholder="blur"
        blurDataURL="/img/banner-800x514.png"
      />
    </div>
  );
}
