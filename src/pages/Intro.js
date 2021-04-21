import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Headshot from "../Images/NewHeadshot3.JPG";

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

                    <div className="about">
                        <p>
                            Recent coding boot camp graduate with experience in full-stack web development (JavaScript, React, HTML, CSS, Node, etc.).

                            5+ years in Radio Productions/Promotions with experience in Adobe Creative Cloud, WordPress, and Microsoft Suite.

                            Seeking new opportunities in tech to further improve my new skillset in front end and back end programming.
                        </p>
                    </div>

                    <hr /> 

                    <h4>Skills</h4>
                    <div className="contact">
                        
                        <div>
                            <i class="fab fa-html5"></i>
                            <h5>html5</h5>
                        </div>
                        <div>
                            <i class="fab fa-css3-alt"></i>
                            <h5>CSS</h5>
                        </div>
                        <div>
                            <i class="fab fa-react"></i>
                            <h5>ReactJS</h5>
                        </div>
                        <div>
                            <i class="fab fa-angular"></i>
                            <h5>AngularJS</h5>
                        </div>
                        <div>
                            <i class="fab fa-node"></i>
                            <h5>NodeJS</h5>
                        </div>
                        <div>
                            <i class="fab fa-git-square"></i>
                            <h5>Git</h5>
                        </div>
                        <div>
                            <i class="fab fa-microsoft"></i>
                            <h5>Microsoft Suite</h5>
                        </div>
                        <div>
                            <i class="fab fa-wordpress"></i>
                            <h5>Wordpress</h5>
                        </div>
                    </div>

                    <hr />
                    
                    <h4>Get in touch</h4>
                    <div className="contact">
                        
                        {/* <a href="mcentirezach@gmail.com" rel="noopener noreferrer" target="_blank">
                            <i class="fas fa-envelope"></i>
                        </a> */}
                        <a href="https://github.com/zmcentire" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github" aria-hidden="true" />
                        </a>
                        <a href="https://www.linkedin.com/in/zachmcentire/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                    
                    {/* <div className="intro-route">
                        <a href="/about/">
                            <h4>About Me</h4>
                        </a>
                        <a href="/projects">
                            <h4>Projects</h4>
                        </a>
                        <a href="/skills">
                            <h4>Skills</h4>
                        </a>
                    </div> */}
                </Cell>
            </Grid>
        </div>
    )
}

export default Intro