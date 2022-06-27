import React from 'react';
import {Route, Routes} from "react-router";
import "../index.css"
import ListOfCompanies from "../pages/list-of-companies";
import ListOfUsers from "../pages/list-of-users";

const RoutesComponent = () => {

    return (
        <Routes>
            <Route path="/" element={<ListOfCompanies/>}/>
            <Route path="/users" element={<ListOfUsers/>}/>
        </Routes>
    )
}

export default RoutesComponent;
