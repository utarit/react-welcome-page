import React from 'react';
import {Animated, Easing} from 'react-native';



class LogoText extends React.Component {

    constructor(props){
        super(props);
        this.state={
            positionValue: new Animated.Value(0)
        }

        Animated.timing(
            this.state.positionValue,
        {
            toValue: 1,
            duration: this.props.duration - 200,
            easing: Easing.ease
        }
        ).start()

    }


    render() { 
        const pos = this.state.positionValue.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 10]
            })
    
        return (
        <Animated.Text style={{transform:[{translateY: pos}], color: this.props.textColor, opacity: this.state.positionValue}} {...this.props} />
    )}
} 

export default LogoText;