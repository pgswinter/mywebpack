import React, {Component} from 'react';
import { render } from 'react-dom'
// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

var Home = () => (
	<div>There is Home</div>
)

var About = () => (
	<div>There is About</div>
)

var Inbox = () => (
	<div>There is Inbox</div>
)

class App extends Component{

	render(){
		return(
			<div>

				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">Inbox</Link></li>
		        </ul>
		        <p>{this.props.children}</p>

			</div>
			
		)
	}

}

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox} />
		</Route>
	</Router>
	), document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}