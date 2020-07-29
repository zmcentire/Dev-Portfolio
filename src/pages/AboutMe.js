import React from 'react';
import { Grid, Cell } from 'react-mdl';
import "../Images/Headshot2.jpg";

const AboutMe = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="intro">
                <Cell col={12}>
                    <img src={require("../Images/Headshot2.jpg")} alt="" className="headshot"/>
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
                    <div className="contact">
                        <h4>Get in touch</h4>
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
                </Cell>
            </Grid>
        </div>
    )
}

export default AboutMe