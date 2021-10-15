import Image from 'next/image';

export default function BlogImg(props) {
  return (
    <div className="my-3">
      <Image
        src={props.src}
        alt={props.alt}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/img/banner-800x514.png"
        {...props}
        className="rounded"
      />
    </div>
  );
}
