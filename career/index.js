import 'bootstrap/dist/js/bootstrap';

require('../src/style/career/bundle.sass');

require('../public/fonts/segoeui/font.sass');
require('../public/fonts/segoeuib/font.sass');

var React = require('react');
var ReactDOM = require('react-dom');

import Logo from '../src/career/img';

const master_data = require('../career/master_page/data');

var formatDate = function(date) {
  return date.toLocaleDateString();
}
var MasterPage = function(props){

	return (
		<div>
			<MenuLeft master_page={master_data.master_page}/>
			<Header master_page={master_data.master_page}/>
			<Footer master_page={master_data.master_page}/>
		</div>
	)

}

var MenuLeft = function(props){
	return(
		<div className="menu-left">
			<a className="menu-btn indx-gene acti-hove">
				<i className="f{props.master_page.header.top_head.text1}" aria-hidden="true"></i>
				<i className="{props.master_page.header.top_head.text2} hide-element" aria-hidden="true"></i>
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
									${Logo}
								</a>
								
							</div>
						
						</div>
						
						<div className="only-righ for-desk">
							
							<a className="the-butt btn-cont cont-form-btn">Contact</a>
							<a className="the-butt btn-appl" href="http://amaris.com/amaris-careers-page/home/home-page-v2">apply</a>
						
						</div>

					</div>

				</div>

			</header>
			<div className="sect-amar acti-hove icon-menu vert-anim amar-nav">
				<ul>

					<li>
						<a href="">
							<label for="">{props.master_page.header.navigate.nav1}</label>
						</a>
					</li>
					<li>
						<a href="">
							<label for="">{props.master_page.header.navigate.nav2}</label>
						</a>
					</li>
					<li>
						<a href="">
							<label for="">{props.master_page.header.navigate.nav3}</label>
						</a>
					</li>
					<li>
						<a href="">
							<label for="">{props.master_page.header.navigate.nav4}</label>
						</a>
					</li>
				</ul>
				<div className="clear"></div>
			</div>
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
								<li><a href=""><img src="{props.master_page.social_menu.social1}" alt="" /></a></li>
								<li><a href=""><img src="{props.master_page.social_menu.social2}" alt="" /></a></li>
								<li><a href=""><img src="{props.master_page.social_menu.social3}" alt="" /></a></li>
								<li><a href=""><img src="{props.master_page.social_menu.social4}" alt="" /></a></li>
								<li><a href=""><img src="{props.master_page.social_menu.social5}" alt="" /></a></li>
								<li><a href=""><img src="{props.master_page.social_menu.social6}" alt="" /></a></li>
								<li><a href=""><img src="{props.master_page.social_menu.social7}" alt="" /></a></li>
							</ul>

						</div>
					</div>
				</div>

			</footer>

		</div>
	)
}

ReactDOM.render(<MasterPage />, document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}

