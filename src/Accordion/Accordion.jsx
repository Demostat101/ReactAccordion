

import { useState } from "react";
import "../Accordion/Accordion.css";
import ArrayData from "./ArrayData";
import MobileImage from "../assets/background-pattern-mobile.svg"
import DesktopImage from "../assets/background-pattern-desktop.svg"
import StarImage from "../assets/icon-star.svg"


let Accordion = ()=>{
    
    let [accord, setAccord] = useState("");
    
    let [enableMultiAccordion, setEnableMultiAccordion] = useState(false);

    let [multiAccordion, setMultiAccordion] = useState([]);

    let [isClicked, setIsClicked] = useState(false);

    let Clicked = ()=>{

         setIsClicked(!isClicked)
    }

    
    let showAnswer = (getSelected)=>{
    
        return setAccord(getSelected === accord ? "": getSelected)
    }
    
    let ShowMultiAccordion = (getSelectedId)=>{

        let cloneMultiAccordion = [...multiAccordion];

        let findIndexOfGetSelectedId = cloneMultiAccordion.indexOf(getSelectedId);

         (findIndexOfGetSelectedId === -1) ? cloneMultiAccordion.push(getSelectedId) : cloneMultiAccordion.splice(findIndexOfGetSelectedId,1);

         setMultiAccordion(cloneMultiAccordion);

    }



    return(
        <div className="container">  

            <div className="topper">
                <img src={MobileImage} alt="" className="mobile" />
                <img src={DesktopImage} alt="" className="desktop" />
            </div>

            <div className="combined">

                <div className="wrapper">

                    <div className="starFaq">
                        <img src={StarImage} alt="" className="star" />
                        <div className="faq">FAQ</div>
                    </div>

                    <div className="buttonContainer">

                        <button className="switch" onClick={()=>setEnableMultiAccordion(!enableMultiAccordion)}>{!enableMultiAccordion? "Enable Multi Accordion": "Enable Single Accordion"}</button>

                    </div>

                    {

                        ArrayData.map(val =>{
                            
                            return <div className="allData" key = {val.id}>

                                <div className="quesAndSign">

                                    <div className="Question">{val.Question}</div>

                                    <div className="sign" onClick={ enableMultiAccordion ? ()=> ShowMultiAccordion (val.id) : ()=> showAnswer(val.id)}>

                                        <div className="btn" onClick={Clicked}>

                                            {accord === val.id || multiAccordion.indexOf(val.id) !== -1  ? <img src={val.img2} alt="" className="minus"/>
                                            : <img src={val.img1} alt="" className="plus"/> }
                                            

                                        </div>
                                        
                                    </div>
                                
                                </div>


                                {
                                    accord === val.id || multiAccordion.indexOf(val.id) !== -1 ? <div className="Answer">{val.Answer}</div> : ""
                                }

                                <hr />
                            </div>
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Accordion