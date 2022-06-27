import React, {useState} from 'react';
import Layout from "../components/layout/layout";
import {Container} from "./list-of-companies";
import Text from "../ui-components/text";
import {RowContainer} from "../components/header/header";
import Button from "../ui-components/button";
import {Col, Row} from "react-grid-system";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import EditStudent from "../components/modals/edit-student";

const AccountOfStudent = () => {

    const params = useParams();
    const prodId = params.id;

    const students = useSelector(state => state.toolkit.students)
    const student = students.find((item) => item.id === +prodId)
    const isAuth = useSelector(state => state.toolkit.isAuth)
    const [showEdit, setShowEdit] = useState(false)

    return (
        <Layout>
            <Container>
                <RowContainer style={{marginBottom: "20px"}}>
                    <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 20px 0 0"}>
                        {student.name} {student.surname}
                    </Text>
                    {isAuth && <Button onClick={() => setShowEdit(true)} borderRadius={"5px"} color={"white"} background={"#1D6BB7"} padding={"5px 21px"}>
                        Редактировать
                    </Button>}
                </RowContainer>
                <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Email
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.email}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Имя:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.name}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Фамилия:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.surname}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Отчество:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.middleName}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Направление:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.role}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Курс:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.course}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Опыт работы:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.experience}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Достижения в IT сфере:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.achievements}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Остальная инфнформация:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.rest}
                        </Text>
                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col md={2}>
                        <Text fontSize={"17px"} fontWeight={800}>
                            Компания:
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Text fontSize={"17px"}>
                            {student.company}
                        </Text>
                    </Col>
                </Row>
            </Container>
            {showEdit && <EditStudent student={student} setShow={setShowEdit}/>}
        </Layout>
    );
};

export default AccountOfStudent;