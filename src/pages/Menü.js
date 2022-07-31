import React from 'react';
import Data from './../components/Data';

 {/* map ile tüm data bilgillere geçtip item değişkene kaydetttim */}

const Menü = () => {
   

  const blogitem = Data.map((item)=>{
    return(
<div>
    <div  className = 'col-md-2'> 
    <img src ={item.img}/>
    <h5>{item.title}</h5>
     <h6>{item.price}</h6>
   
  
    </div>
 <button> <a href='#'></a>Hemen Sipariş Ver</button>
</div>

    )


  })
  return(
   
    <section>

      <div className ='row'>

        {blogitem}
      </div>


</section>



);
  
   
};

export default Menü;
