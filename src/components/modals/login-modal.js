import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Modal from "../../ui-components/modal";
import Text from "../../ui-components/text";
import Input from "../../ui-components/input";
import {RowContainer} from "../header/header";
import Button from "../../ui-components/button";
import EmailValidator from "../../validators/email-validator";
import PasswordValidator from "../../validators/password-validator";


const Container = styled.div`
  border-radius: 5px;
  width: 420px;
  padding: 40px;
  box-sizing: border-box;
  background-color: white;
`;

let LoginModal = ({setShow, setShowRegistrationModal}) => {

    const [email, setEmail] = useState({
        value: "",
        error: ""
    })
    const [pass, setPass] = useState({
        value: "",
        error: ""
    })

    const [data, setData] = useState({
        email: email,
        pass: pass
    })

    useEffect(() => {
        setData({
            email: email,
            pass: pass
        })
    }, [email, pass])

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        if (!EmailValidator(email, setEmail)) {
            return false
        }
        if (!PasswordValidator(pass, setPass)) {
            return false
        }
        setShow(false)
    }
    return (
        <Modal setShow={setShow}>
            <form onSubmit={(event) => DoNotReloadPage(event)} onClick={CancelPropagation}>
                <Container>
                    <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 0 18px 0"}>
                        авторизация
                    </Text>
                    <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Email адрес
                    </Text>
                    <Input value={email.value} onChange={(e) => (setEmail({error: "", value: e.target.value}))} margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"0px 0 7px 0"} fontSize={"14px"}>
                        Пароль
                    </Text>
                    <Input value={pass.value} onChange={(e) => (setPass({error: "", value: e.target.value}))} type={"password"} margin={"0 0 30px 0"} width={"100%"}/>
                    {email.error &&
                    <div style={{position: "absolute", bottom: 410, left: 0, right: 0, marginRight: "auto", marginLeft: "auto", textAlign: "center", color: "red"}}>
                        {email.error}
                    </div>}
                    {pass.error &&
                    <div style={{position: "absolute", bottom: 410, left: 0, right: 0, marginRight: "auto", marginLeft: "auto", textAlign: "center", color: "red"}}>
                        {pass.error}
                    </div>}
                    <div onClick={() => {setShow(false); setShowRegistrationModal(true)}} style={{textAlign: "end", cursor: "pointer"}}>
                        <Text margin={"0 0 7px 0"} fontSize={"14px"}>
                            Регистрация
                        </Text>
                    </div>
                    <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                    <RowContainer style={{columnGap: "5px", justifyContent: "flex-end", marginTop: "10px"}}>
                        <Button onClick={() => setShow(false)} borderRadius={"5px"} color={"white"} background={"#6C757D"} padding={"5px 14px"}>
                            Закрыть
                        </Button>
                        <Button onClick={(event) => DoNotReloadPage(event)} borderRadius={"5px"} color={"white"} background={"#1D6BB7"} padding={"5px 21px"}>
                            Войти
                        </Button>
                    </RowContainer>
                </Container>
            </form>
        </Modal>
    )
}

export default LoginModal;