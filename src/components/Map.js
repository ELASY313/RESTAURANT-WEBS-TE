import React from 'react'


{/*iframe kullanarak harita ekledim */}

const Map = () => {
  return (
  <div  className="map">
    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=K%C4%B1z%C4%B1l%C4%B1rmak,%201450.%20Sk.%203-1,%2006510%20%C3%87ankaya/Ankara&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    
    </div>
  )

};

export default Map;
