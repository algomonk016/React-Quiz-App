import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuizApp from './Quiz-App/App';
import Quiz from './Quiz-App/Quiz';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={QuizApp} />
                <Route exact path='/quiz' component={Quiz} /> 
            </Switch>
        </Router>
    )
}

export default App
