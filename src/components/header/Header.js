import React, {Component} from 'react';
import oscar from '../../assets/images/oscar-nilsson-1860.jpg';
import silva from '../../assets/images/silva-marvel.png';
import GeneralStyle from '../../Style.js';


const headerStyle = {
    background: {
        width: "100%",
        maxWidth: "4912px", /* YOUR BG MAX SIZE */
        background: `url("${oscar}") no-repeat`,
        backgroundSize: "100%",
        color: "white",
        overlay: {
            backgroundColor: "rgba(11, 104, 144, 0.8)",
            // backgroundColor: "rgba(255, 0, 0, 0.3)",
        }
    },
    // @fontFace: {
    //     fontFamily: "myFirstFont",
    //     src: `url("${oscar}") no-repeat`,
    //     // src: url(sansation_light.woff),
    // },

};

class Header extends Component {
    render() {
        return (
            <div style={headerStyle.background}>
                <div style={headerStyle.background.overlay}>
                    <div style={GeneralStyle.spaceBar}/>
                    <div className="small-12 grid-x" style={{}}>

                        <div className="small-5" style={{backgroundColor: ""}}/>
                        <div className="small-2 align-center">
                            <img src={silva} alt="Background-Image"/>
                        </div>
                        <div className="small-5" style={{backgroundColor: ""}}/>

                    </div>

                    <div style={GeneralStyle.spaceBar}/>
                    {/*<div style={GeneralStyle.spaceBar}/>*/}

                    <div className="small-12 text-center grid-x">
                        <div className="small-3"/>
                        <div className="small-6">
                            <h5>HI, MY NAME IS</h5>
                            <h1>Youssouf da Silva</h1>
                            <p>
                                I'm a freelance web designer based on Earth. I have a passion for design and love to
                                create for
                                web and mobile devices. I consider every aspect of a project to achieve not just
                                something that
                                looks beautiful, but actually works and achieves its purpose.
                            </p>
                        </div>
                        <div className="small-3"/>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
