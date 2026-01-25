import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  src,
  alt,
  className,
  href,
}: {
  src: string;
  alt: string;
  className: string;
  href: string;
}) => {
  return (
    <div>
      <Link
        href={href}
        target="_blank"
        className="rounded-md group card overlay "
      >
        <Image src={src} height={300} width={300} alt={alt} />
      </Link>
    </div>
  );
};

export default Card;
