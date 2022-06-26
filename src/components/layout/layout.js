import React, {useState} from "react";
import styled from "styled-components";
import Header from "../header/header";
import Footer from "../footer/footer";
import LoginModal from "../modals/login-modal";
import RegistrationModal from "../modals/registration-modal";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1D6BB7;
`;

let Layout = ({children}) => {

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegistrationModal, setShowRegistrationModal] = useState(false)

    return (
        <Wrapper>
            <Header setShowLoginModal={setShowLoginModal} setShowRegistrationModal={setShowRegistrationModal}/>
            {children}
            <Footer/>
            {showLoginModal && <LoginModal setShow={setShowLoginModal} setShowRegistrationModal={setShowRegistrationModal}/>}
            {showRegistrationModal && <RegistrationModal setShow={setShowRegistrationModal}/>}
        </Wrapper>
    )
}

export default Layout;