import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import { compVisionLanding, companyName, socials } from "@/data";

export default function Landing() {
  const mapper = (Value: IconType, key: number) => {
    return (
      <Link href="/" key={key}>
        <Value />
      </Link>
    );
  };

  return (
    <main className="main-landing">
      <div className="img-container back-0">
        <Image
          src="/assets/images/background.webp"
          alt="Background"
          fill
          priority
          sizes="100%"
        />
      </div>
      <div className="main-landing-container">
        <h1 className="main-heading">WELCOME TO {companyName}</h1>
        <div className="main-container">
          <p className="main-para">{compVisionLanding}</p>
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
      </div>
    </main>
  );
}
