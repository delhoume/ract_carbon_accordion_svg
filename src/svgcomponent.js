import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export function SvgComponent(props) {
  const svgParentRef = useRef(null);
  const svgRef = useRef(null);

  const [width, setWidth] = useState();

  // This function calculates width and height of the container
  const getSvgContainerSize = () => {
    const newWidth = svgParentRef.current.clientWidth;
    console.log("newWidth", newWidth);
    setWidth(newWidth);
  };

  useEffect(() => {
    // detect 'width' and 'height' on render
    getSvgContainerSize();
    // listen for resize changes, and detect dimensions again when they change
    window.addEventListener("resize", getSvgContainerSize);
    // cleanup event listener
    return () => {
      window.removeEventListener("resize", getSvgContainerSize);
    };
  }, []);

  // create the rect in the svg
  useEffect(() => {
    const w = svgParentRef.current.clientWidth;
    console.log("parentWidth", w);
    let height = 400;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "red");
  });

  return (
    <div ref={svgParentRef}>
      <svg ref={svgRef} />
    </div>
  );
}
