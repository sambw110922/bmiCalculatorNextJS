
"use client";

import { useState } from "react";
//  The stylesheet
import "./progressindicatorstyle.css";

//  Progress indicator component
export default function ProgressIndicator(props){

    //  Depending on the part type, display the different progress points (breadcrumbs)
    const DisplayProgressPoints = () => {

        switch(props.partType){
            
            case 1:
                return (
                    <>
                        <button onClick={ 
                            () => {
                                props.choosePart(1);
                            }
                         } className="displayProgressPoint" >Select Measurements</button>
                    </>
                    
                );
            break;

            case 2:
                return (
                    <>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(1);
                            }
                         } className="displayProgressPoint" >Select Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(2);
                            }
                         } className="displayProgressPoint">Enter Measurements</button>
                    </>
                );
            break;

            case 3:
                return (
                    <>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(1);
                            }
                         } className="displayProgressPoint" >Select Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(2);
                            }
                         }  className="displayProgressPoint">Enter Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(3);
                            }
                         } className="displayProgressPoint">Review Measurements</button>
                    </>
                );
            break;

            case 4:
                return (
                    <>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(1);
                            }
                         } className="displayProgressPoint" >Select Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(2);
                            }
                         }  className="displayProgressPoint">Enter Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(3);
                            }
                         }  className="displayProgressPoint">Review Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(4);
                            }
                         }  className="displayProgressPoint">Calculate BMI</button>
                    </>
                );
            break;

            case 5:
                return (
                    <>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(1);
                            }
                         } className="displayProgressPoint" >Select Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(2);
                            }
                         }  className="displayProgressPoint">Enter Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(3);
                            }
                         }  className="displayProgressPoint">Review Measurements</button>
                        <button onClick={ 
                            ()=>{
                                props.choosePart(4);
                            }
                         }  className="displayProgressPoint">Calculate BMI</button>
                        <button className="displayProgressPoint">Done!</button>
                    </>
                );
            break;


        }

    }

    return (

        <section id="progressList">
            {
                DisplayProgressPoints()
            }
        </section>
        
    );

}