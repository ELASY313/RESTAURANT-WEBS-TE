import React  from 'react';
import {Link} from "react-router-dom";
{/* react dom`dan Link çağırdım */}


const Navbar = () => {
  

    return(
        
<>
<nav>
    <div>
            
          

            <img className="logo"  src="https://www.chefizakaya.com/img/202010856281744242495297.png"/>
         
            </div>
    
{/* link to ve app.js file`deki router path kullanarak navigation yaptın ve linklerini çalıştırdım */}
            <ul >
            
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/Menü"> Menü  </Link></li>
                <li><Link to="/Hakkımızda">Hakkımızda </Link></li>
                <li><Link to="/İletişim">İletişim</Link></li>
            </ul>
            
    
   
            </nav>

</>
    );
};

export default Navbar;