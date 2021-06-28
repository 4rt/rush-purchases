import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from 'react-router-dom';
import '../css/app.css';
import { getPurchases } from '../store/actions/data';
import { useDispatch } from 'react-redux';
import Home from '../views/Home';
import History from '../views/History';
import New from '../views/New';

const App: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchases());
    }, [])

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/purchases'>Purchases</Link>
                        </li>
                        <li>
                            <Link to='/new'>New</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path='/new'>
                        <New />
                    </Route>
                    <Route exact path='/purchases'>
                        <History />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;
