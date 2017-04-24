import 'bootstrap/dist/js/bootstrap';

require('../src/style/career/bundle.sass');

require('../public/fonts/segoeui/font.sass');
require('../public/fonts/segoeuib/font.sass');

var React = require('react');
var ReactDOM = require('react-dom');

var samples = require('../career/master_page/data');

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
var MasterPage = React.createClass({

	getInitialState: function(){
		// return {
		// 	"master_pages":{}
		// };
	},
	loadSampleData: function(){
		// this.setState(samples);
	},
	render: function(){

		return (
			<div>
				<MenuLeft />
				<Header />
				<Footer />
			</div>
		)

	}

})

var MenuLeft = React.createClass({
	render: function(){
		return (
			<div class="menu-left">
				<a class="menu-btn indx-gene acti-hove">
					{this.props.header.top_head}
				</a>
			</div>
		)
	}
})

var Header = React.createClass({
	render: function(){
		return (
			<div class="header">Hi There is header</div>
		)
	}
})	

var Footer = React.createClass({
	render: function(){
		return (
			<div class="footer">Hi There is footer</div>
		)
	}
})

ReactDOM.render(<MasterPage />, document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}

