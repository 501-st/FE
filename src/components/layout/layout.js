import React, {useState} from "react";
import styled from "styled-components";
import Header from "../header/header";
import Footer from "../footer/footer";
import LoginModal from "../modals/login-modal";
import RegistrationModal from "../modals/registration-modal";
import StudModal from "../modals/stud-modal";
import CompanyModal from "../modals/company-modal";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1D6BB7;
`;

let Layout = ({children}) => {

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegistrationModal, setShowRegistrationModal] = useState(false)
    const [showStudModal, setShowStudModal] = useState(false)
    const [showCompanyModal, setShowCompanyModal] = useState(false)
    const [data, setData] = useState()

    return (
        <Wrapper>
            <Header setShowRegistrationModal={setShowRegistrationModal}/>
            {children}
            <Footer/>
            {showLoginModal && <LoginModal setShow={setShowLoginModal} setShowRegistrationModal={setShowRegistrationModal}/>}
            {showRegistrationModal && <RegistrationModal setData={setData} setShowStudModal={setShowStudModal} setShow={setShowRegistrationModal} setShowCompanyModal={setShowCompanyModal}/>}
            {showStudModal && <StudModal data={data} setShow={setShowStudModal}/>}
            {showCompanyModal && <CompanyModal data={data} setShow={setShowCompanyModal}/>}
        </Wrapper>
    )
}

export default Layout;