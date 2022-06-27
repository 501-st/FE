import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../../ui-components/modal";
import Text from "../../ui-components/text";
import Input from "../../ui-components/input";
import {RowContainer} from "../header/header";
import Button from "../../ui-components/button";
import Select from "../../ui-components/select";
import EmailValidator from "../../validators/email-validator";

const Container = styled.div`
  border-radius: 5px;
  width: 420px;
  padding: 40px;
  box-sizing: border-box;
  background-color: white;
`;

let RegistrationModal = ({setShow, setShowStudModal, setShowCompanyModal, setData}) => {

    const [role, setRole] = useState("Студент")

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        if (initials.name === "" || initials.surname === "" || initials.middleName === "") {
            setInitials({...initials, error: "ФИО должно быть заполнено"})
            return false
        }
        if (!EmailValidator(email, setEmail)) {
            return false
        }
        setData({
            name: initials.name,
            surname: initials.surname,
            middleName: initials.middleName,
            email: email.value,
        })
        if (role === "Студент")
            setShowStudModal(true)
        else
            setShowCompanyModal(true)
        setShow(false)
    }

    const [email, setEmail] = useState({
        value: "",
        error: ""
    })
    const [initials, setInitials] = useState({
        name: "",
        surname: "",
        middleName: "",
        error: "",
    })

    const options = [{
        text: "Студент"
    }, {
        text: "Компания"
    }]

    return (
        <Modal setShow={setShow}>
            <form onSubmit={(event) => DoNotReloadPage(event)} onClick={CancelPropagation}>
                <Container>
                    <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 0 18px 0"}>
                        регистрация
                    </Text>
                    <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Имя
                    </Text>
                    <Input value={initials.name}
                           onChange={(e) => (setInitials({...initials, name: e.target.value, error: ""}))}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Фамилия
                    </Text>
                    <Input value={initials.surname}
                           onChange={(e) => (setInitials({...initials, surname: e.target.value, error: ""}))}
                           margin={"0 0 5px 0"}
                           width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Отчество
                    </Text>
                    <Input value={initials.middleName}
                           onChange={(e) => (setInitials({...initials, middleName: e.target.value, error: ""}))}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Email
                    </Text>
                    <Input value={email.value} onChange={(e) => (setEmail({value: e.target.value, error: ""}))}
                           margin={"0 0 5px 0"}
                           width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Роль
                    </Text>
                    <div style={{marginBottom: "15px"}}>
                        <Select setRole={setRole} options={options}/>
                    </div>
                    <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                    {initials.error &&
                    <div style={{
                        position: "absolute",
                        bottom: 280,
                        left: 0,
                        right: 0,
                        marginRight: "auto",
                        marginLeft: "auto",
                        textAlign: "center",
                        color: "red"
                    }}>
                        {initials.error}
                    </div>}
                    {email.error &&
                    <div style={{
                        position: "absolute",
                        bottom: 280,
                        left: 0,
                        right: 0,
                        marginRight: "auto",
                        marginLeft: "auto",
                        textAlign: "center",
                        color: "red"
                    }}>
                        {email.error}
                    </div>}
                    <RowContainer style={{columnGap: "5px", justifyContent: "flex-end", marginTop: "50px"}}>
                        <Button onClick={() => setShow(false)} borderRadius={"5px"} color={"white"}
                                background={"#6C757D"} padding={"5px 14px"}>
                            Закрыть
                        </Button>
                        <Button onClick={(event) => DoNotReloadPage(event)} borderRadius={"5px"} color={"white"}
                                background={"#1D6BB7"} padding={"5px 21px"}>
                            Далее
                        </Button>
                    </RowContainer>
                </Container>
            </form>
        </Modal>
    )
}

export default RegistrationModal;