import React from 'react'
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Persons from './components/lists/Persons'
import { notFound } from './404'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Users } from './components/lists/PersonWithCars'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})


const App = () => (
  
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Persons}></Route>
          <Route path="/person/:id" component={Users}></Route>
          <Route path="*" component={notFound}></Route>
        </Switch>
    </Router>
  </ApolloProvider>
  
)
export default App