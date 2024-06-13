import { React, useRef } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import reactLogo from '../../assets/react.svg'
import './Upload.css'

// import {ReactLogo} from '../assets/react.svg';

export const Upload = (props) => {
  const myRef = useRef(null);

  function handleClick() {
    myRef.current.click();
  }


  return (
    <div className="menu_box">
        <Link to="/seller" className="btn btn_clMain_common btn_service_order">
        <img src={reactLogo} alt="React logo" />
            出品する
            </Link>
            
    </div>
  );
};
