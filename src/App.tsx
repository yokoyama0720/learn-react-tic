import React from "react";
import { useState } from "react";
import Square from "./components/Square"
import "./styles.css"

export default function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Square />
    </div>
  );
}