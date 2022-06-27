import React, {useState} from 'react';
import styled from "styled-components";
import Layout from "../components/layout/layout";
import Text from "../ui-components/text";
import Input from "../ui-components/input";
import {RowContainer} from "../components/header/header";
import Button from "../ui-components/button";
import {Col, Row} from "react-grid-system";
import axios from "axios";

export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  padding: 40px 40px 70px;
  margin: 60px auto 80px;
  width: 100%;
  max-width: 1280px;
`;

const ListOfCompanies = () => {

    const [search, setSearch] = useState("")
    const [companies, setCompanies] = useState([{
        name: "Kreosoft",
    }, {
        name: "NTR",
    }, {
        name: "ЦФТ",
    }, {
        name: "KODE",
    },])

    const handleSubmit = () => {
        // eslint-disable-next-line array-callback-return
        setCompanies(companies.filter((item) => {
            for (let key in item) {
                if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().indexOf(search.toLowerCase()) !== -1)
                    return 1
            }
        }))
        axios.get(`https://hits-process.herokuapp.com/companies`)
            .then(res => {console.log(res)}).catch(error => console.log(error))
    }

    // eslint-disable-next-line no-unused-vars
    const [reserve, setReserve] = useState(companies)

    return (
        <Layout>
            <Container>
                <Text uppercase fontSize={"20px"} fontWeight={700} margin={"0 0 18px 0"}>
                    компании
                </Text>
                <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                <RowContainer style={{margin: "15px 0"}}>
                    <Input margin={"0 15px 0 0"} width={"280px"} value={search}
                           onChange={(e) => {
                               setSearch(e.target.value);
                               setCompanies(reserve)
                           }} placeholder={"Введите значение"}/>
                    <Button onClick={handleSubmit} borderRadius={"5px"} color={"white"} background={"#1D6BB7"}
                            padding={"5px 21px"}>
                        Применить
                    </Button>
                </RowContainer>
                <Text fontSize={"17px"} fontWeight={800}>
                    Название
                </Text>
                {companies.length > 0 ? companies.map((item, index) => (
                        <div key={index}>
                            <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                            <Row style={{padding: "8px 0"}} align={"center"}>
                                <Col md={2}>
                                    <Text style={{display: "flex", flex: 1}} fontSize={"17px"}>
                                        {item.name}
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
                        Компании не найдены
                    </Text>}
            </Container>
        </Layout>
    );
};

export default ListOfCompanies;