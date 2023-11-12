import React from "react";

export const Timeline = (props) => {
  return (
    <div id="timeline" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>
            Why Choose Solar?
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};