import React from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


const Projects = () => {
    return (
        <Grid>
            <Cell col={12}>
                    <div Class="projects">
                        {/* Poly */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: "url(https://media-exp1.licdn.com/dms/image/C560BAQE9RaZr9z3-wg/company-logo_200_200/0?e=1603929600&v=beta&t=f67ZH0OmfaGmcMQTIvwdpgsRtHZ7afIugCugtXTHECw) center / cover"}}>Poly Platform</CardTitle>
                            <CardText>
                            An event scheduling/organization social media app.
                            The platform combines the power of organizational exclusivity with interest-based content to encourage face to face engagement for university students and company employees. 
                            On the backend, data aggregation helps build a strategic analysis of your organization. Get to know your student body or your employees better by seeing what they are interested in and how they like to engage with each other.
                            <br/>
                            <b>Technologies used: AngularJS, CSS, HTML</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://getpolyplatform.com/" target="_blank">Demo</Button>
                            </CardActions>
                        </Card>
                        {/* Quote Generator */}
                        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                            <CardTitle expand style={{ color: 'grey', height: '175px', background: 'url(https://www.quickanddirtytips.com/sites/default/files/images/204/quotation-marks.jpg) center / cover'}}>Stoic Quote Generator</CardTitle>
                            <CardText>
                                Random quote generator built in React using Rest APIs the randomly generate quotes from Stoicism.
                                <br/>
                                <b>Technologies used: ReactJS, NodeJS, REST API, CSS, Reactstrap</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://stoic-quote-generator.herokuapp.com/" target="_blank">Demo</Button>
                            </CardActions>
                        </Card>
                        {/* Stoic Timeline */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.templateral.com/wp-content/uploads/Sample-of-Blank-Timeline-Template.jpg) center / cover'}}>Stoic Bio Timeline</CardTitle>
                            <CardText>
                                React Timeline app featuring simple bios of prolific Stoic Philosophers
                                <br/>
                                <b>Technologies used: ReactJS, CSS, HTML</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://stoic-bio.herokuapp.com/" target="_blank">Demo</Button>
                            </CardActions>
                        </Card>
                        {/* DJ React */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.ebayimg.com/images/g/waoAAOSwNSJa18ok/s-l400.jpg) center /cover'}}>DJ Board React App</CardTitle>
                            <CardText>
                                A DJ board React App with interactive buttons that change the display and color of the board
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://react-dj-board.herokuapp.com/" target="_blank">Demo</Button>
                            </CardActions>
                        </Card>
                    </div>
            </Cell>
        </Grid>
    )
}

export default Projects