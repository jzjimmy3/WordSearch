import { React, useContext } from 'react';
import '../App.css';
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {

    return (
        <div className="key" id={bigKey && 'big'}>{keyVal}</div>
    )
}

export default Key