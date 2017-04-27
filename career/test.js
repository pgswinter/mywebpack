var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import App from './test2'


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox} />
		</Route>
	</Router>
	, document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}