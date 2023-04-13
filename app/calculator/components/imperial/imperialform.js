
"use client";

import { useState } from "react";

//  Progress indicator
import ProgressIndicator from "../progressindicator/progressindicator";

//  Conversion calculator.
import ImperialConversionCalculator from "../imperialConversion/imperialConversionCalculator";

//  css
import "./imperialstyle.css";

export default function ImperialForm(props){

    //  user has submitted values
    var [ hasSubmit, setHasSubmit ] = useState(false);


    //  What happens when the user submits the form.
    const ImperialFormHandler = (e) => {

        e.preventDefault();

        let conversions = ImperialConversionCalculator(e);

        //  Submit the height and weight
        props.enterHeight(conversions.height.feetEnteredAddInches, conversions.height.units);
        props.enterWeight(conversions.weight.stoneEnteredAddPounds, conversions.weight.units);
        
        setHasSubmit(true);
        
        window.alert("Submitted height and weight.");

    }

    return (

        <section>

            <ProgressIndicator
                choosePart = { props.choosePart }
                partType={2}
            ></ProgressIndicator>

            <h2>Enter height and weight values</h2>

            <form onSubmit={ ImperialFormHandler }>
                <label>Feet</label>
                <input type="number" name="txtFeet" min="0" step="0.1" required />
                <label>Inches</label>
                <input type="number" name="txtInches" min="0"step="0.1"  max="12" required />
                <label>Stone</label>
                <input type="number" name="txtStone" min="0" step="0.1"  required />
                <label>Pounds</label>
                <input type="number" name="txtPounds" min="0" step="0.1"  required />
                <input type="reset" value="Reset" />
                <input type="submit" value="Confirm" />
            </form>

            <button id="btnNext" onClick={ 
                ()=>{
                    if(hasSubmit == true){
                        props.nextPart();
                    } else {
                        window.alert("please enter form before progress");
                    }
                }
             }>Next</button>

        </section>

    );

}