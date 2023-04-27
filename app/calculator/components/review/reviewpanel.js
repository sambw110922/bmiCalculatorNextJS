
"use client";

import { useState } from "react";

//  Progress Indicator
import ProgressIndicator from "../progressindicator/progressindicator";

//  Imperial conversion function
import ImperialConversionCalculator from "../imperialConversion/imperialConversionCalculator";

export default function ReviewPanel(props){

    //  User wants to edit
    var [ wantsEdit, setWantsEdit ] = useState(false);

    //  User has clicked submit
    var [ hasSubmit, setHasSubmit ] = useState(true);

    //  Displays the measurement type
    const DisplayMeasurementType = () => {

        if(props.chosenImperial == true){
                
            return (
                <p>Imperial</p>
            );

        } else {

            return (
                <p>Metric</p>
            );
        }

    }

    //  Displays imperial units if chosen
    const DisplayImperialUnits = () => {

        //  When the user wants to change Imperial values
        const onHandleImperialChange = (e) => {

            e.preventDefault();

            setWantsEdit(false);

            let conversions = ImperialConversionCalculator(e);

            //  Submit the height and weight
            props.enterHeight(conversions.height.feetEnteredAddInches, conversions.height.units);
            props.enterWeight(conversions.weight.stoneEnteredAddPounds, conversions.weight.units);

            setHasSubmit(true);

            window.alert("Saved changes.");

        }

        if(wantsEdit == true){

            return (

                <div>
                    <form onSubmit={ onHandleImperialChange } >
                        <label>Feet:</label>
                        <input name="txtFeet" type="number" />
                        <label>Inches:</label>
                        <input name="txtInches" type="number" />
                        <label>Stone:</label>
                        <input name="txtStone" type="number" />
                        <label>Pounds:</label>
                        <input name="txtPounds" type="number" />
                        <input type="reset"  className="mainButtonStyle" />
                        <input type="submit"  className="mainButtonStyle" value="Save" />
                    </form>
                </div>

            );

        } else {

            return (
                <>
                    <div>
                        <label>Feet:</label>
                        <p>{ props.enteredFeet }</p>
                        <label>Inches:</label>
                        <p>{ props.enteredInches }</p>
                        <label>Stone:</label>
                        <p>{ props.enteredStone }</p>
                        <label>Pounds:</label>
                        <p>{ props.enteredPounds }</p>
                    </div>
                    <button className="mainButtonStyle" onClick={ 
                        ()=>{
                            setWantsEdit(true);
                            setHasSubmit(false);
                        }
                     } >Edit</button>
                </>
            );

        }


    }

    //  Displays the metric units if chosen
    const DisplayMetricUnits = () => {

        //  When the user submits the changes
        const onHandleMetricChange = (e) => {

            e.preventDefault();

            let conversions = MetricConversionCalculator(e);
            
            props.enterHeight(conversions.height.heightValue, conversions.height.units);
            props.enterWeight(conversions.weight.weightValue, conversions.weight.units);
    
            setHasSubmit(true);

        }

        if(wantsEdit == true){

            return (
                <div>
                    <form onSubmit={ DisplayMetricUnits } >
                        <label>Height (cms):</label>
                        <input type="number" name="txtCms" />
                        <label>Weight (kgs):</label>
                        <input type="number" name="txtKgs" />
                        <input type="reset" className="mainButtonStyle" value="Reset" />
                        <input type="submit" className="mainButtonStyle" value="Save" />
                    </form>
                </div>
            );

        } else {

            return (
                <>
                    <div>
                        <label>Cms:</label>
                        <p>{ props.enteredCms }</p>
                        <label>Kgs:</label>
                        <p>{ props.enteredKgs }</p>
                    </div>
                    <button  className="mainButtonStyle" onClick={ 
                        ()=>{
                            setWantsEdit(true);
                            setHasSubmit(false);
                        }
                     } >Edit</button>
                </>

            );

        }

    }

    //  Displys the correct units entered.
    const DisplayCorrectUnits = () => {

        if(props.chosenImperial == true){
            return DisplayImperialUnits();
        } else {
            return DisplayMetricUnits();
        }

    }

    return (

        <section>

            <ProgressIndicator
                choosePart = { props.choosePart }
                partType={3}
            ></ProgressIndicator>

            <h2>Review entered values here.</h2>

            <label>
                Chosen measurement units:
            </label>

            {
                DisplayMeasurementType()           
            }

            {
                DisplayCorrectUnits()
            }

            <button id="btnNext" onClick={ 
                ()=>{
                    if(wantsEdit == true && hasSubmit == false){
                        window.alert("please enter the form before progress");
                    } else {
                        props.nextPart();
                    }
                }
             }>Next</button>

        </section>

    );

}