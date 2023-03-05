import React, {Component} from 'react';
import Photo from "./Photo";

import img1 from './img/1.jpeg'
import img2 from './img/2.jpeg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpeg'
import img7 from './img/7.jpeg'
import img8 from './img/8.jpeg'
import img9 from './img/9.jpeg'

const pics = [img1, img2, img3, img4, img5, img6, img7,img8,img9]

class Photos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePic: ''
        }
    }

    updateActivePic = (src) => {
        this.setState({
            activePic: this.state.activePic ? '' : src
        })
    }


    renderLargePic = () => {
        return (
            <div>
                <Photo
                    size={'large'}
                    src={this.state.activePic}
                    changeActivePic={this.updateActivePic}
                />
            </div>
        )
    }

    renderPics = () => {
        return (
            <div className={'container'}>
                {pics.map((item, index) =>
                    <Photo
                        size={'small'}
                        src={item}
                        key={index}
                        changeActivePic={this.updateActivePic}
                    />)}
            </div>
        );
    }

    render() {
        if (this.state.activePic) {
            return this.renderLargePic()
        } else
            return this.renderPics()
    }

}

export default Photos
