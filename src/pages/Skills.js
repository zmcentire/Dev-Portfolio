import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state ={ activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div class="skills-grid">
                    <div>
                        <i class="fab fa-html5"></i>
                        <h4>html5</h4>
                    </div>
                    <div>
                        <i class="fab fa-css3-alt"></i>
                        <h4>CSS</h4>
                    </div>
                    <div>
                        <i class="fab fa-react"></i>
                        <h4>ReactJS</h4>
                    </div>
                    <div>
                        <i class="fab fa-angular"></i>
                        <h4>AngularJS</h4>
                    </div>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="skills-grid">
                    <div>
                        <i class="fab fa-node"></i>
                        <h4>NodeJS</h4>
                    </div>
                    <div>
                        <h4>ExpressJS</h4>
                    </div>
                    <div>
                        <h4>MongoDB</h4>
                    </div>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="skills-grid">
                    <div>
                        <i class="fab fa-git-square"></i>
                        <h4>Git</h4>
                    </div>
                    <div>
                        JSON
                    </div>
                    <div>
                        <i class="fab fa-adobe"></i>
                        <h4>Adobe Creative Cloud</h4>
                    </div>
                    <div>
                        <i class="fab fa-microsoft"></i>
                        <h4>Microsoft Suite</h4>
                    </div>
                    <div>
                        <i class="fab fa-wordpress"></i>
                        <h4>Wordpress</h4>
                    </div>
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Front End</Tab>
                    <Tab>Back End</Tab>
                    <Tab>Other</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills