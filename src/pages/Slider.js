import React from 'react';
import Marquee from 'react-fast-marquee';
/*react-fast-marquee library indirdim */
import foto1 from './../photo/1.png';
import foto2 from './../photo/2.png';
import foto3 from './../photo/3.png';
import foto4 from './../photo/4.png';
import foto5 from './../photo/5.png';
import foto6 from './../photo/6.png';

const Slider = () => {
  return (
 
        /*Marquee tag kullanarak slider yaptım farklı div`ler içerisine fotografları yerleştirip slider hızını ve yönü direction ve speed tagları ile belirledim */
      <div>
        <Marquee direction="right" speed={100} delay={5}>

          <div className="image_wrapper">
            <img src={foto1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={foto2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={foto3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={foto4} alt="" />
          </div>
          <div>
            <img src={foto5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={foto6} alt="" />
          </div>
           
        </Marquee>
      </div>
      
 
  )
}

export default Slider
