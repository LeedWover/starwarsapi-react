import React from "react";

import './starwarsCrawl.css';

function Crawl({ title, crawl }) {
  return (
    <div className="crawl-wrapper">
      <div className="fade"></div>

      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h1>{title}</h1>
          </div>

          <p>
            {crawl}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Crawl;
