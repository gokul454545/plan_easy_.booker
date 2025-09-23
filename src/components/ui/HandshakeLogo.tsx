
import React from 'react';


const HandshakeLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor" // 'currentColor' will make the SVG inherit the text color from CSS
    {...props} // Spread all other props (like className, width, height)
  >
    {/* This is the SVG path data for a handshake icon. */}
    <path d="M11.75 3.5h.5a1 1 0 0 1 .5 1.732l-3 5.196a1 1 0 0 1-.866.5h-2.5a1 1 0 0 1-.866-.5l-3-5.196a1 1 0 0 1 .5-1.732h.5l1.5 2.598-1.5 2.598-.25-.433a1 1 0 0 0-.866-.5h-2.5a1 1 0 0 0-.866.5L.25 10.705a1 1 0 0 0 .5 1.732l3 5.196a1 1 0 0 0 .866.5h2.5a1 1 0 0 0 .866-.5l3-5.196a1 1 0 0 0-.5-1.732h-.5l-1.5-2.598 1.5-2.598.25.433a1 1 0 0 0 .866.5h2.5a1 1 0 0 0 .866-.5l3-5.196a1 1 0 0 0 .5-1.732h-.5z"/>
  </svg>
);

export default HandshakeLogo;