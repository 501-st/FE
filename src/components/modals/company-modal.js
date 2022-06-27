import React, { useState} from 'react';
import styled from "styled-components";
import Modal from "../../ui-components/modal";
import Text from "../../ui-components/text";
import {RowContainer} from "../header/header";
import Button from "../../ui-components/button";
import Select from "../../ui-components/select";
import Textarea from "../../ui-components/textarea";


const Container = styled.div`
  border-radius: 5px;
  width: 420px;
  padding: 40px;
  box-sizing: border-box;
  background-color: white;
`;

let CompanyModal = ({setShow}) => {

    const [company, setCompany] = useState("")
    const [additional, setAdditional] = useState("")

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        setShow(false)
    }


    const optionsCompany = [{
        text: "KODE"
    }, {
        text: "rad_mad_robot"
    }, {
        text: "NTR"
    }, {
        text: "Kreosoft"
    }, {
        text: "ЦФТ"
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
                        Компания
                    </Text>
                    <div style={{marginBottom: "15px"}}>
                        <Select setRole={setCompany} options={optionsCompany}/>
                    </div>
                    <Text margin={"10px 0 7px 0"} fontSize={"14px"}>
                        Остальная информация
                    </Text>
                    <Textarea value={additional} onChange={(e) => setAdditional(e.target.value)} width={"100%"}/>
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