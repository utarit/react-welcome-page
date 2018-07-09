import React from 'react';
import styled from 'styled-components';

const StyledInnerContainer = styled.div`
    text-align: center;
`;


const InnerContainer = (props) => (
    <StyledInnerContainer {...props} />
)

export default InnerContainer;