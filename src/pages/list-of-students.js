import React, {useState} from 'react';
import Layout from "../components/layout/layout";
import Text from "../ui-components/text";
import Input from "../ui-components/input";
import {RowContainer} from "../components/header/header";
import Button from "../ui-components/button";
import {Col, Row} from "react-grid-system";
import {useSelector} from "react-redux";
import {Container} from "./list-of-companies";
import {useNavigate} from "react-router-dom";

const ListOfStudents = () => {

    const [search, setSearch] = useState("")
    const students = useSelector(state => state.toolkit.students)

    const [studentsState, setStudentsState] = useState(students)
    const navigate = useNavigate();

    const handleSubmit = () => {
        // eslint-disable-next-line array-callback-return
        setStudentsState(studentsState.filter((item) => {
            for (let key in item) {
                if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().indexOf(search.toLowerCase()) !== -1)
                    return 1
            }
        }))
    }


    // eslint-disable-next-line no-unused-vars
    const [reserve, setReserve] = useState(studentsState)

    return (
        <Layout>
            <Container>
                <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 0 18px 0"}>
                    Студенты
                </Text>
                <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                <RowContainer style={{margin: "15px 0"}}>
                    <Input margin={"0 15px 0 0"} width={"280px"} value={search}
                           onChange={(e) => {
                               setSearch(e.target.value);
                               setStudentsState(reserve)
                           }} placeholder={"Введите значение"}/>
                    <Button onClick={handleSubmit} borderRadius={"5px"} color={"white"} background={"#1D6BB7"}
                            padding={"5px 21px"}>
                        Применить
                    </Button>
                </RowContainer>
                <Row style={{marginBottom: "10px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Имя
                        </Text>
                    </Col>
                    <Col md={1}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Курс
                        </Text>
                    </Col>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Компания
                        </Text>
                    </Col>
                    <Col md={3}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Почта
                        </Text>
                    </Col>
                </Row>
                {studentsState.length > 0 ? studentsState.map((item, index) => (
                        <div key={index}>
                            <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                            <Row style={{padding: "8px 0"}} align={"center"}>
                                <Col md={2}>
                                    <Text fontSize={"17px"}>
                                        {item.name}
                                    </Text>
                                </Col>
                                <Col md={1}>
                                    <Text fontSize={"17px"}>
                                        {item.course}
                                    </Text>
                                </Col>
                                <Col md={2}>
                                    <Text fontSize={"17px"}>
                                        {item.company}
                                    </Text>
                                </Col>
                                <Col md={3}>
                                    <Text fontSize={"17px"}>
                                        {item.email}
                                    </Text>
                                </Col>
                                <Col md={4}>
                                    <Button onClick={() => navigate(`/student/${item.id}`)} borderRadius={"5px"} color={"white"} background={"#1D6BB7"}
                                            padding={"5px 21px"}>
                                        Личный аккаунт
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    ))
                    : <Text fontSize={"17px"}>
                        Пользователей не найдено
                    </Text>}
            </Container>
        </Layout>
    );
};

export default ListOfStudents;