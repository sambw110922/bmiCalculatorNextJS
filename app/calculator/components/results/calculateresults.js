
'use client'

import { useState } from "react";

//  Progress indicator
import ProgressIndicator from "../progressindicator/progressindicator";

export default function CalculateResults(props){

    //  When button is clicked, change the part type to 5
    var [ speicalPartType, setSpecialPartType ] = useState(4);

    //  Has the BMI button already been clicked? If it has, display results.
    var [ bmiButtonClicked, setBmiButtonClicked ] = useState(false);

    //  The BMI calculated
    var [ bmiValue, setBmiValue ] = useState(0);

    //  Display the BMI evaluation range
    const DisplayBMIEValRange = () => {

        //  from https://patient.info/doctor/bmi-calculator-calculator

        //  < 18.5 = underweight
        //  > 18.5 and < 24.9 = normal
        //  25 and < 29.9 = overweight
        //  > 30 = obese

        let evalResult = "Normal";

        if(bmiValue < 18.5){
            evalResult = "Underweight";
        }

        if(bmiValue > 18.5 && bmiValue < 24.9){
            evalResult = "Normal";
        }

        if(bmiValue > 24.9 && bmiValue < 30){
            evalResult = "Overweight";
        }

        if(bmiValue > 30){
            evalResult = "Obese";
        }

        return evalResult;
        
    }

    //  Display the BMI results
    const DisplayBMIResults = () => {

        if(bmiButtonClicked == true){

            return(
                <div>
                    <p>Your BMI is:</p>
                    <p>{ bmiValue }</p>
                    <h3>{ DisplayBMIEValRange() }</h3>
                </div>
            );

        } else {

            return(
                <div>
                    <p>Your BMI results will go here when you click the button.</p>
                </div>
            );
            
        }

    }

    //  Calculates the results
    const CalculateResults = () => {

        setBmiButtonClicked(true);
        setSpecialPartType(5);

        if(props.chosenImperial == true){

            let heightSqrd = Math.pow(props.heightVal, 2);
            let weightDivHeight = props.weightVal / heightSqrd; 

            //  from google
            let conversion = 703;

            let bmi = weightDivHeight * conversion;

            //  Answer from stack overflow:
            //  https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
            let roundedBMI = Math.round(bmi * 100) / 100;

            setBmiValue(roundedBMI);

        } else {

            let heightSqrd = Math.pow(props.heightVal, 2);
            let bmi = props.weightVal / heightSqrd;

            let roundedBMI = Math.round(bmi * 100) / 100;

            setBmiValue(roundedBMI);

        }
    

    }

    return (

        <section>

            <h2>Results</h2>

            <ProgressIndicator
                choosePart = { props.choosePart }
                partType={speicalPartType}
            ></ProgressIndicator>

            <button onClick={ CalculateResults  }>Calculate</button>

            {
                DisplayBMIResults()
            }

            <button id="btnNext" onClick={ props.nextPart }>Back to Start</button>

        </section>

    );

}