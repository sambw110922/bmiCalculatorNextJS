
"use client";

import { useState } from "react";

//  Decide on what measurements
import Measurements from "./components/measurements/measurements";

//  Imperial form
import ImperialForm from "./components/imperial/imperialform";

//  Metric form 
import MetricForm from "./components/metric/metricform";

//  The review panel 
import ReviewPanel from "./components/review/reviewpanel";

//  Calculate the BMI
import CalculateResults from "./components/results/calculateresults";

export default function Page(){

    //  The current part being used
    var [ currentPart, setCurrentPart ] = useState(1);

    //  if imperial 
    var [ isImperial, setIsImperial ] = useState(true);

    //  The height value
    var [ heightValue, setHeightValue ] = useState(0.0);

    //  The weight value
    var [ weightValue, setWeightValue ] = useState(0.0);

    //  Values for reviews.
    var [ feetValue, setFeetValue ] = useState(0);
    var [ inchesValue, setInchesValue ] = useState(0);
    var [ cmsValue, setCmsValue ] = useState(0);
    var [ stoneValue, setStoneValue ] = useState(0);
    var [ poundsValue, setPoundsValue ] = useState(0);
    var [ kgsValue, setKgsValue ] = useState(0);

    //  Goes to a specific part on the form. 
    const GoToPart = (partNo) => {

        if(partNo > 0  && partNo < 5){
            setCurrentPart(partNo);
            DisplayCurrentPart();
        }

    }

    //  Set the height.
    const EnterHeight = (height, units) => {
        
        setHeightValue(height);

        if(isImperial == true){
            setFeetValue(units.feet);
            setInchesValue(units.inches);
        } else {
            setCmsValue(units.cms);
        }

    }

    //  Set the weight.
    const EnterWeight = (weight, units) => {

        setWeightValue(weight);

        if(isImperial == true){
            setStoneValue(units.stone);
            setPoundsValue(units.pounds);
        } else {
            setKgsValue(units.kgs);
        }

    }

    //  Increments the part number or resets to 1 if at maximum
    const ChangePartNumber = () => {

        if(currentPart == 4){
            setCurrentPart(1);
        } else {
            let nextPart = currentPart + 1;
            setCurrentPart(nextPart);
        }

    }

    //  Displays the appropriate part.
    const DisplayCurrentPart = ()=> {

        switch(currentPart){

            case 1:

                return(
                    <Measurements
                        wantsImperial = {
                            () => {
                                window.alert("selected imperial measurements");
                                setIsImperial(true);
                            }
                        }
                        wantsMetric = {
                            () => {
                                window.alert("selected metric measurements");
                                setIsImperial(false);
                            }
                        }
                        choosePart = {
                            GoToPart
                        }
                        nextPart = {
                            ChangePartNumber
                        }
                    ></Measurements>
                );

            break;

            case 2:

                if(isImperial == true){
                    
                    return (
                        <ImperialForm
                            enterHeight = {
                                EnterHeight
                            }
                            enterWeight = {
                                EnterWeight
                            }
                            choosePart = {
                                GoToPart
                            }
                            nextPart = {
                                ChangePartNumber
                            }
                        ></ImperialForm>
                    );

                } else {

                   return (
                        <MetricForm
                            enterHeight = {
                                EnterHeight
                            }
                            enterWeight = {
                                EnterWeight
                            }
                            choosePart = {
                                GoToPart
                            }
                            nextPart = {
                                ChangePartNumber
                            }
                        ></MetricForm>
                   );

                }

            break;

            case 3:

                return (

                    <ReviewPanel
                        enterHeight = {
                            EnterHeight
                        }
                        enterWeight = {
                            EnterWeight
                        }
                        enteredKgs = {
                            kgsValue
                        }
                        enteredInches = {
                            inchesValue
                        }
                        enteredCms = {
                            cmsValue
                        }
                        enteredFeet = {
                            feetValue
                        }
                        enteredStone = {
                            stoneValue
                        }
                        enteredPounds = {
                            poundsValue
                        }
                        chosenImperial = {
                            isImperial
                        }
                        choosePart = {
                            GoToPart
                        }
                        nextPart = {
                            ChangePartNumber
                        }
                    ></ReviewPanel>

                );

            break;

            case 4:

                return(

                    <CalculateResults
                        chosenImperial = {
                            isImperial
                        }
                        heightVal = {
                            heightValue
                        }
                        weightVal = {
                            weightValue
                        }
                        choosePart = {
                            GoToPart
                        }
                        nextPart = {
                            ChangePartNumber
                        }
                    ></CalculateResults>

                );


            break;
        }

    }

    return (

        <main>
            {
                DisplayCurrentPart()
            }
        </main>

    );

}