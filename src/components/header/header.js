import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../../components/header/images/logo.png"
import Image from "../../ui-components/image";
import Text from "../../ui-components/text";
import Link from "../../ui-components/link";
import {Hidden, useScreenClass, Visible} from "react-grid-system";
import Menu from "../header/images/menu.png"
import Button from "../../ui-components/button";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/reducer";
import {useNavigate} from "react-router-dom";

const ContainerHeader = styled.div`
  margin: 30px auto;
  max-width: 1280px;
  padding: 0 10px;
  width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkContainer = styled.div`
  transition: all 0.4s ease-out;
`;

let Header = ({setShowRegistrationModal}) => {

    const lastIdStudent = useSelector(state => state.toolkit.countUser)
    const lastIdCompany = useSelector(state => state.toolkit.countCompany)
    const isLastStudent = useSelector(state => state.toolkit.isLastCreatedStudent)
    const isAuth = useSelector(state => state.toolkit.isAuth)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const links = [{
        text: "список студентов",
        to: "/students"
    }, {
        text: "личный аккаунт",
        to: `/${isLastStudent ? `student/${lastIdStudent}` : `company/${lastIdCompany}`}`
    }, {
        text: "список компаний",
        to: "/"
    }]

    const [show, setShow] = useState(false)

    const screenClass = useScreenClass()

    return (
        <div style={{backgroundColor: "white"}}>
            <ContainerHeader
                style={['xs', 'sm', 'md'].includes(screenClass) ? {margin: "30px auto 0"} : {margin: "30px auto"}}>
                <RowContainer style={['xs', 'sm', 'md', 'lg'].includes(screenClass)
                    ? {justifyContent: "center", marginBottom: "15px", flexDirection: "column", rowGap: "20px"}
                    : {marginLeft: "80px", marginBottom: "5px", justifyContent: "space-between"}}>
                    <RowContainer>
                        <Image width={100} margin={"0 25px 0 0"} src={Logo}/>
                        <Text color={"black"} fontSize={"32px"} fontWeight={600} uppercase>
                            железное<br/>вымя
                        </Text>
                    </RowContainer>
                    {!isAuth
                        ? <RowContainer>
                            {/*<div style={{marginRight: "15px"}}>
                                <Button onClick={() => setShowLoginModal(true)} padding={"10px 15px"}
                                        background={"yellow"}>
                                    Авторизация
                                </Button>
                            </div>*/}
                            <Button onClick={() => setShowRegistrationModal(true)} padding={"10px 15px"}
                                    background={"lightgreen"}>
                                Регистрация
                            </Button>
                        </RowContainer>
                        : <Button onClick={() => {
                            dispatch(logout());
                            navigate("/students")
                        }} padding={"10px 15px"} background={"red"}>
                            Выйти
                        </Button>}
                </RowContainer>
                <div style={{height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)"}}/>
                <Hidden xs sm md>
                    <RowContainer style={{marginTop: "30px", justifyContent: "space-around"}}>
                        {links.map((item, index) => (
                            <>
                                {index !== 1 ? <Link key={index} to={item.to}>
                                        <Text uppercase fontWeight={500} fontSize={"20px"}>
                                            {index !== 1 ? item.text : isAuth && item.text}
                                        </Text>
                                    </Link>
                                    : isAuth && <Link key={index} to={item.to}>
                                    <Text uppercase fontWeight={500} fontSize={"20px"}>
                                        {index !== 1 ? item.text : isAuth && item.text}
                                    </Text>
                                </Link>}
                            </>
                        ))}
                    </RowContainer>
                </Hidden>
                <Visible xs sm md>
                    <div style={{transition: "all", textAlign: "center"}}>
                        <RowContainer onClick={() => setShow(!show)}
                                      style={{justifyContent: "center", cursor: "pointer"}}>
                            <Image margin={"0 4px 0 0"} src={Menu}/>
                            <Text margin={"35px 0"} uppercase fontWeight={500} fontSize={"20px"}>
                                меню
                            </Text>
                        </RowContainer>
                        {links.map((item, index) => (
                            <LinkContainer style={!show ? {
                                overflow: "hidden",
                                maxHeight: 0,
                                borderTop: "0 solid rgba(0, 0, 0, 0)"
                            } : {
                                maxHeight: "100px", padding: "35px 0",
                                borderTop: "1px solid rgba(0, 0, 0, 0.25)"
                            }} key={index}>
                                <Link to={item.to}>
                                    <Text uppercase fontWeight={500} fontSize={"20px"}>
                                        {item.text}
                                    </Text>
                                </Link>
                            </LinkContainer>
                        ))}
                    </div>
                </Visible>
            </ContainerHeader>
        </div>
    )
}

export default Header;