import React from 'react';
import styled from 'styled-components';
import {Animated, Easing, StyleSheet} from 'react-native';

const StyledOuterContainer = styled.View`
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
    background-color: ${props => props.backColor}
`;


class OuterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        // BACKGROUND COLOR DÜZELTİLECEK!!!!
     
        return(
            <StyledOuterContainer {...this.props} />
        );
    }
}

export default OuterContainer;