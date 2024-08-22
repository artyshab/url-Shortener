import "../design/midsection-design/Midsection.scss";
import Card from "./Card";
import Heading from "./Heading";
import image1 from "../assets/cards/chart-svgrepo-com.svg";
import image2 from "../assets/cards/magnifier-svgrepo-com.svg";
import image3 from "../assets/cards/design-ideas-svgrepo-com.svg";

export default function MidSection() {
  return (
    <>
      <div className="container">
        <div className="midsection-wrapper">
          <Heading
            className="midsection-text"
            heading="Advanced Statistics"
            paragraph="Track how your links are perfoming accross the web with our advanced statistics dashboard"
          />
          <div className="cards">
          <Card
            className="card"
            heading="Brand Recognition"
            paragraph="Boost your brand recognition with each click.Generic clicks don't mean a thing.Branded links with help instill confidence in your content."
            image={image1}
          />
          <Card
            className="card"
            heading="Detailed Recognition"
            paragraph="Gain insights into who is clicking your links.Knowing when and where people engage whith your content helps inform better decisions."
            image={image2} 
          />
          <Card
            className="card"
            heading="Fully Customizable"
            paragraph="Improve brands awereness and content discoverability through custumizible links, supercharging audience engagement."
            image={image3}
          />
        </div>
        </div>
      </div>
    </>
  );
}
