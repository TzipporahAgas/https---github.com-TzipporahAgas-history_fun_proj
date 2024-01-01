import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import saveAs from "file-saver";
import next from "../../assests/next.png"
import nameImg from "../../assests/fname.png"
import phone from "../../assests/phone.png"
import namebackground from "../../assests/name.png"
import img1 from "../../assests/cup.png"
import img2 from "../../assests/camera.png"
import img3 from "../../assests/hat.png"
import img4 from "../../assests/product4.png"
import img5 from "../../assests/product5.png"
import img6 from "../../assests/product6.png"

import chooseprintbase from "../../assests/chooseprintbase.png"

import './Product.css'
export default function Product() {
    const navigate = useNavigate();
    const [printBase, setPrintBase] = useState("");
    const btns: any = [
        { img: img1, id: "cup" },
        { img: img2, id: "camera" },
        { img: img3, id: "hat" },
        { img: img4, id: "product4" }, 
        { img: img5, id: "product5" },
        { img: img6, id: "product6" },]
    const nextPage = async () => {

        navigate("../Period");
    }

    const chosenPrintBase = async (id: any) => {
        setPrintBase(id)
        // setFlag(true)
        //  alert(nameofPeriod)

        // navigate("../Subject", { state: { period: id } });
    }
    return (<div className="product">

         <img className="chooseprintbase" src={chooseprintbase} />

        <div className="chooseprintbasebtns">
            {btns?.map((btn: any) =>
                <img className="chooseprintbasebtnsBtn" src={btn.img} onClick={() => chosenPrintBase(btn.id)} />
            )}
        </div> 

    </div>

    )
}







