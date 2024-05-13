import React from "react";
import kabinetPicRev from "../../../assets/kabinetPicRev.svg";

const Kabinetpic = () => {
    return (
        <div className="flex flex-col w-full lg:max-w-[1920px] h-auto mt-0 mb-0 bg-cust-background items-center justify-center">
            <div className="flex flex-col w-full py-20 lg:bg-[url('https://res.cloudinary.com/dnoqmou6x/image/upload/v1714531235/bgPicKab_dvtqbz.png')] mx-auto items-center justify-center">
                <div className="rounded-lg m-0 p-0.5 w-10/12 h-auto pb-20">
                    <img src="https://res.cloudinary.com/dnoqmou6x/image/upload/v1715357934/Group_1970_llhuug.png" alt="Gambar Kabinet Arthakara"/>
                </div>
            </div>
        </div>
    )
}

export default Kabinetpic