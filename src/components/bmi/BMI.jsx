import React, { useState } from "react";
import "./bmi.css";

export default function BmiCalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const [result, setResult] = useState("იხილე შენი შედეგი");
    const [result2, setResult2] = useState("")

    const calculateBMI = () => {
        let bmi = 0;



        if (height > 0 && weight > 0) {
            bmi = weight / ((height / 100) ** 2);
        }


        if (bmi > 0) {
            setResult(`შენი შედეგი არის ${bmi.toFixed(2)}`);

            if (bmi < 18.5) {
                setResult2("არასაკმარისი წონა");
            } else if (bmi < 25) {
                setResult2("ნორმა");
            } else if (bmi < 30) {
                setResult2("ზედმეტი წონა");
            } else {
                setResult2("სიმსუქნე");
            }

        } else {
            setResult("გთხოვ, შეიყვანე სწორი სიმაღლე და წონა");
            setResult2("");
        }


    };



    return (

        <div className="bmi">
            <div className="bmi-title">
                <h3>გაიგე შენი სხეულის მასის ინდექსი <br></br>და დაიწყე დღეიდან ჯანსაღი კვება</h3>
            </div>

            <div className="bmi-calculator">
                <div className="input-group">
                    <label htmlFor="height">სიმაღლე</label>
                    <input
                        type="number"
                        id="height"
                        placeholder="შეიყვანე შენი სიმაღლე"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="weight">წონა</label>
                    <input
                        type="number"
                        id="weight"
                        placeholder="შეიყვანე შენი წონა"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>

                <button onClick={calculateBMI} className="no-hover">გამოთვლა</button>

                <div className="result">{result}</div>


                <div className={`result2 ${result2 ? "show" : ""}`}>{result2}</div>
            </div>

        </div>

    );
}