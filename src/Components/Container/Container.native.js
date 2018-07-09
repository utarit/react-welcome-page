import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.View`
background-color: whitesmoke;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;
`;

const NoneView = styled.View`
display: none;
`

const Container = (props) => {
    if(props.status === 'finished') {
        return <NoneView />
    } else {
        return <StyledContainer {...props} />
    }
}

export default Container;