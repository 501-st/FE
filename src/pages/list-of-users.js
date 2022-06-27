import React, {useState} from 'react';
import styled from "styled-components";
import Layout from "../components/layout/layout";
import Text from "../ui-components/text";
import Input from "../ui-components/input";
import {RowContainer} from "../components/header/header";
import Button from "../ui-components/button";
import {Col, Row} from "react-grid-system";

export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  padding: 40px 40px 70px;
  margin: 60px auto 80px;
  width: 100%;
  max-width: 1280px;
`;

const ListOfUsers = () => {

    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([{
        name: "Альберт",
        course: 3,
        company: "Kreosoft",
        email: "albert@mail.ru"
    }, {
        name: "Павел",
        course: 1,
        company: "NTR",
        email: "pasha_biceps@mail.ru"
    }, {
        name: "Андрей",
        course: 3,
        company: "KODE",
        email: "jumper228@mail.ru"
    }, {
        name: "Артем",
        course: 4,
        company: "ЦФТ",
        email: "Artemy_Li@mail.ru"
    },])

    const handleSubmit = () => {
        // eslint-disable-next-line array-callback-return
        setUsers(users.filter((item) => {
            for (let key in item) {
                if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().indexOf(search.toLowerCase()) !== -1)
                    return 1
            }
        }))
    }


    // eslint-disable-next-line no-unused-vars
    const [reserve, setReserve] = useState(users)

    return (
        <Layout>
            <Container>
                <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 0 18px 0"}>
                    Пользователи
                </Text>
                <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                <RowContainer style={{margin: "15px 0"}}>
                    <Input margin={"0 15px 0 0"} width={"280px"} value={search}
                           onChange={(e) => {
                               setSearch(e.target.value);
                               setUsers(reserve)
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
                {users.length > 0 ? users.map((item, index) => (
                        <div key={index}>
                            <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                            <Row style={{padding: "8px 0"}} align={"center"}>
                                <Col md={2}>
                                    <Text style={{display: "flex", flex: 1}} fontSize={"17px"}>
                                        {item.name}
                                    </Text>
                                </Col>
                                <Col md={1}>
                                    <Text style={{display: "flex", flex: 1}} fontSize={"17px"}>
                                        {item.course}
                                    </Text>
                                </Col>
                                <Col md={2}>
                                    <Text style={{display: "flex", flex: 1}} fontSize={"17px"}>
                                        {item.company}
                                    </Text>
                                </Col>
                                <Col md={3}>
                                    <Text style={{display: "flex", flex: 2}} fontSize={"17px"}>
                                        {item.email}
                                    </Text>
                                </Col>
                                <Col md={4}>
                                    <Button borderRadius={"5px"} color={"white"} background={"#1D6BB7"}
                                            padding={"5px 21px"}>
                                        Личный аккаунт
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    ))
                    : <Text style={{display: "flex", flex: 2}} fontSize={"17px"}>
                        Пользователей не найдено
                    </Text>}
            </Container>
        </Layout>
    );
};

export default ListOfUsers;