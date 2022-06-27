import React from 'react';
import styled from "styled-components";

const ModTextarea = styled.textarea`
  padding: 3px 0 3px 8px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: black;
  width: ${props => props.width};
  margin: ${props => props.margin};
  background: rgba(255, 255, 255, 0.05);
  border: 0.25px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  resize: vertical;
  ::placeholder {
    color: #ADADAD;
  }
`;

const Textarea = ({placeholder, margin, width, onChange, type = "text"}) => {
    return(
        <ModTextarea type={type} onChange={e => onChange(e)} width={width} placeholder={placeholder} margin={margin}/>
    )
}

export default Textarea;