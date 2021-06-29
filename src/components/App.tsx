import React, { useEffect, Suspense } from 'react';
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
import Loading from './Loading';

const Home = React.lazy(() => import('../views/Home'));
const History = React.lazy(() => import('../views/History'));
const Edit = React.lazy(() => import('../views/Edit'));

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
                    <Suspense fallback={ <Loading /> }>
                        <Edit />
                    </Suspense>
                </Route>
                <Route path='/purchases'>
                    <Suspense fallback={ <Loading /> }>
                        <History />
                    </Suspense>
                </Route>
                <Route exact path='/'>
                    <Suspense fallback={ <Loading /> }>
                        <Home />
                    </Suspense>
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
