import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
require('./css/style.css')

import reducer from './reducers';

import BlogPosts from './BlogPosts.jsx';
import AllBlogPosts from './AllBlogPosts.jsx';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const Home =(props)=> <div>
												<h1>"It's Blargin' time!"</h1>
												<Link to="/">Home</Link><br/>
												<Link to="/blogposts">Start Blogging!</Link><br/>
												<Link to="/allblogposts">All Blogs</Link>
												{props.children}
											</div>
	


render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Home} >
				<Route path="/blogposts" component={BlogPosts} />
				<Route path="/allblogposts" component={AllBlogPosts} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('app'));








