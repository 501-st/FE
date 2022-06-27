import React, {useState} from 'react';
import "../index.css"
import Text from "./text";
import {RowContainer} from "../components/header/header";
import styled from "styled-components";
import ArrowDown from "../ui-components/images/arrowDown.png"
import Image from "./image";

const ModRowContainer = styled(RowContainer)`
  background: rgba(255, 255, 255, 0.05);
  border: 0.25px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
`;

const SelectContainer = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  width: inherit;
  border: 0.25px solid rgba(0,0,0,0.5);
  border-top: none;
`;

const SelectItem = styled.div`
  padding: 10px 5px;
  cursor: pointer;
  :hover{
    background-color: peachpuff;
  }
`;

const Select = ({options, setRole = undefined}) => {

    const [show, setShow] = useState({
        visible: false,
        value: options[0].text
    })

    return (
        <div style={{width: "170px", position: "relative"}}>
            <ModRowContainer onClick={() => setShow({...show, visible: !show.visible})}
                             style={{cursor: "pointer", justifyContent: "space-between", padding: "3px 5px"}}>
                <Text color={"black"} fontWeight={300} fontSize={"12px"}>
                    {show.value}
                </Text>
                <div style={show.visible ? {transform: "rotate(180deg)"} :{}}>
                    <Image src={ArrowDown}/>
                </div>
            </ModRowContainer>
            <SelectContainer style={{display: show.visible ? "block" : "none"}}>
                {options.map((item, index) => (
                    <SelectItem key={index} onClick={() => {setShow({visible: false, value: item.text}); setRole(item.text)}}
                    style={{display: show.visible ? "block" : "none"}}>
                        <Text color={"black"} fontWeight={300} fontSize={"12px"}>
                            {item.text}
                        </Text>
                    </SelectItem>
                ))}
            </SelectContainer>
        </div>
    )
}

export default Select;