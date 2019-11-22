import React from 'react';
import '../../styles.css';


const Image = (props) => (
    <img {...props} src={props.image} width="100" height="100" alt='' />
)

export default Image;