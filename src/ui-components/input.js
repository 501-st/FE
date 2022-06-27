import React from 'react';
import styled from "styled-components";

const ModInput = styled.input`
  padding: 3px 0 3px 8px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: black;
  width: ${props => props.width};
  margin: ${props => props.margin};
  background: rgba(255, 255, 255, 0.05);
  border: 0.25px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  ::placeholder {
    color: #ADADAD;
  }
`;

const Input = ({placeholder, margin, width, onChange, type = "text", value}) => {
    return(
        <ModInput value={value} type={type} onChange={e => onChange(e)} width={width} placeholder={placeholder} margin={margin}/>
    )
}

export default Input;