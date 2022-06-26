import React from 'react';
import {Outlet, Route, Routes} from "react-router";
import "../index.css"
import ListOfCompanies from "../pages/list-of-companies";

const RoutesComponent = () => {

    return (
        <Routes>
            <Route path="/" element={<ListOfCompanies/>}/>
        </Routes>
    )
}

export default RoutesComponent;
