import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { PrivateRoute } from './private-route';
import LoginPage from './views/auth/login/view';
import PlanetsPage from './views/planets/index/view';

class App extends React.Component {
    render() {
        return (
            <div className="star-wars">
                <div className="container">
                    <Router>
                        <div>                                
                            <Redirect from="/" to="/planets" />
                            <PrivateRoute path="/planets" component={PlanetsPage} />
                            <Route path="/login" component={LoginPage} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App; 
