import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoBehance,
  BiLogoDribbble,
} from "react-icons/bi";
import { IconType } from "react-icons/lib";
import { companyName } from "@/data";

export default function Landing() {
  const socials = [
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoInstagram,
    BiLogoBehance,
    BiLogoDribbble,
  ];

  const mapper = (Value: IconType, key: number) => {
    return (
      <Link href="/" key={key}>
        <Value />
      </Link>
    );
  };

  return (
    <>
      <div className="img-container back-0">
        <Image
          src="/assets/images/background.webp"
          alt="Background"
          fill
          priority
          sizes="100%"
        />
      </div>
      <main className="main-landing">
        <h1 className="main-heading">WELCOME TO {companyName}</h1>
        <div className="main-container">
          <p className="main-para">
            {`We are a creative group of people who are ditching 0's and 1's and shifting\
 towards a Quantum revolution.`}
          </p>
          <div className="main-socials">{socials.map(mapper)}</div>
        </div>
        <div className="main-btn-container">
          <Link href="/" className="main-link _1">
            More about us
          </Link>
          <Link href="/" className="main-link _2">
            Get in touch
          </Link>
        </div>
      </main>
    </>
  );
}
