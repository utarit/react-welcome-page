import React from 'react';
import Container from './Components/Container/Container';
import OuterContainer from './Components/OuterContainer/OuterContainer';
import InnerContainer from './Components/InnerContainer/InnerContainer';
import Logo from './Components/Image/Image';
import LogoText from './Components/LogoText/LogoText';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            index: 0
        };
        this.timer = this.timer.bind(this);
    }


    componentDidMount(){
        if(this.props.data.length === 0) {
            this.setState({finished: true});
        } else {
            this.timer(0);
        }
    }

    timer(i) {
        const dur = this.props.loopDuration ? this.props.loopDuration : 1000;
        this.setState({index: i});
        if(i < this.props.data.length - 1) {
            setTimeout( () => this.timer(i+1), dur);
        } else {
            setTimeout( () => this.setState({finished: true}), dur);
        }
        
    }


    render() {
        const {
            image,
            text = '',
            imageAnimation = 'rotateIn',
            textAnimation = 'fadeInDown',
            backgroundColor = 'whitesmoke',
            textColor = 'black'
            } = this.props.data[this.state.index];

            
            const prevBackColor = this.state.index !== 0 ? this.props.data[this.state.index - 1 ].backgroundColor : backgroundColor;


        return(
            <Container status={this.state.finished ? 'finished' : 'moveOn'} >
                <OuterContainer 
                    className="react-welcome-page"
                    prevBackColor={prevBackColor}
                    animation={this.props.loopDuration ? this.props.loopDuration : 1000}
                    backColor={backgroundColor}
                    index={this.state.index}
                    key={this.state.index}
                    >
                        <InnerContainer>
                            <Logo duration={this.props.loopDuration ? this.props.loopDuration : 1000} className={`animated ${imageAnimation}`} image={image} />
                            <LogoText
                                textColor={textColor}
                                duration={this.props.loopDuration ? this.props.loopDuration : 1000} 
                            className={`animated ${textAnimation}`} > {text} </LogoText>
                        </InnerContainer>
                        
                </OuterContainer>
            </Container>
        )
    }

}

export default Welcome;