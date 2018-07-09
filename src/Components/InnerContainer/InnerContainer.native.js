import React from 'react';
import styled from 'styled-components';

const StyledInnerContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const InnerContainer = (props) => (
    <StyledInnerContainer {...props} />
)

export default InnerContainer;