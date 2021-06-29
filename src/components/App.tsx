import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    NavLink
} from 'react-router-dom';
import '../css/app.css';
import { getPurchases } from '../store/actions/history';
import { useDispatch } from 'react-redux';
import Home from '../views/Home';
import History from '../views/History';
import Edit from '../views/Edit';

const App: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchases());
    }, [])

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/purchases' activeClassName="active">Purchases</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' activeClassName="active">New</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path='/new'>
                    <Edit />
                </Route>
                <Route path='/purchases'>
                    <History />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route
                    render={() => {
                        return (
                            <Redirect to='/' />
                        )
                    }}
                />
            </Switch>
        </Router>
    )
};

export default App;
