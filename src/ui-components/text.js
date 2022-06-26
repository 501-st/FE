import React from "react";
import styled from "styled-components";
import "../index.css"

const TextComponent = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.uppercase ? "uppercase" : ""};
  font-family: Montserrat, sans-serif;
  margin: ${props => props.margin};
`;

let Text = ({fontSize = "18px", color = "rgba(0, 0, 0, 0.5)", fontWeight = 400, uppercase = false, margin, children}) => {
    return (
        <TextComponent fontSize = {fontSize} color={color} fontWeight={fontWeight} uppercase={uppercase} margin={margin}>
            {children}
        </TextComponent>
    )
}

export default Text;