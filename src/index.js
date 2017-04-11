var style = require('./style/style.css');

var messages = require('./message')

import Button from './button';
import Logo from './image';

var newMessage = () => (`
	<div class="${style.box}">
		<p>
			${messages.hi} asdsfdfs ${messages.event}
			${Logo}
		</p>
	</div>
	`)

// var newMessage = () => (Button.button)

var app = document.getElementById('app')
// app.innerHTML = '<p>'+messages.hi+' '+messages.event+'</p>'

app.innerHTML = newMessage()

Button.attachEl();

if(module.hot){
	module.hot.accept();
}