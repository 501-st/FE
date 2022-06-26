import React, {useState} from 'react';
import "../index.css"
import Text from "./text";
import {LinkContainer, RowContainer} from "../components/header/header";
import styled from "styled-components";
import ArrowDown from "../ui-components/images/arrowDown.png"
import Image from "./image";

const ModRowContainer = styled(RowContainer)`
  background: rgba(255, 255, 255, 0.05);
  border: 0.25px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
`;

const Select = ({options, setRole}) => {

    const [show, setShow] = useState({
        visible: false,
        value: options[0].text
    })

    return (
        <div style={{width: "170px"}}>
            <ModRowContainer onClick={() => setShow({...show, visible: !show.visible})}
                             style={{cursor: "pointer", justifyContent: "space-between", padding: "3px 5px"}}>
                <Text color={"black"} fontWeight={300} fontSize={"12px"}>
                    {show.value}
                </Text>
                <div style={show.visible ? {transform: "rotate(180deg)"} :{}}>
                    <Image src={ArrowDown}/>
                </div>
            </ModRowContainer>
            {options.map((item, index) => (
                <div key={index}>
                    {<LinkContainer onClick={() => {setShow({value: item.text, visible: false}); setRole(item.text)}}
                        style={!show.visible ? {overflow: "hidden", maxHeight: 0, textAlign: "start"} : {
                            maxHeight: "50px", padding: "10px 5px",
                            cursor: "pointer", textAlign: "start"
                        }} key={index}>
                        <Text color={"black"} fontWeight={300} fontSize={"12px"}>
                            {item.text}
                        </Text>
                    </LinkContainer>}
                </div>
            ))}
        </div>
    )
}

export default Select;