import React from "react";
export { default as Title } from "./Title";
/**
 * Create/export a component called Title which uses this static HTML as the template:
 */

const Title = () => {
  return (
    <div id="title">
      <h1>The Art Collector</h1>*{" "}
      <h5>* Search the Harvard Art Museums' Private Collections </h5>
    </div>
  );
};

export default Title;
