import 'bootstrap/dist/js/bootstrap';

require('../src/style/career/bundle.sass');

require('../public/fonts/segoeui/font.sass');
require('../public/fonts/segoeuib/font.sass');
require('../public/fonts/museo/font.sass');

var React = require('react');
var ReactDOM = require('react-dom');
// import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

const master_data = require('../career/master_page/data');

var formatDate = function(date) {
  return date.toLocaleDateString();
}

// class MasterPage extends React.Component{
// 	render(){

// 		return (
// 			<div>
// 				<MenuLeft master_page={master_data.master_page}/>
// 				<Header master_page={master_data.master_page}/>
// 				{this.props.children}
// 				<Footer master_page={master_data.master_page}/>
// 			</div>
// 		)

// 	}
	
// }

var MasterPage = function(props){

	return (
		<div>
			<MenuLeft master_page={master_data.master_page}/>
			<Header master_page={master_data.master_page}/>
			<BodyContent/>
			<Footer master_page={master_data.master_page}/>
		</div>
	)

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
							<a href="">
								<span for="">{props.master_page.header.navigate.nav1}</span>
							</a>
						</li>
						<li>
							<a href="">
								<span for="">{props.master_page.header.navigate.nav2}</span>
							</a>
						</li>
						<li>
							<a href="">
								<span for="">{props.master_page.header.navigate.nav3}</span>
							</a>
						</li>
						<li>
							<a href="">
								<span for="">{props.master_page.header.navigate.nav4}</span>
							</a>
						</li>
					</ul>
					<div className="clear"></div>
				</div>

			</header>
			
		</div>
	)
}

var BodyContent = function(props){

	return (
		<HomePage home_page={master_data.home_page}/>
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


var HomePage = function(props){

	return(
		<div className="body-content home-page">
			
			<section className="helo-amar mobi-oran">

				<div className="img-wrap-cent">
					<img src={require(`../src/career/photos/wall.jpg`)} alt="" />
				</div>

			</section>
			<section className="prom-amar set-bg-dark">
			
				<div className="container">
					<h4>{props.home_page.promotion.text_prom}</h4>
				</div>

			</section>
			<section className="perc-amar set-bg-oran">
			
				<div className="container">
					<div className="titl2">
						<h3 className="set-bord-righ">The NUMBER</h3>
					</div>
					
					<div className="incr-numb">
						
						<div className="col-lg-3 col-md-3 col-sm-3 bord-hove transition-effect">
							
							<p className="counter">2650</p>
							<h4>{props.home_page.number.text1}</h4>
							<img src={require(`../src/career/images/empl.png`)} alt="" />

						</div>
						<div className="col-lg-3 col-md-3 col-sm-3 bord-hove transition-effect">
							
							<p className="counter">75</p>
							<h4>{props.home_page.number.text2}</h4>
							<img src={require(`../src/career/images/coff.png`)} alt="" />
							
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3 bord-hove transition-effect">
							
							<p className="counter">65</p>
							<h4>{props.home_page.number.text3}</h4>
							<img src={require(`../src/career/images/offi.png`)} alt="" />

						</div>
						<div className="col-lg-3 col-md-3 col-sm-3 bord-hove transition-effect">
							
							<p className="counter">1</p>
							<h4>{props.home_page.number.text4}</h4>
							<img src={require(`../src/career/images/earth.png`)} alt="" />

						</div>
					
					</div>
				</div>

			</section>
			<section className="map-amar set-bg-white">
				<div className="container">
					<div className="titl-bold">
						<h3>Our Locations</h3>
					</div>
					<div className="img-wrap">
						<a href="" title="Discover all our locations!"></a>
						<a href=""><img title="Amaris map" alt="Amaris map" src={require(`../src/career/images/map.png`)} /></a>
					</div>
				</div>
			</section>	
		</div>
	)

}
// class HomePage extends React.Component{
// 	render(){

// 		return(
// 			<div className="body-content home-page">
				
// 				<section className="helo-amar mobi-oran">

// 					<div className="img-wrap-cent">
// 						<img src={require(`../src/career/photos/wall.jpg`)} alt="" />
// 					</div>

// 				</section>
// 				<section className="prom-amar set-bg-dark">
				
// 					<div className="container">
// 						<h4>{props.home_page.promotion.text_prom}</h4>
// 					</div>

// 				</section>
// 				<section className="perc-amar set-bg-oran">
				
// 					<div className="container">
// 						<div className="titl2">
// 							<h3 className="set-bord-righ">The NUMBER</h3>
// 						</div>
						
// 						<div className="incr-numb">
							
// 							<div className="col-lg-3 col-md-3 col-sm-3 bord-hove transition-effect">
								
// 								<p className="counter">2650</p>
// 								<h4>{props.home_page.number.text1}</h4>
// 								<img src={require(`../src/career/images/empl.png`)} alt="" />

// 							</div>
// 							<div className="col-lg-3 col-md-3 col-sm-3 bord-hove transition-effect">
								
// 								<p className="counter">75</p>
// 								<h4>{props.home_page.number.text2}</h4>
// 								<img src={require(`../src/career/images/coff.png`)} alt="" />
								
// 							</div>
// 							<div className="col-lg-3 col-md-3 col-sm-3 bord-hove transition-effect">
								
// 								<p className="counter">65</p>
// 								<h4>{props.home_page.number.text3}</h4>
// 								<img src={require(`../src/career/images/offi.png`)} alt="" />

// 							</div>
// 							<div className="col-lg-3 col-md-3 col-sm-3 bord-hove transition-effect">
								
// 								<p className="counter">1</p>
// 								<h4>{props.home_page.number.text4}</h4>
// 								<img src={require(`../src/career/images/earth.png`)} alt="" />

// 							</div>
						
// 						</div>
// 					</div>

// 				</section>
// 				<section className="map-amar set-bg-white">
// 					<div className="container">
// 						<div className="titl-bold">
// 							<h3>Our Locations</h3>
// 						</div>
// 						<div className="img-wrap">
// 							<a href="" title="Discover all our locations!"></a>
// 							<a href=""><img title="Amaris map" alt="Amaris map" src={require(`../src/career/images/map.png`)} /></a>
// 						</div>
// 					</div>
// 				</section>	
// 			</div>
// 		)

// 	}
	

// }
// export default HomePage;

var AboutUs = function(props){
	return(
		<div>
			There is About Us
		</div>
	)
}

// class AboutUs extends React.Component{
// 	render(){

// 		return(
// 			<div>
// 				There is About Us
// 			</div>
// 		)
// 	}
// }

// export default AboutUs;

ReactDOM.render(<MasterPage />, document.getElementById('app'))

// ReactDOM.render((
// 	<Router history={browserHistory}>
// 		<Route path="/" component={MasterPage}>
// 			<IndexRoute component = {HomePage} />
// 			<Route path = "home" component = {HomePage} />
// 			<Route path = "about" component = {AboutUs} />
// 		</Route>
// 	</Router>
// ), document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}

