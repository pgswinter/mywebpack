import 'bootstrap/dist/js/bootstrap';

require('../src/style/career/bundle.sass');

require('../public/fonts/segoeui/font.sass');
require('../public/fonts/segoeuib/font.sass');
require('../public/fonts/museo/font.sass');

import React, {Component} from 'react';
import { render } from 'react-dom'
// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

// Module import
var Home = () => (
	<div>There is Home</div>
)
var AboutUs = () => (
	<div>There is About Us</div>
)
var Campus = () => (
	<div>There is Campus</div>
)
var Life = () => (
	<div>There is Life</div>
)
var Job = () => (
	<div>There is Job</div>
)

const master_data = require('../career/master_page/data');

var formatDate = function(date) {
  return date.toLocaleDateString();
}

class MasterPage extends React.Component {
	render(){

		return (
			<div>
				<MenuLeft master_page={master_data.master_page}/>
				<Header master_page={master_data.master_page}/>
				{this.props.children}
				<Footer master_page={master_data.master_page}/>
			</div>
		)

	}
}

var MenuLeft = function(props){
	return(
		<div className="menu-left">
			<a className="menu-btn indx-gene acti-hove for-lapt-and-desk">
				<i className="fa fa-bars" aria-hidden="true"></i>
				<i className="fa fa-close hide-element" aria-hidden="true"></i>
				<span className="welc-symb for-desk-and-tabl" for="">{props.master_page.header.top_head.text5}</span>
				<span className="menu-symb hide-element" for="">{props.master_page.header.top_head.text7}</span>
			</a>
			<div className="menu-left indx-warr">
				
				<ul className="lv-01">
			
					<li><a href="">{props.master_page.menu_left.item1}</a></li>
					<li><a href="">{props.master_page.menu_left.item2}</a></li>
					<li><a href="">{props.master_page.menu_left.item3}</a></li>
					<li><a href="">{props.master_page.menu_left.item4}</a></li>
					<li><a href="">{props.master_page.menu_left.item5}</a></li>
					<li><a href="">{props.master_page.menu_left.item6}</a></li>
					<li><a href="">{props.master_page.menu_left.item7}</a></li>
					<li><a href="">{props.master_page.menu_left.item8}</a></li>
					<li><a href="">{props.master_page.menu_left.item9}</a></li>
					<li className='md-high'>
						
						<div className="lang-wrap">
							
							<div className="bar"></div>	
							<i className="fa fa-caret-down expa-btn"></i>
							<ul className="list-item hide-element">
								<li><div className="item-wrapper">{props.master_page.menu_left.item10}</div></li>
								<li><div className="item-wrapper">{props.master_page.menu_left.item11}</div></li>
							</ul>

						</div>

					</li>
					<li className="ex-high"><a href=""><i className="fa fa-facebook-official"></i></a></li>
					<li><a href=""><i className="fa fa-twitter"></i></a></li>
					<li><a href=""><i className="fa fa-linkedin"></i></a></li>
					<li><a href=""><i className="fa fa-google-plus"></i></a></li>
					<li className="for-mobi cont-form-btn"><a href="">{props.master_page.menu_left.item12}</a></li>
					<li className="for-mobi"><a href="">{props.master_page.menu_left.item13}</a></li>
			
				</ul>
			
			</div>
		</div>
	)
}

var Header = function(props){
	return (
		<div className="header">

			<header className="indx-huma">
		
				<div className="head-wrap">
			
					<div className="top-head set-bg-white">

						<div className="col-lg-4 col-md-4 col-sm-6 no-float logo-amar">
						
							<div className="row">
						
								<a href="" className="defa-logo minimize">
									<img src={require (`../src/career/images/logo.png`)} />
								</a>
								
							</div>
						
						</div>
						
						<div className="only-righ for-desk">
							
							<a className="the-butt btn-cont cont-form-btn">Contact</a>
							<a className="the-butt btn-appl" href="http://amaris.com/amaris-careers-page/home/home-page-v2">apply</a>
						
						</div>

					</div>

				</div>
				<div className="sect-amar abou-us main-nav vert-menu vert-anim amar-nav">
					<ul>

						<li>
							<Link to="/home">
								<span for="">{props.master_page.header.navigate.nav1}</span>
							</Link>
						</li>
						<li>
							<Link to="/life">
								<span for="">{props.master_page.header.navigate.nav2}</span>
							</Link>
						</li>
						<li>
							<Link to="/job">
								<span for="">{props.master_page.header.navigate.nav3}</span>
							</Link>
						</li>
						<li>
							<Link to="/campus">
								<span for="">{props.master_page.header.navigate.nav4}</span>
							</Link>
						</li>
						<li>
							<Link to="/about">
								<span for="">{props.master_page.header.navigate.nav5}</span>
							</Link>
						</li>
					</ul>
					<div className="clear"></div>
				</div>

			</header>
			
		</div>
	)
}

var Footer = function(props){
	return (
		<div className="footer">

			<footer className="main-foot">
		
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-xxs-full">
							
							<h4>{props.master_page.footer.left_site.text1}</h4>
							<a href="">{props.master_page.footer.left_site.text2}</a>

						</div>
						<div className="col-lg-6 col-md-6 col-sm-9 col-xs-9 col-xxs-full soci-mobile pull-right">
							
							<h4>Follow us</h4>
							<ul>
								<li><a href=""><img src={require(`../src/career/images/facebook.png`)} alt="" /></a></li>
								<li><a href=""><img src={require(`../src/career/images/google.png`)} alt="" /></a></li>
								<li><a href=""><img src={require(`../src/career/images/linkedin.png`)} alt="" /></a></li>
								<li><a href=""><img src={require(`../src/career/images/twitter.png`)} alt="" /></a></li>
								<li><a href=""><img src={require(`../src/career/images/xing.png`)} alt="" /></a></li>
								<li><a href=""><img src={require(`../src/career/images/youtube.png`)} alt="" /></a></li>
								<li><a href=""><img src={require(`../src/career/images/orange.png`)} alt="" /></a></li>
							</ul>

						</div>
					</div>
				</div>

			</footer>

		</div>
	)
}

render((
	<Router history={hashHistory}>
		<Route path="/" component={MasterPage}>
			<IndexRoute component={Home} />
			<Route path="about" component={AboutUs} />
			<Route path="life" component={Life} />
			<Route path="job" component={Job} />
			<Route path="campus" component={Campus} />
		</Route>
	</Router>
	), document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}