import React, { useContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import { pages } from './data/pages';

import { Header } from './components/layout/HeaderFooter';
import Login from './components/pages/Login';
import Classes from './components/pages/panels/classes/Classes';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Schedule from './components/pages/panels/Schedule';
import Profile from './components/pages/panels/Profile';
import Upload from './components/pages/panels/Upload';
import Register from './components/pages/Register';
import Page from './components/pages/Page';
import ThemeContext from './context/ThemeContext';

const App = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Router>
            <Box className='app-container'>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route
                        path='/dashboard'
                        render={() => <Dashboard pages={pages} />}
                    />
                    {pages.map(function({ name, icon, viewToggle }, i) {
                        return (
                            <Route
                                key={i}
                                path={`/${name}`}
                                render={() => (
                                    <Page
                                        title={name}
                                        icon={icon}
                                        color={theme.palette.primary.main}
                                        viewToggle={viewToggle}
                                    >
                                        {name === 'classes' ? (
                                            <Classes />
                                        ) : name === 'add' ? (
                                            <Upload />
                                        ) : name === 'profile' ? (
                                            <Profile />
                                        ) : name === 'schedule' ? (
                                            <Schedule />
                                        ) : null}
                                    </Page>
                                )}
                            />
                        );
                    })}
                </Switch>
            </Box>
        </Router>
    );
};

export default App;
