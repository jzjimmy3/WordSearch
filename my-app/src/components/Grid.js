import React from "react";
import '../App.css';
import { useRef, useEffect } from 'react';

export default function Grid(rows, cols) {
    const ref = useRef(null);
    useEffect(() => {
        const container = document.getElementById("grid-container");
        container.style.setProperty("--grid-rows", rows);
        container.style.setProperty("--grid-cols", cols);

        for (var i = 0; i < (rows * cols); i++) {
            const grid = document.createElement('div');
            container.appendChild(grid).className = "grid-item";
        };
    })
}


// const container = document.getElementById("grid-container");
// const container = React.getElementById("grid-container");
// // console.log(container);
// function Grid(rows, cols) {
//     container.style.setProperty("--grid-rows", rows);
//     container.style.setProperty("--grid-cols", cols);
//     // return (rows * cols);

//     for (var i = 0; i < (rows * cols); i++) {
//         const grid = React.createElement('div');
//         container.appendChild(grid).className = "grid-item";
//         console.log("Hello heres");
//     };
// };

// export default Grid;