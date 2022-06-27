import React, { useState} from 'react';
import styled from "styled-components";
import Modal from "../../ui-components/modal";
import Text from "../../ui-components/text";
import {RowContainer} from "../header/header";
import Button from "../../ui-components/button";
import Textarea from "../../ui-components/textarea";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addCompany, auth} from "../../store/reducer";
import Input from "../../ui-components/input";


const Container = styled.div`
  border-radius: 5px;
  width: 420px;
  padding: 40px;
  box-sizing: border-box;
  background-color: white;
`;

let CompanyModal = ({setShow}) => {

    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const id = useSelector(state => state.toolkit.countCompany)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [info, setInfo] = useState("")

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        if (name === ""){
            setError("Введите название компании")
            return false
        }
        dispatch(addCompany({
            name, info
        }))
        dispatch(auth())
        navigate(`/company/${id + 1}`)
        setShow(false)
    }


    return (
        <Modal setShow={setShow}>
            <form onSubmit={(event) => DoNotReloadPage(event)} onClick={CancelPropagation}>
                <Container>
                    <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 0 18px 0"}>
                        регистрация
                    </Text>
                    <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Компания
                    </Text>
                    <Text margin={"10px 0 7px 0"} fontSize={"14px"}>
                        Название компании
                    </Text>
                    <Input value={name} onChange={(e) => {setName( e.target.value); setError("")}} width={"100%"}/>
                    <Text margin={"10px 0 7px 0"} fontSize={"14px"}>
                        Остальная информация
                    </Text>
                    <Textarea value={info} onChange={(e) => setInfo(e.target.value)} width={"100%"}/>
                    {error &&
                    <div style={{
                        position: "absolute",
                        bottom: 370,
                        left: 0,
                        right: 0,
                        marginRight: "auto",
                        marginLeft: "auto",
                        textAlign: "center",
                        color: "red"
                    }}>
                        {error}
                    </div>}
                    <RowContainer style={{columnGap: "5px", justifyContent: "flex-end", marginTop: "50px"}}>
                        <Button onClick={() => setShow(false)} borderRadius={"5px"} color={"white"}
                                background={"#6C757D"} padding={"5px 14px"}>
                            Закрыть
                        </Button>
                        <Button onClick={(event) => DoNotReloadPage(event)} borderRadius={"5px"} color={"white"}
                                background={"#1D6BB7"} padding={"5px 21px"}>
                            Зарегистрироваться
                        </Button>
                    </RowContainer>
                </Container>
            </form>
        </Modal>
    )
}

export default CompanyModal;