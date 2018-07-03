import React from 'react';
import'./styles.css';


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

            if(this.state.index !== 0) {
                const prevBackColor = this.props.data[this.state.index - 1 ].backgroundColor;
                const prevTextColor = this.props.data[this.state.index - 1 ].textColor;
                let keyframes =
                    `@keyframes example {
                        from {background-color: ${prevBackColor}; color: ${prevTextColor}}
                        to {background-color: ${backgroundColor}; color: ${textColor}}
                    }`;

                let styleSheet = document.styleSheets[0];
                styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
            }

            
 


        return(
            <div className={this.state.finished ? 'finished' : 'moveOn'} >
                <div 
                    style={this.state.index ? {
                        animation: `example ${this.props.loopDuration ? this.props.loopDuration : 1000}ms ease`
                    }: {backgroundColor, color: textColor}} 
                    key={this.state.index}
                    className="outer-container">
                        <div className='inner-container' >
                            <img className={`animated ${imageAnimation}`} src={image} alt='' />
                            <p className={`animated ${textAnimation}`}>{text}</p>
                        </div>
                </div>
            </div>
        )
    }

}

export default Welcome;