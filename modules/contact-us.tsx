import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { contactSocials } from "@/data";

export default function ContactUs() {
  const mapper = (Value: IconType, key: number) => {
    return (
      <Link href="/" key={key} className="cu-social-icon">
        <Value />
      </Link>
    );
  };
  return (
    <section className="contact-us-main">
      <div className="img-container back-5">
        <Image
          src="/assets/images/background-speakers.webp"
          alt="Background"
          fill
          sizes="100%"
        />
      </div>
      <h3 className="contact-us-head">
        <span className="contact-us-heading">CONTACT US</span>
        <p className="contact-us-subheading">
          Reach out for a new project or just say hello
        </p>
      </h3>
      <div className="contact-us-container">
        <div className="contact-us-form">
          <span className="cu-form-header">SEND US A MESSAGE</span>
          <form className="cu-form">
            <input
              type="text"
              placeholder="Your Name"
              className="cu-form-el name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="cu-form-el email"
            />
            <input
              type="text"
              placeholder="Subject"
              className="cu-form-el subject"
            />
            <textarea
              rows={10}
              placeholder="Your Message"
              className="cu-form-el message"
            />
            <button type="submit" className="cu-submit">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="contact-us-info">
          <span className="cu-contact-info-header">CONTACT INFO</span>
          <div className="cu-contact-info">
            <div className="cu-find-us">
              <span className="cu-fu-header">Where to Find Us</span>
              <p className="cu-fu-para">
                1600, Amphitheatre, Parkway Mountain View, CA, 94043, US
              </p>
            </div>
            <div className="cu-email-us">
              <span className="cu-eu-header">Email Us At</span>
              <span className="cu-eu-email1">contact@glintsite.com</span>
              <span className="cu-eu-email2">info@glintsite.com</span>
            </div>
            <div className="cu-call-us">
              <span className="cu-cu-header">Call us at</span>
              <span className="cu-cu-phone">Phone: (+63) 555 1212</span>
              <span className="cu-cu-mobile">Mobile: (+63) 555 0100</span>
              <span className="cu-cu-fax">Fax: (+63) 555 0101</span>
            </div>
            <div className="cu-socials">{contactSocials.map(mapper)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
