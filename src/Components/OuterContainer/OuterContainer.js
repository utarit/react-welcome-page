import React from 'react';
import styled from 'styled-components';

const StyledOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
`;


const OuterContainer = (props) =>{ 

    if(props.index !== 0) {
        let keyframes =
            `@keyframes example {
                from {background-color: ${props.prevBackColor}}
                to {background-color: ${props.backColor}}
            }`;

        let styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }

        return (
        <StyledOuterContainer
            style={props.index ? {
                animation: `example ${props.loopDuration ? props.loopDuration : 1000}ms ease`
            }: {backgroundColor: props.backColor}} 
        {...props} />
    )}

export default OuterContainer;