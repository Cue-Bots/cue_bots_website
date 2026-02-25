import React from 'react';

// use : <FluidGlass className="votre-classe">...</FluidGlass>

const FluidGlass = ({ className = '', style = {}, children }) => (
  <div
    className={`fluid-glass-bg ${className}`}
    style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      ...style
    }}
  >
    {children}
  </div>
);

export default FluidGlass;