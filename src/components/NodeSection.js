import { useEffect, useRef } from "react";

const Node = ({ children }) => (
  <div className="w-24 h-24 bg-purple-500 text-white flex items-center justify-center">{children}</div>
);

const NodesSection = () => {
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);

  useEffect(() => {
    const nodesSection = document.getElementById("nodesSection");
    const length1 = lineRef1.current.getTotalLength();
    const length2 = lineRef2.current.getTotalLength();
    
    const animate = () => {
      lineRef1.current.style.transition = "none";
      lineRef1.current.style.strokeDasharray = `${length1} ${length1}`;
      lineRef1.current.style.strokeDashoffset = length1;
      lineRef2.current.style.transition = "none";
      lineRef2.current.style.strokeDasharray = `${length2} ${length2}`;
      lineRef2.current.style.strokeDashoffset = length2;

      requestAnimationFrame(() => {
        lineRef1.current.style.transition = "stroke-dashoffset 2s ease-in-out";
        lineRef1.current.style.strokeDashoffset = "0";
        setTimeout(() => {
          lineRef2.current.style.transition = "stroke-dashoffset 2s ease-in-out";
          lineRef2.current.style.strokeDashoffset = "0";
        }, 2000);
      });
    }

    const resetLines = () => {
      lineRef1.current.style.transition = "none";
      lineRef1.current.style.strokeDashoffset = length1;
      lineRef2.current.style.transition = "none";
      lineRef2.current.style.strokeDashoffset = length2;
    }

    nodesSection.addEventListener("mouseenter", animate);
    nodesSection.addEventListener("mouseleave", resetLines);

    return () => {
      nodesSection.removeEventListener("mouseenter", animate);
      nodesSection.removeEventListener("mouseleave", resetLines);
    };
  }, []);

  return (
    <div id="nodesSection" className="relative w-full h-screen bg-white flex justify-around items-center">
      <Node>Database</Node>
      <Node>Table</Node>
      <Node>Cloud</Node>
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <line ref={lineRef1} x1="17%" y1="50%" x2="50%" y2="50%" stroke="purple" strokeWidth="2" />
        <line ref={lineRef2} x1="50%" y1="50%" x2="83%" y2="50%" stroke="purple" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default NodesSection;
