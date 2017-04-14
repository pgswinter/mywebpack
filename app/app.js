import $ from 'jquery';
var React = require('react');
var ReactDOM = require('react-dom');

var samples = require('./sample-data');

$('#app').css('background-color','lightblue')

var App = React.createClass({

	getInitialState: function(){
		return {
			"humans":{},
			"stores":{}
		}
	},
	loadSampleData: function(){
		this.setState(samples);
	},
	render: function(){

		return (
			<div>
				<div id="header"></div>
				<button onClick={this.loadSampleData}>Load Sample Data</button>
				<div className="container">
					<div className="column">
						<InboxPane humans={this.state.humans}/>
					</div>
				</div>
			</div>
		)

	}

})

var InboxPane = React.createClass({
	renderInboxItem: function(human){
		return <InboxItem key={human} index={human} details={this.props.humans[human]} />;
	},
	render: function(){

		return(
			<div id="inbox-pane">
				<h1>Inbox</h1>
				<table>
					<thead>
						<tr>
							<th>Chat Received</th>
							<th>Name</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.props.humans).map(this.renderInboxItem)}
					</tbody>
				</table>
			</div>
		)

	}
})

var InboxItem = React.createClass({
	render: function(){
		return(
			<tr>
				<td>5pm</td>
				<td>{this.props.index}</td>
				<td>Order Sent</td>
			</tr>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}