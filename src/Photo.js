import React from 'react';

const Photo = (props) => {
    return (
        <img className={props.size} src={props.src}onClick={()=>{props.changeActivePic(props.src)}}/>
    );
};

export default Photo;

