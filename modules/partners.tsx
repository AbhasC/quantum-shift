import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  DiGithub,
  DiReact,
  DiBlackberry,
  DiDropbox,
  DiFirefox,
  DiVisualstudio,
} from "react-icons/di";
import Carousel from "react-multi-carousel";
import { companyName } from "@/data";
import "react-multi-carousel/lib/styles.css";

export default function Partners() {
  const partnerLogos = [
    DiGithub,
    DiReact,
    DiBlackberry,
    DiDropbox,
    DiFirefox,
    DiVisualstudio,
    DiGithub,
    DiReact,
    DiBlackberry,
    DiDropbox,
    DiFirefox,
    DiVisualstudio,
    DiGithub,
    DiReact,
    DiBlackberry,
    DiDropbox,
    DiFirefox,
    DiVisualstudio,
  ];

  const mapper = (Val: IconType, ind: number) => {
    return (
      <Link href="/" className="logo" key={ind}>
        <Val />
      </Link>
    );
  };

  const feedbackCarouselData = [
    {
      para: "At QuantumShift, we are pioneering quantum\
       solutions to revolutionize computing and problem-solving.\
       Our expertise in quantum physics, computer science, and\
       engineering allows us to unlock the true potential of \
      quantum systems, enabling breakthrough advancements and \
      transforming industries. Partner with us to embark on a \
      quantum adventure and unlock unprecedented opportunities \
      in a smarter, more connected world.",
      src: "user1.webp",
      alt: "user1",
      username: "Sundar Pichai",
      designation: "CEO, Google",
    },
    {
      para: "At QuantumShift, we are pioneering quantum\
       solutions to revolutionize computing and problem-solving.\
       Our expertise in quantum physics, computer science, and\
       engineering allows us to unlock the true potential of \
      quantum systems, enabling breakthrough advancements and \
      transforming industries. Partner with us to embark on a \
      quantum adventure and unlock unprecedented opportunities \
      in a smarter, more connected world.",
      src: "user1.webp",
      alt: "user2",
      username: "Gobind Singh",
      designation: "CEO, Hymns of Web",
    },
    {
      para: "At QuantumShift, we are pioneering quantum\
       solutions to revolutionize computing and problem-solving.\
       Our expertise in quantum physics, computer science, and\
       engineering allows us to unlock the true potential of \
      quantum systems, enabling breakthrough advancements and \
      transforming industries. Partner with us to embark on a \
      quantum adventure and unlock unprecedented opportunities \
      in a smarter, more connected world.",
      src: "user1.webp",
      alt: "user3",
      username: "Satya Nadella",
      designation: "CEO, Microsoft",
    },
    {
      para: "At QuantumShift, we are pioneering quantum\
       solutions to revolutionize computing and problem-solving.\
       Our expertise in quantum physics, computer science, and\
       engineering allows us to unlock the true potential of \
      quantum systems, enabling breakthrough advancements and \
      transforming industries. Partner with us to embark on a \
      quantum adventure and unlock unprecedented opportunities \
      in a smarter, more connected world.",
      src: "user1.webp",
      alt: "user4",
      username: "Neal Mohan",
      designation: "CEO, YouTube",
    },
    {
      para: "At QuantumShift, we are pioneering quantum\
       solutions to revolutionize computing and problem-solving.\
       Our expertise in quantum physics, computer science, and\
       engineering allows us to unlock the true potential of \
      quantum systems, enabling breakthrough advancements and \
      transforming industries. Partner with us to embark on a \
      quantum adventure and unlock unprecedented opportunities \
      in a smarter, more connected world.",
      src: "user1.webp",
      alt: "user5",
      username: "Leena Nair",
      designation: "CEO, Pepsico",
    },
    {
      para: "At QuantumShift, we are pioneering quantum\
       solutions to revolutionize computing and problem-solving.\
       Our expertise in quantum physics, computer science, and\
       engineering allows us to unlock the true potential of \
      quantum systems, enabling breakthrough advancements and \
      transforming industries. Partner with us to embark on a \
      quantum adventure and unlock unprecedented opportunities \
      in a smarter, more connected world.",
      src: "user1.webp",
      alt: "user6",
      username: "Shantanu Narayen",
      designation: "CEO, Adobe",
    },
  ];

  const feedbackResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const logoResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 5,
      slidesToSlide: 2,
    },
    mobileLarge: {
      breakpoint: { max: 900, min: 600 },
      items: 4,
      slidesToSlide: 2,
    },
    mobileSmall: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
      slidesToSlide: 2,
    },
  };

  const carouselMapper = (
    val: {
      para: string;
      src: string;
      alt: string;
      username: string;
      designation: string;
    },
    ind: number
  ) => {
    return (
      <div className="partner-feedback-container" key={ind}>
        <p className="partner-feedback-para">{val.para}</p>
        <div className="feedback-user">
          <div className="img-container">
            <Image
              src={`/assets/images/${val.src}`}
              alt={val.alt}
              fill
              priority
              sizes="100%"
            />
          </div>
          <span className="feedback-user-name">{val.username}</span>
          <span className="feedback-user-desc">{val.designation}</span>
        </div>
        <div className="icon-right"></div>
      </div>
    );
  };

  return (
    <>
      <div className="img-container back-3">
        <Image
          src="/assets/images/background-grey.webp"
          alt="Background"
          fill
          priority
          sizes="100%"
        />
      </div>
      <section className="partner-main">
        <h3 className="partner-head">
          <span className="partner-heading">OUR CLIENTS</span>
          <p className="partner-subheading">
            {companyName} has been honored to partner up with these clients
          </p>
        </h3>
        <div className="logo-container">
          <Carousel
            responsive={logoResponsive}
            swipeable={false}
            draggable={false}
            ssr={true}
            infinite={true}
            autoPlay={true}
            showDots={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            removeArrowOnDeviceType={[
              "desktop",
              "mobileLarge",
              "tablet",
              "mobileSmall",
            ]}
            className="logo-carousel"
          >
            {partnerLogos.map(mapper)}
          </Carousel>
        </div>
        <div className="partner-feedback">
          <div className="icon-left"></div>
          <Carousel
            responsive={feedbackResponsive}
            swipeable={false}
            draggable={false}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["mobile"]}
            className="partner-carousel"
          >
            {feedbackCarouselData.map(carouselMapper)}
          </Carousel>
        </div>
      </section>
    </>
  );
}
