import React from "react";
import "./Services.modules.css";
import shutter from "../../Assets/Images/shutterstock_108327083@2x.png";

function Carrers() {
  return (
    <div className="Carrers container" id="Carrers">
      <div className="row">
        <div className="col-md-6 col-sm-12 portfolio2-content">
          <span className="page-suggester">PORTFOLIO</span>
          <h1 className="portfolio-heading">
            Trusted By Biggest
            <span className="red-spammers">Business Names</span>
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
            layout. A practice not without controversy. <br />, laying out pages
            with meaningless filler text can be very useful when the focus is
            meant to be on design, not content. The passage experienced a surge
            in popularity during the 1960s when Letraset used it on their
            dry-transfer sheets, and again during the 90s as desktop publishers
            bundled the text with their software. Today it's seen all around the
            web; on templates, websites, and stock designs. Use our generator to
            get your own, or read on for the authoritative history of lorem
            ipsum.empor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="read-more">Read more</button>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="shutter-img">
            <img src={shutter} className="stud-group" alt="portfolio2"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrers;
