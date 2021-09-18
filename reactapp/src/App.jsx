import React from 'react';
import Message from './Message.jsx';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <h1 Style="padding: 40px 0 0 0;">MessageMe</h1>
          <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Message} />
              <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{ maxWidth: "400px"}}>
                  <Route path="/signup" component={Signup}/>
                  <Route path="/login" component={Login}/>
                </div>
              </Container>
            </Switch>
          </AuthProvider>
          </Router>
      </div>
  );
}

export default App;