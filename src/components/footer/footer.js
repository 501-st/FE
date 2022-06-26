import React from "react";
import styled from "styled-components";
import Text from "../../ui-components/text";

const ContainerFooter = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 10px;
`;

let Footer = () => {

    return (
        <div style={{backgroundColor: "rgba(23, 31, 35, 0.85)", padding: "45px 0 55px 0", margin: "auto 0 0"}}>
            <ContainerFooter>
                <Text fontSize={"20px"} color={"white"} fontWeight={800} uppercase margin={"0 0 15px 0"}>
                    контактная информация
                </Text>
                <Text fontSize={"16px"} fontWeight={300} color={"rgba(255, 255, 255, 0.5)"} margin={"0 0 70px 0"}>
                    Сайт деканата - hits.tsu.ru
                </Text>
                <div style={{height: "1px", backgroundColor: "rgba(255, 255, 255, 0.25)"}}/>
                <div style={{textAlign: "center"}}>
                    <Text fontSize={"16px"} fontWeight={300} color={"rgba(255, 255, 255, 0.5)"} margin={"20px 0 0 0"}>
                        © 2022 - Team 3
                    </Text>
                </div>
            </ContainerFooter>
        </div>
    )
}

export default Footer;