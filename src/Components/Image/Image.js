import React from 'react';
import '../../styles.css';


const Image = (props) => (
    <img {...props} src={props.image} alt='' />
)

export default Image;