import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
background-color: whitesmoke;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;
display: ${props => props.status === 'finished' ? 'none' : 'initial'};
`

const Container = (props) => (
    <StyledContainer {...props} />
)

export default Container;