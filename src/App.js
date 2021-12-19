import React, { useState } from 'react'
import "./App.css"

const App = () => {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmiresult, setBmiresult] = useState();
    const [status, setStatus] = useState("");


    function calculate() {
        let bmi = (weight / (height / 100) ** 2).toFixed(2);

        setBmiresult(bmi);

        if (bmi < 18.5) setStatus("UNDERWEIGHT");
        else if (bmi >= 18.5 && bmi < 24.9) setStatus("NORMAL");
        else if (bmi >= 25 && bmi < 29.9) setStatus("OVERWEIGHT");
        else setStatus("OBESITY");
    }
    return ( <
        >
        <
        div className = 'App' >
        <
        h1 className = 'h1' > BMI Calculator < /h1> <
        form className = "container" >
        <
        label
        for = "height"
        className = "height" > Height < /label> <
        input type = "number"
        placeholder = 'Height'
        onChange = {
            (e) => setHeight(e.target.value) }
        /> <
        br / ><br/>
        <
        label
        for = "weight"
        className = 'weight' > Weight < /label> <
        input type = "number"
        placeholder = 'Weight'
        onChange = {
            (e) => setWeight(e.target.value) }
        /> <
        br / >
        <
        button type = "button"
        onClick = { calculate } > Calculate < /button> <
        div className = 'incenter' >
        <
        h3 > Your consition is: { status } < /h3> <
        h3 > Your BMI is: { bmiresult } < /h3> <
        /div> <
        /form>

        <
        /div>

        <
        />
    )
}

export default App
