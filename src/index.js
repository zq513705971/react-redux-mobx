//require('./css/index.scss');

import * as css from './css/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import mobx from './mobx/mobx';
import redux from './redux/redux';

const Home = () => (
    <div className="home">
        <h1>Mobx & Redux!</h1>
    </div>
)

const Main = () => (
    <main className="main">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/mobx' component={mobx} />
            <Route path='/redux' component={redux} />
        </Switch>
    </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header className="header">
        <nav>
            <ul className="link-list">
                <li className="li-link"><Link to='/'>Home</Link></li>
                <li className="li-link"><Link to='/mobx'>mobx</Link></li>
                <li className="li-link"><Link to='/redux'>redux</Link></li>
            </ul>
        </nav>
    </header>
)

const App = () => (
    <div className="container">
        <Header />
        <Main />
    </div>
)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app'));