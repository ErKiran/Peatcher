import React, { Component } from 'react';

class TopCategories extends Component {
    render() {
        return (
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
    
        );
    }
}

export default TopCategories;