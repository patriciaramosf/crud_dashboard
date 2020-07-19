import React from 'react';
import Particles from 'react-particles-js';
const Header = () =>{
return(
    <div className="header">
        <p>A simple records system using MongoDB, React.js, and Node.js.</p>
        <p>REST API was implemented on the back-end. Semantic UI React was used for the UI, React Virtualized.</p>
        <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 2000, 
              } 
            }, 
          }, 
        }} 
      /> 
    </div>
)
}

export default Header;