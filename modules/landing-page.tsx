import Introduction from "./introduction";
import Landing from "./landing";
import Portfolio from "./portfolio";
import Partners from "./partners";
import ContactUs from "./contact-us";
import Description from "@/modules/description";

export default function Landingpage() {
  return (
    <>
      <Landing />
      <Introduction />
      <Description />
      <Portfolio />
      <Partners />
      <ContactUs />
    </>
  );
}
