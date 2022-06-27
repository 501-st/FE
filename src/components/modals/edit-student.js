import React, {useState} from 'react';
import Modal from "../../ui-components/modal";
import Text from "../../ui-components/text";
import Input from "../../ui-components/input";
import {RowContainer} from "../header/header";
import Button from "../../ui-components/button";
import EmailValidator from "../../validators/email-validator";
import {Container} from "../../pages/list-of-companies";
import {useDispatch, useSelector} from "react-redux";
import Select from "../../ui-components/select";
import {optionsStack} from "./stud-modal";
import {editUser} from "../../store/reducer";

const EditStudent = ({setShow, student}) => {
    const dispatch = useDispatch()

    const [error, setError] = useState("")
    const optionsCompany = []
    const companies = useSelector(state => state.toolkit.companies)
    for (let i = 0; i < companies.length; i++) {
        optionsCompany.push({text: companies[i].name})
    }

    const [data, setData] = useState({
        name: student.name,
        surname: student.surname,
        middleName: student.middleName,
        company: student.company,
        course: student.course,
        achievements: student.achievements,
        email: student.email,
        experience: student.experience,
        rest: student.rest,
        role: student.role
    })
    const [role, setRole] = useState(data.role)
    const [company, setCompany] = useState(data.company)
    const [email, setEmail] = useState({
        value: data.email,
        error: ""
    })

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        setError("")
        setEmail({...email, error: ""})
        if (data.name === "" || data.surname === "" || data.middleName === ""){
            setError("ФИО должен был заполнен")
            return false
        }
        if (data.course > 4 || data.course < 1 || data.course === ""){
            setError("На каком же курсе вы учитесь")
            return false
        }
        if (!EmailValidator(email, setEmail)) {
            return false
        }
        dispatch(editUser({id: student.id, data: {...data, role: role, company: company, email: email.value}}))
        setShow(false)
    }

    return (
        <Modal setShow={setShow}>
            <form style={{width: "30%"}} onSubmit={(event) => DoNotReloadPage(event)} onClick={CancelPropagation}>
                <Container>
                    <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 0 18px 0"}>
                        Изменение данных
                    </Text>
                    <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Имя
                    </Text>
                    <Input value={data.name}
                           onChange={(e) => setData({...data, name: e.target.value})}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Фамилия
                    </Text>
                    <Input value={data.surname}
                           onChange={(e) => setData({...data, surname: e.target.value})}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Отчество
                    </Text>
                    <Input value={data.middleName}
                           onChange={(e) => setData({...data, middleName: e.target.value})}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Направление
                    </Text>
                    <div style={{marginBottom: "15px"}}>
                        <Select setRole={setRole} options={optionsStack}/>
                    </div>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Email
                    </Text>
                    <Input value={email.value}
                           onChange={(e) => setEmail({value: e.target.value, error: ""})}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Курс:
                    </Text>
                    <Input type={"number"} value={data.course}
                           onChange={(e) => setData({...data, course: e.target.value})}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"10px 0 7px 0"} fontSize={"14px"}>
                        Компания
                    </Text>
                     <div style={{marginBottom: "15px"}}>
                        <Select setRole={setCompany} options={optionsCompany}/>
                    </div>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Опыт работы:
                    </Text>
                    <Input value={data.experience}
                           onChange={(e) => setData({...data, experience: e.target.value})}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Достжения в IT сфере:
                    </Text>
                    <Input value={data.achievements}
                           onChange={(e) => setData({...data, achievements: e.target.value})}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <Text margin={"15px 0 7px 0"} fontSize={"14px"}>
                        Остальная инфомрация:
                    </Text>
                    <Input value={data.rest}
                           onChange={(e) => setData({...data, rest: e.target.value})}
                           margin={"0 0 5px 0"} width={"100%"}/>
                    <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                    {email.error &&
                    <div style={{
                        position: "absolute",
                        bottom: 140,
                        left: 0,
                        right: 0,
                        marginRight: "auto",
                        marginLeft: "auto",
                        textAlign: "center",
                        color: "red"
                    }}>
                        {email.error}
                    </div>}
                    {error &&
                    <div style={{
                        position: "absolute",
                        bottom: 140,
                        left: 0,
                        right: 0,
                        marginRight: "auto",
                        marginLeft: "auto",
                        textAlign: "center",
                        color: "red"
                    }}>
                        {error}
                    </div>}
                    <RowContainer style={{columnGap: "5px", justifyContent: "flex-end", marginTop: "40px"}}>
                        <Button onClick={() => setShow(false)} borderRadius={"5px"} color={"white"}
                                background={"#6C757D"} padding={"5px 14px"}>
                            Закрыть
                        </Button>
                        <Button onClick={(event) => DoNotReloadPage(event)} borderRadius={"5px"} color={"white"}
                                background={"#1D6BB7"} padding={"5px 21px"}>
                            Сохранить
                        </Button>
                    </RowContainer>
                </Container>
            </form>
        </Modal>
    );
};

export default EditStudent;