
    //  Performs various conversions 
    export default function ImperialConversionCalculator (e)  {

        let feet = 0;
        let inches = 0;
        let stone = 0;
        let pounds = 0;

        //  Only set a value if value is not empty
        if(e.target.txtFeet.value != "" && e.target.txtInches!= "" && e.target.txtStone != "" && e.target.txtPounds != ""){
            feet = parseFloat(e.target.txtFeet.value);
            inches = parseFloat(e.target.txtInches.value);
            stone = parseFloat(e.target.txtStone.value);
            pounds = parseFloat(e.target.txtPounds.value);
        }

        //  from google
        const feetToInches = 12;
        const stoneToPounds = 14;

        //  Get the height
        let feetEnteredAsInches = feet * feetToInches;
        let feetEnteredAddInches = feetEnteredAsInches + inches;

        //  Get the weight
        let stoneEnteredAsPounds = stone * stoneToPounds;
        let stoneEnteredAddPounds = stoneEnteredAsPounds + pounds;

        return {
            "height":{
                "feetEnteredAddInches" : feetEnteredAddInches,
                "units" : { "feet" : feet, "inches" : inches }
            },
            "weight":{
                "stoneEnteredAddPounds" : stoneEnteredAddPounds,
                "units" : { "stone" : stone, "pounds" : pounds }
            }
        }

    }