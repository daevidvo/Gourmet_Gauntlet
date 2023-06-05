import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bulma/css/bulma.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AboutUs from './pages/about-us';
import SignUp from './pages/Signup';
import Battle from './pages/Battle';

import Footer from './components/Footer';
import Header from './components/Header';

const httpLink = createHttpLink({ uri: '/graphql', });



const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route 
                path='/'
                element={<Home/>}
            />
            {/* <Route 
                path='/battle'
                element={<Battle/>}
            /> */}
            <Route 
                path='/login'
                element={<Login/>}
            />
            {/* <Route 
                path='/profile'
                element={<Profile/>}
            /> */}
            <Route 
                path='/signup'
                element={<SignUp/>}
            />
            {/* <Route 
                path='/about-us'
                element={<AboutUs/>}
            /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
