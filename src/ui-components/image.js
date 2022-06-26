import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin: ${props => props.margin};
  width: fit-content;
`;

const Image = ({src, margin, width, height}) => {
    return(
        <Container margin={margin}>
            <img width={width} height={height} src={src} alt={"There must be something beautiful, sorry ^_^"}/>
        </Container>
    )
}

export default Image;