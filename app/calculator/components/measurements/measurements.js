
//  Progress indicator
import ProgressIndicator from "../progressindicator/progressindicator";

export default function Measurements(props){

    return (

        <section>
            <ProgressIndicator
                choosePart = { props.choosePart }
                partType={1}
            ></ProgressIndicator>
            <h2>Select the type of measurement to have.</h2>
            <div>
                <button  className="mainButtonStyle" onClick={ props.wantsImperial }>Imperial</button>
                <button  className="mainButtonStyle"  onClick={ props.wantsMetric }>Metric</button>
            </div>
            <button id="btnNext" onClick={ props.nextPart }>Next</button>
        </section>

    ); 

}