import React from "react";
import '../App.css';
import { useRef, useEffect } from 'react';

export default function Grid(rows, cols) {
    const ref = useRef(null);
    useEffect(() => {
        const container = document.getElementById("grid-container");
        container.style.setProperty("--grid-cols", cols);
        container.style.setProperty("--grid-rows", rows);
        var count = 1;
        for (var i = 0; i < (rows * cols); i++) {
            console.log(count++);
            const grid = document.createElement('div');
            container.appendChild(grid).className = "grid-item";
        };
    })
}
