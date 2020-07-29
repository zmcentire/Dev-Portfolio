import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Headshot from "../Images/Headshot2.jpg";

const Intro = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="intro">
                <Cell col={12}>
                    <img className="headshot" src={Headshot} alt="" />
                    <div className="intro-header">
                        <h1>Zach McEntire</h1>
                        <h3>Full Stack Developer</h3>
                    </div>

                    <hr/>
                    
                    <div className="intro-route">
                        <a href="/about/">
                            <h4>About Me</h4>
                        </a>
                        <a href="/projects">
                            <h4>Projects</h4>
                        </a>
                        <a href="/skills">
                            <h4>Skills</h4>
                        </a>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Intro