import { useEffect, useState, useRef } from "react";
import Card from "./Card";


const words = ["develop API", "deploy API", "go to market"];

export default function Dashboard(){
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const [transitionClass, setTransitionClass] = useState('');
  const [theme, setTheme] = useState('light');
  const nextSectionRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTransitionClass('');
      setPosition({
        x: `${(e.clientX / window.innerWidth) * 100}%`,
        y: `${(e.clientY / window.innerHeight) * 100}%`
      });
    };
    const handleMouseLeave = () => {
      setTransitionClass('transition-all duration-500 ease-in-out');
      setPosition({ x: '50%', y: '50%' });
    };
    const bannerEl = document.getElementById("banner");
    bannerEl.addEventListener('mousemove', handleMouseMove);
    bannerEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      bannerEl.removeEventListener('mousemove', handleMouseMove);
      bannerEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClick = () => {
    nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 3000); // Change words every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div id="banner" className="relative w-full h-screen flex  items-center justify-center bg-white/90 overflow-hidden">
     <div 
      className={`absolute w-96 h-96 scale-150 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2 ${transitionClass} bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-[#CFBCE7] via-[#E160F3] to-[#8e7ffe]`} 
  style={{ 
    left: position.x, 
    top: position.y,
    // backgroundImage: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500'
    // bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500
      }}
    />
      <div className="absolute inset-0  backdrop-blur-md p-4 rounded-md flex flex-col item-center pt-40  ">
      <div className="flex  item-center">
      <h1 className="text-7xl font-bold text-white">
        Easiest way to {''}
        <span className="relative">
          {words.map((word, i) => (
            <span
              key={word}
              className={`absolute ml-2 w-max opacity-0 transition-opacity duration-500 text-purple-500 ${i === index ? 'opacity-100' : ''}`}
            >
              {word}
            </span>
          ))}
        </span>
      </h1>
    </div>
        <p className="mt-2 text-lg text-gray-900 font-serif ">Improve your API Development TAT by 70%</p>
        
      </div>
    
    </div>
    

   
</>
  );
};


