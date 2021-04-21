import React from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import '../Images/HotZone Logo.png'


const Projects = () => {
    return (
        <Grid>
            <Cell col={12}>
                    <div Class="projects">
                        {/* Poly */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', fontStyle: 'oblique', height: '176px', background: "url(https://media-exp1.licdn.com/dms/image/C560BAQE9RaZr9z3-wg/company-logo_200_200/0?e=1603929600&v=beta&t=f67ZH0OmfaGmcMQTIvwdpgsRtHZ7afIugCugtXTHECw) center / cover"}}>Poly Platform</CardTitle>
                            <CardText>
                            <b>Poly Platform</b>
                            <br/>
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
                            <CardTitle expand style={{ color: 'grey', fontStyle: 'oblique', height: '275px', background: 'url(https://www.quickanddirtytips.com/sites/default/files/images/204/quotation-marks.jpg) center / cover'}}></CardTitle>
                            <CardText>
                                <b>Stoic Quote Generator</b>
                                <br/>
                                Random quote generator built in React using Rest APIs the randomly generate quotes from Stoicism.
                                <br/>
                                <b>Technologies used: ReactJS, NodeJS, REST API, CSS, Reactstrap</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://stoic-quote-generator.herokuapp.com/" target="_blank">Demo</Button>
                                <Button colored href="https://github.com/zmcentire/vschool/tree/master/exercise/stoic-quote" target="_blank">Github</Button>
                            </CardActions>
                        </Card>
                        {/* Stoic Timeline */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', fontStyle: 'oblique', height: '176px', background: 'url(https://www.templateral.com/wp-content/uploads/Sample-of-Blank-Timeline-Template.jpg) center / cover'}}></CardTitle>
                            <CardText>
                                <b>Stoic Timeline</b>
                                <br/>
                                React Timeline app featuring simple bios of prolific Stoic Philosophers
                                <br/>
                                <b>Technologies used: ReactJS, CSS, HTML</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://stoic-bio.herokuapp.com/" target="_blank">Demo</Button>
                                <Button colored href="https://github.com/zmcentire/stoic-bio" target="_blank">Github</Button>
                            </CardActions>
                        </Card>
                        {/* DJ React */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color:'#fff', fontStyle: 'oblique', height: '176px', background: 'url(https://i.ebayimg.com/images/g/waoAAOSwNSJa18ok/s-l400.jpg) center /cover'}}></CardTitle>
                            <CardText>
                                <b>DJ Board React App</b>
                                <br/>
                                A DJ board React App with interactive buttons that change the display and color of the board
                                <br/>
                                <b>Technologies used: ReactJS, CSS</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://react-dj-board.herokuapp.com/" target="_blank">Demo</Button>
                                <Button colored href="https://github.com/zmcentire/dj-react" target="_blank">Github</Button>
                            </CardActions>
                        </Card>
                        {/* React Metronome */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', fontStyle: 'oblique', height: '190px', background: 'url(https://image.flaticon.com/icons/png/512/355/355128.png) center /cover'}}></CardTitle>
                            <CardText>
                                <b>React Metronome</b>
                                <br/>
                                Metronome app created in React
                                <br/>
                                <b>Technologies used: ReactJS</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://react-metronome-zm.netlify.app" target="_blank">Demo</Button>
                                <Button colored href="https://github.com/zmcentire/react-metronome" target="_blank">Github</Button>
                            </CardActions>
                        </Card>
                        {/* Hotzone */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', fontStyle: 'oblique', height: '176px', width: '225px', background: 'url(https://firehouse-app.web.app/static/media/HotZoneLogo.b602b7bc.png)'}}></CardTitle>
                            <CardText>
                                <b>Hotzone</b>
                                <br/>
                                    Application for firefighters and paramedics to easily search for information on drug and protocol administration while in certain counties.
                                <br/>
                                <b>Technologies used: ReactJS, CSS, Node, Firebase</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://firehouse-app.web.app" target="_blank">Demo</Button>
                            </CardActions>
                        </Card>
                        {/* Instagram-clone */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', fontStyle: 'oblique', height: '245px', background: 'url(https://logodix.com/logo/14586.png)', backgroundPosition: 'center'}} />
                            <CardText>
                                <b>Instagram-clone</b>
                                <br/>
                                <b>Technologies used: ReactJS, Tailwind CSS, Firebase</b>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/zmcentire/instagram-clone" target="_blank">Github</Button>
                            </CardActions>
                        </Card>
                    </div>
            </Cell>
        </Grid>
    )
}

export default Projects