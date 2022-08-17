import {useState} from "react";

export default function Button() {
    const [buttonColor, setButtonColor] = useState("lightgreen");

    const changeColor = () => {
        if (buttonColor === "lightgreen") {
            setButtonColor("lightblue");
        } else {
            setButtonColor("lightgreen");
        }
    }

    return (
        <button style={{ backgroundColor: buttonColor }} onClick={changeColor}>Click me to change colors!</button>
    );
}
