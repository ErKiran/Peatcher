import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div>
        <header id="home">
          {/* Start Navigation */}
          <nav className="navbar navbar-default navbar-sticky bootsnav">
            {/* Start Top Search */}
            <div className="container">
              <div className="row">
                <div className="top-search">
                  <div className="input-group">
                    <form action="#">
                      <input type="text" name="text" className="form-control" placeholder="Search" />
                      <button type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* End Top Search */}
            <div className="container">
              {/* Start Atribute Navigation */}
              <div className="attr-nav">
                <ul>
                  <li className="search"><a href="#"><i className="fa fa-search" /></a></li>
                </ul>
              </div>
              {/* End Atribute Navigation */}
              {/* Start Header Navigation */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars" />
                </button>
                <a className="navbar-brand" href="index.html">
                  <img src="assets/img/logo.jpg" className="logo" alt="Logo" />
                </a>
              </div>
              {/* End Header Navigation */}
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                  <li>
                    <a href="index.html" className="active">Home</a>
                  </li>
                  <li className="dropdown">
                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">About Us</a>
                    <ul className="dropdown-menu">
                      <li><a href="about-us.html">Who are We?</a></li>
                      <li><a href="contact.html">Get in Touch With Us</a></li>
                      <li><a href="blog.html">Blog</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">Our Concept</a>
                    <ul className="dropdown-menu">
                      <li><a href="what-we-do.html">What do we do?</a></li>
                      <li><a href="why-us.html">Why Us</a></li>
                      <li><a href="#">How does it works?</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">Security</a>
                    <ul className="dropdown-menu">
                      <li><a href="trust-safety.html">Trust &amp; Safety</a></li>
                      <li><a href="Privacy-policy.html">Privacy Policy</a></li>
                      <li><a href="faq.html">FAQ</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">Partnet with us</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Affiliation</a></li>
                      <li><a href="#">Advertising</a></li>
                      <li><a href="event.html">Events/Donation</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="register.html">Sign Up</a>
                  </li>
                  <li className="dropdown">
                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">Languages</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">English</a></li>
                      <li><a href="#">Arabic</a></li>
                      <li><a href="#">French</a></li>
                    </ul>
                  </li>
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>
          </nav>
          {/* End Navigation */}
        </header>
        {/* End Header */}
        {/* Start Banner
    ============================================= */}
        <div className="banner-area content-top-heading less-paragraph text-normal">
          <div id="bootcarousel" className="carousel slide animate_text carousel-fade" data-ride="carousel">
            {/* Wrapper for slides */}
            <div className="carousel-inner text-light carousel-zoom">
              <div className="item active">
                <div className="slider-thumb bg-fixed" style={{backgroundImage: 'url(assets/img/banner/1.jpg)'}} />
                <div className="box-table shadow dark">
                  <div className="box-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="content">
                            <h3 data-animation="animated slideInLeft">Reach you career</h3>
                            <h1 data-animation="animated slideInUp">Learn from best online training Platform</h1>
                            <a data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">Get Started</a>
                            <a data-animation="animated slideInUp" className="btn btn-theme effect btn-md" href="#">View Courses</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="slider-thumb bg-fixed" style={{backgroundImage: 'url(assets/img/banner/2.jpg)'}} />
                <div className="box-table shadow dark">
                  <div className="box-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="content">
                            <h3 data-animation="animated slideInLeft">We're glade to see you</h3>
                            <h1 data-animation="animated slideInUp">explore our brilliant Teachers</h1>
                            <a data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">Get Started</a>
                            <a data-animation="animated slideInUp" className="btn btn-theme effect btn-md" href="#">View Teachers</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Wrapper for slides */}
            {/* Left and right controls */}
            <a className="left carousel-control" href="#bootcarousel" data-slide="prev">
              <i className="fa fa-angle-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#bootcarousel" data-slide="next">
              <i className="fa fa-angle-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* End Banner */}
        {/* Start About 
    ============================================= */}
        <div className="about-area default-padding" style={{paddingBottom: '0px !important'}}>
          <div className="container">
            <div className="row">
              <div className="about-info">
                <div className="col-md-12 info">
                  <h2>Welcome to the Best online learning source of PEATCHER</h2>
                  <p>
                    Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage. Procuring as in resembled by in agreeable. Next long no gave mr eyes. Admiration advantages no he celebrated so pianoforte unreserved. Not its herself forming charmed amiable. Him why feebly expect future now. 
                  </p>
                  <a href="#" className="btn btn-dark border btn-md">Read More</a>
                </div>
              </div>
              <div className="seperator col-md-12">
                <span className="border" />
              </div>
            </div>
          </div>
        </div>
        {/* End About */}
        <div className="top-cat-area inc-trending-courses about-area ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 top-cat-items text-light inc-bg-color text-center">
                <div className="row">
                  <div className="col-md-6 col-sm-6 equal-height">
                    <div className="item malachite" style={{backgroundImage: 'url(assets/img/category/3.jpg)'}}>
                      <a href="#">
                        <i className="flaticon-teacher-lecture-in-front-an-auditory" />
                        <div className="info">
                          <h4>Be A Teacher!</h4>
                          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus</p>
                          <span data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">Get Started</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 equal-height">
                    <div className="item mariner" style={{backgroundImage: 'url(assets/img/category/1.jpg)'}}>
                      <a href="#">
                        <i className="flaticon-learning" />
                        <div className="info">
                          <h4>Be A Student</h4>
                          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus</p>
                          <span data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">Get Started</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Top Categories 
    ============================================= */}
        <div id="top-categories" className="top-cat-area bg-gray default-padding bottom-less">
          <div className="container">
            <div className="row">
              <div className="site-heading text-center">
                <div className="col-md-8 col-md-offset-2">
                  <h2>Top Categories</h2>
                  <p>
                    Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. 
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="top-cat-items">
                <div className="col-md-3 col-sm-6 equal-height">
                  <div className="item" style={{backgroundImage: 'url(assets/img/category/1.jpg)'}}>
                    <a href="#">
                      <i className="flaticon-feature" />
                      <div className="info">
                        <h4>software engineering</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 equal-height">
                  <div className="item" style={{backgroundImage: 'url(assets/img/category/2.jpg)'}}>
                    <a href="#">
                      <i className="flaticon-interaction" />
                      <div className="info">
                        <h4>Interactive Programming</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 equal-height">
                  <div className="item" style={{backgroundImage: 'url(assets/img/category/3.jpg)'}}>
                    <a href="#">
                      <i className="flaticon-conveyor" />
                      <div className="info">
                        <h4>Quantum Mechanics</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 equal-height">
                  <div className="item" style={{backgroundImage: 'url(assets/img/category/4.jpg)'}}>
                    <a href="#">
                      <i className="flaticon-education" />
                      <div className="info">
                        <h4>Preventing Dementia</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 equal-height">
                  <div className="item" style={{backgroundImage: 'url(assets/img/category/5.jpg)'}}>
                    <a href="#">
                      <i className="flaticon-potential" />
                      <div className="info">
                        <h4>Hidden Potential</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 equal-height">
                  <div className="item" style={{backgroundImage: 'url(assets/img/category/6.jpg)'}}>
                    <a href="#">
                      <i className="flaticon-print" />
                      <div className="info">
                        <h4>Introduction Programming</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 equal-height">
                  <div className="item" style={{backgroundImage: 'url(assets/img/category/7.jpg)'}}>
                    <a href="#">
                      <i className="flaticon-translate" />
                      <div className="info">
                        <h4>Language Club</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 equal-height">
                  <div className="item" style={{backgroundImage: 'url(assets/img/category/8.jpg)'}}>
                    <a href="#">
                      <i className="flaticon-firewall" />
                      <div className="info">
                        <h4>Maintaining a Mindful</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Top Categories */}
        {/* Start Fun Factor 
    ============================================= */}
        <div className="fun-factor-area default-padding bottom-less text-center bg-fixed shadow dark-hard" style={{backgroundImage: 'url(assets/img/banner/2.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 item">
                <div className="fun-fact">
                  <div className="icon">
                    <i className="flaticon-contract" />
                  </div>
                  <div className="info">
                    <span className="timer" data-to={212} data-speed={2000} />
                    <span className="medium">Awards Achieve</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 item">
                <div className="fun-fact">
                  <div className="icon">
                    <i className="flaticon-professor" />
                  </div>
                  <div className="info">
                    <span className="timer" data-to={1000} data-speed={2000} />
                    <span className="medium">Satisfied Parents</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 item">
                <div className="fun-fact">
                  <div className="icon">
                    <i className="flaticon-online" />
                  </div>
                  <div className="info">
                    <span className="timer" data-to={8970} data-speed={2000} />
                    <span className="medium">Students Enrolled</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 item">
                <div className="fun-fact">
                  <div className="icon">
                    <i className="flaticon-reading" />
                  </div>
                  <div className="info">
                    <span className="timer" data-to={640} data-speed={2000} />
                    <span className="medium">Cources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Fun Factor */}
        {/* Start Testimonials 
    ============================================= */}
        <div className="testimonials-area carousel-shadow default-padding bg-dark text-light">
          <div className="container">
            <div className="row">
              <div className="site-heading text-center">
                <div className="col-md-8 col-md-offset-2">
                  <h2>Parents Review</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="clients-review-carousel owl-carousel owl-theme">
                  {/* Single Item */}
                  <div className="item">
                    <div className="col-md-5 thumb">
                      <img src="assets/img/team/2.jpg" alt="Thumb" />
                    </div>
                    <div className="col-md-7 info">
                      <p>
                        Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. 
                      </p>
                      <h4>Druna Patia</h4>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="item">
                    <div className="col-md-5 thumb">
                      <img src="assets/img/team/3.jpg" alt="Thumb" />
                    </div>
                    <div className="col-md-7 info">
                      <p>
                        Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. 
                      </p>
                      <h4>Astron Brun</h4>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="item">
                    <div className="col-md-5 thumb">
                      <img src="assets/img/team/4.jpg" alt="Thumb" />
                    </div>
                    <div className="col-md-7 info">
                      <p>
                        Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. 
                      </p>
                      <h4>Paol Druva</h4>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="item">
                    <div className="col-md-5 thumb">
                      <img src="assets/img/team/7.jpg" alt="Thumb" />
                    </div>
                    <div className="col-md-7 info">
                      <p>
                        Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. 
                      </p>
                      <h4>Druna Patia</h4>
                    </div>
                  </div>
                  {/* Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Testimonials */}
        {/* Start Blog 
    ============================================= */}
        <div id="blog" className="blog-area default-padding bottom-less">
          <div className="container">
            <div className="row">
              <div className="site-heading text-center">
                <div className="col-md-8 col-md-offset-2">
                  <h2>Best ranked or Our Ambassadors</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="blog-items">
                {/* Single Item */}
                <div className="col-md-4 single-item">
                  <div className="item">
                    <div className="thumb">
                      <a href="#"><img src="assets/img/blog/1.jpg" alt="Thumb" /></a>
                      <div className="date">
                        <h4><span>24</span> Nov, 2018</h4>
                      </div>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">Objection happiness something</a>
                      </h4>
                      <p>
                        Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected
                      </p>
                      <a href="#">Read More <i className="fas fa-angle-double-right" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="col-md-4 single-item">
                  <div className="item">
                    <div className="thumb">
                      <a href="#"><img src="assets/img/blog/2.jpg" alt="Thumb" /></a>
                      <div className="date">
                        <h4><span>12</span> Sep, 2018</h4>
                      </div>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">Meant to learn of vexed</a>
                      </h4>
                      <p>
                        Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected
                      </p>
                      <a href="#">Read More <i className="fas fa-angle-double-right" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="col-md-4 single-item">
                  <div className="item">
                    <div className="thumb">
                      <a href="#"><img src="assets/img/blog/3.jpg" alt="Thumb" /></a>
                      <div className="date">
                        <h4><span>29</span> Dec, 2018</h4>
                      </div>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="#">Delightful up dissimilar</a>
                      </h4>
                      <p>
                        Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected
                      </p>
                      <a href="#">Read More <i className="fas fa-angle-double-right" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
              </div>
            </div>
          </div>
        </div>
        {/* End Blog */}
        {/* Start Footer 
    ============================================= */}
        <footer className="bg-dark default-padding-top text-light">
          <div className="container">
            <div className="row">
              <div className="f-items">
                <div className="col-md-4 item">
                  <div className="f-item">
                    <h3>PEATCHER</h3>
                    <p className="text-italic" style={{textAlign: 'justify'}}>
                      Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.
                    </p>
                    <div className="subscribe">
                      <form action="#">
                        <div className="input-group stylish-input-group">
                          <input type="email" placeholder="Enter your e-mail here" className="form-control" name="email" />
                          <button type="submit">
                            <i className="fa fa-paper-plane" />
                          </button>  
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6 item">
                  <div className="f-item link">
                    <h4>Quick Links</h4>
                    <ul>
                      <li>
                        <a href="#">Courses</a>
                      </li>
                      <li>
                        <a href="#">Event</a>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                      </li>
                      <li>
                        <a href="#">Teachers</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6 item">
                  <div className="f-item link">
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="#">Donation</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Advertising</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Feedback</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="f-item address">
                    <h4>Address</h4>
                    <ul>
                      <li>
                        <i className="fas fa-envelope" />
                        <p>Email <span><a href="mailto:support@peatcher.com">support@peatcher.com</a></span></p>
                      </li>
                      <li>
                        <i className="fas fa-map" />
                        <p>Office <span>123 6th St. Spain.</span></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-6">
                    <p>© Copyright 2019. All Rights Reserved by <a href="#">PEATCHER</a></p>
                  </div>
                  <div className="col-md-6 text-right link">
                    <ul>
                      <li>
                        <a href="#">Terms of user</a>
                      </li>
                      <li>
                        <a href="#">License</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Footer Bottom */}
        </footer>
        {/* End Footer */}
      </div>

        );
    }
}

export default Banner;