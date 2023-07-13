import Image from "next/image";

export default function Portfolio() {
  const galleryImages = [
    {
      src: "/assets/images/image1.webp",
      alt: "Gallery Image1",
      name: "image-1",
    },
    {
      src: "/assets/images/image2.webp",
      alt: "Gallery Image2",
      name: "image-2",
    },
    {
      src: "/assets/images/image3.webp",
      alt: "Gallery Image3",
      name: "image-3",
    },
    {
      src: "/assets/images/image4.webp",
      alt: "Gallery Image4",
      name: "image-4",
    },
    {
      src: "/assets/images/image5.webp",
      alt: "Gallery Image5",
      name: "image-5",
    },
    {
      src: "/assets/images/image6.webp",
      alt: "Gallery Image6",
      name: "image-6",
    },
  ];

  const mapper = (
    val: {
      src: string;
      alt: string;
      name: string;
    },
    ind: number
  ) => {
    return (
      <div className={`img-container ${val.name}`} key={ind}>
        <Image src={val.src} alt={val.alt} fill priority sizes="100%"></Image>
      </div>
    );
  };

  return (
    <section className="gallery-main">
      <h3 className="gallery-header">
        <span className="gallery-heading">RECENT WORKS</span>
        <p className="gallery-description">
          We love what we do, check out some of our latest works
        </p>
      </h3>
      <div className="gallery-container">
        <div className="gallery">{galleryImages.map(mapper)}</div>
      </div>
    </section>
  );
}
