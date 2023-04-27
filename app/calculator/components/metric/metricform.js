
"use client";

import { useState } from "react";

//  Progress Indicator
import ProgressIndicator from "../progressindicator/progressindicator";

//  Metric unit conversion calculator
import MetricConversionCalculator from "../metricConversion/metricConversionCalculator";


export default function MetricForm(props){

    //  Determines if the form has been submitted
    var [ hasSubmit, setHasSubmit ] = useState(false);

    const MetricFormHandler = (e) => {

        e.preventDefault();

        let conversions = MetricConversionCalculator(e);
        
        props.enterHeight(conversions.height.heightValue, conversions.height.units);
        props.enterWeight(conversions.weight.weightValue, conversions.weight.units);

        setHasSubmit(true);

    }

    return (

        <section>

            <h2>Enter height and weight values</h2>

            <ProgressIndicator
                choosePart = { props.choosePart }
                partType={2}
            ></ProgressIndicator>

            <form onSubmit={ MetricFormHandler }>
                <label>Cms</label>
                <input type="number" step="0.1" min="0" name="txtCms" required />
                <label>Kgs</label>
                <input type="number" step="0.1" min="0"  name="txtKgs" required />
                <input type="reset"  className="mainButtonStyle" value="Reset" />
                <input type="submit" className="mainButtonStyle" value="Confirm" />
            </form>

            <button id="btnNext" onClick={ ()=>{

                if(hasSubmit == true){
                    props.nextPart();
                } else {
                    window.alert("please enter form before progress");
                }

            } }>Next</button>

        </section>

    );

}