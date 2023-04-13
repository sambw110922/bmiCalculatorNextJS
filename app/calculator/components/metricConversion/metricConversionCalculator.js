
//  Performs metric conversions
export default function MetricConversionCalculator (e){

    let cms = 0;
    let kgs = 0;

    if(e.target.txtCms.value != "" && e.target.txtKgs.value != ""){
        cms = parseFloat(e.target.txtCms.value);
        kgs = parseFloat(e.target.txtKgs.value);
    }

    //  from google
    const conversion = 100;

    //  Divide cms by 100 to get meters
    let heightValue = cms / conversion;

    return {
        "height" : {
            "heightValue" : heightValue,
            "units" : { "cms" : cms }
        }, 
        "weight" : {
            "weightValue" : kgs,
            "units" : { "kgs" : kgs }
        }
    };

}