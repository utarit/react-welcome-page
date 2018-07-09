import React from 'react';
import styled from 'styled-components';
import {Animated, Easing} from 'react-native';

const StyledImage = styled.Image`
    width: 100px;
    height: 100px;
    resize-mode: contain;
`;


class Image extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            spinValue: new Animated.Value(0)
        }

        // First set up animation 
        Animated.timing(
            this.state.spinValue,
        {
            toValue: 1,
            duration: this.props.duration - 200,
            easing: Easing.ease
        }
        ).start()

        // Second interpolate beginning and end values (in this case 0 and 1)

    }


    render(){ 

        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['160deg', '0deg']
            })

        return (
        <Animated.Image {...this.props} source={this.props.image}  alt='Logo Image'
        style={{transform: [{rotate: spin}], width: 100, height: 100, opacity: this.state.spinValue }}
        />
    )}
}

export default Image