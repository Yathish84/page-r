// import { useEffect, useRef, useState } from 'react';

// const Card = () => {
//   const [isVisible, setVisible] = useState(false);
//   const domRef = useRef();
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => setVisible(entry.isIntersecting));
//     });
//     observer.observe(domRef.current);

//     return () => observer.unobserve(domRef.current);
//   }, []);

//   return (
//     <div
//       className={`transform transition-transform duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
//       ref={domRef}
//     >
//       {/* your card content */}
//       <div class="max-w-sm rounded overflow-hidden shadow-lg">
//   <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
//   <div class="px-6 py-4">
//     <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//     <p class="text-gray-700 text-base">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//     </p>
//   </div>
//   <div class="px-6 pt-4 pb-2">
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//   </div>
// </div>
//     </div>
//   );
// }

// export default Card;
import React from 'react'

export default function Card() {
  return (
    <div>
        {/* <div class="px-8 py-32">
  <div class="grid gap-8 items-start justify-center">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-2xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-20 animate-tilt"></div>
      <button class="relative px-7 py-4 bg-gray-100 p-5  bg-opacity-100 backdrop-filter backdrop-blur-lg rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span class="flex items-center space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span class="pr-6 text-gray-100">Labs Release 2021.09</span>
        </span>
        <span class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">See what's new &rarr;</span>
      </button>
    </div>
  </div>
</div> */}
<div class="card">
  Magic Card
</div>
    </div>
  )
}
