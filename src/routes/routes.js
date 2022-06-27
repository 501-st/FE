import React from 'react';
import {Outlet, Route, Routes} from "react-router";
import "../index.css"
import ListOfCompanies from "../pages/list-of-companies";
import ListOfStudents from "../pages/list-of-students";
import AccountOfStudent from "../pages/account-of-student";
import {useSelector} from "react-redux";
import AccountOfCompany from "../pages/account-of-company";

const RoutesComponent = () => {

    const students = useSelector(state => state.toolkit.students)
    const companies = useSelector(state => state.toolkit.companies)

    return (
        <Routes>
            <Route path="/" element={<ListOfCompanies/>}/>
            <Route path="/students" element={<ListOfStudents/>}/>
            <Route path="/student" element={<Outlet/>}>
                {students.map((item, index) => (
                    <Route key={index} path=":id" element={<AccountOfStudent/>}/>
                ))}
            </Route>
            <Route path="/company" element={<Outlet/>}>
                {companies.map((item, index) => (
                    <Route key={index} path=":id" element={<AccountOfCompany/>}/>
                ))}
            </Route>
        </Routes>
    )
}

export default RoutesComponent;
