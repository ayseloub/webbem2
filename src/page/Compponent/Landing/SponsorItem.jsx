import React from "react";

const SponsorItem = ({ imageSrc, altText, alamat, benefit, ketentuan, onClick }) => (
    <div className="box-border w-36 h-36 bg-cust-white rounded-lg mx-6" onClick={onClick}>
      <img src={imageSrc} alt={altText} className="pt-4 px-1 h-[100px] w-[100px] mx-auto" />
      <p className="text-center pt-2 font-lato text-cust-gray">{altText}</p>
    </div>
  );
  

export default SponsorItem;
