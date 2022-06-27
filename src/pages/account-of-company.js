import React from 'react';
import Layout from "../components/layout/layout";
import {Container} from "./list-of-companies";
import Text from "../ui-components/text";
import {Col, Row} from "react-grid-system";
import Image from "../ui-components/image";
import Fake from "../components/header/images/fake.png"
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import Button from "../ui-components/button";
import {useNavigate} from "react-router-dom";

const AccountOfCompany = () => {
    const params = useParams();
    const prodId = params.id;
    const navigate = useNavigate();

    const companies = useSelector(state => state.toolkit.companies)
    const company = companies.find((item) => item.id === +prodId)
    const students = useSelector(state => state.toolkit.students)
    const hiredStudents = students.filter(student => student.company === company.name)

    return (
        <Layout>
            <Container>
                <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 0 10px 0"}>
                    {company.name}
                </Text>
                <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                <Row style={{margin: "25px 0"}}>
                    <Col md={2}>
                        <Image src={Fake}/>
                    </Col>
                    <Col offset={{md: 1}} md={9}>
                        <Text fontSize={"17px"}>
                            {company.info}
                        </Text>
                    </Col>
                </Row>
                <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                <Text margin={"10px 0 20px 0"} uppercase fontWeight={700}>
                    стэк технологий
                </Text>
                <Text margin={"0 0 20px 0"} fontSize={"17px"}>
                    ASP .NET
                </Text>
                <Text margin={"0 0 20px 0"} fontSize={"17px"}>
                    С#
                </Text>
                <Text margin={"10px 0 20px 0"} fontSize={"17px"}>
                    React JS
                </Text>
                <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                <Text margin={"10px 0 20px 0"} uppercase fontWeight={700}>
                    студенты на стажировке
                </Text>
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
                {hiredStudents.length > 0 ? hiredStudents.map((item, index) => (
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

export default AccountOfCompany;