import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/Navbar';
import Intro from './pages/Intro'
import Skills from './pages/Skills'
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

import './App.css';

const App = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Intro />
                </Route>

                <Route exact path="/about">
                    <AboutMe />
                </Route>
                    
                <Route exact path="/projects">
                    <Projects/>
                </Route>

                <Route exact path="/skills">
                    <Skills/>
                </Route>

            </Switch>
        </div>
    )
}

export default App