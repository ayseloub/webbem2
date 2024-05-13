import React from "react";
// import Contoh from "./Compponent/HomeComp/Contoh";
import Welcome from "./Compponent/Landing/Welcome";
import Sambutan from "./Compponent/Landing/Sambutan"
import Segment4 from "./Compponent/Landing/segment4";
// import Contoh from "../Contoh";
import Tentang from "./Compponent/Landing/Tentang";
import Artikel from "./Compponent/Landing/Artikel";
import Company from "./Compponent/Landing/Companydown";
import Value from "./Compponent/Landing/Valuemag";
import Contoh from "./Compponent/Landing/Contoh";
// import Sambutan from "./Compponent/HomeComp/Sambutan";


const Landing = () => {
  return (
    <div>
    <>
    <Welcome />
    <Sambutan />
    <Tentang />
    <Artikel/>
    <Contoh/>
    <Segment4 />
    </>

    </div>
    
  )
};

export default Landing;
