import React from "react";
import "./AboutPage.modules.css";
export default function AboutPage() {
  return (
    <div className="About-page container-fluid">
      <div className="row">
        <div className="about-imagin col-md-5 col-sm-12">
          <span className="page-suggester">ABOUT</span>
          <h1 className="h1-bg">
            We are more than you <span className="red-spammers">imagine</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
            <br />
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
            purpose of lorem ipsum is to create a natural looking block of text
            (sentence, paragraph, page, etc.) that doesn't distract from the
            layout. A practice not without controversy.
          </p>
        </div>
        <div className="col-md-7 col-sm-12">
          <div>
            <div className="mission-bg">
              <div className="mission-bg"></div>
              <h1 className="mission-bg">
                Our Mission & Vision Successful Business
              </h1>
            </div>

            <p>
              Our mission is to provide expertise, efficiency, and excellence in
              service to enhance the digital and cloud ecosystems of our
              customers. With expert analysis, creative design and development,
              implementation, and support, the Eficens team will help clients to
              deliver market-defining, high quality solutions that create value
              and reliable competitive advantage to customers around the globe.
            </p>
            <button className="about-read-more">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
