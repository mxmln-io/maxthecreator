import { Image } from "./Image";
import React from "react";

export const Portfolio = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <a
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    href={d.link || "#!"}
                  >
                    <Image
                      title={d.title}
                      smallImage={d.smallImage}
                    />
                  </a>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
