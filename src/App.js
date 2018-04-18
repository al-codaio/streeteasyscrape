import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import $ from 'jquery';

class App extends Component {
  render() {
    
    // axios.get('https://streeteasy.com/building/172-madison-avenue/4b')
    // .then((response) => {
    //   if(response.status === 200) {
    //     const html = response.data;
    //     console.log(response.data);
    //     const $ = cheerio.load(html); 
    //   }
    // }, (error) => console.log(error) );

    // var seurl = 'https://streeteasy.com/building/172-madison-avenue/4b';
    var seurl = 'https://www.trulia.com/p/ny/new-york/172-madison-ave-7a-new-york-ny-10016--2174489677';

    $.getJSON('https://allorigins.me/get?url=' + encodeURIComponent(seurl) + '&callback=?', function(data){
      var html = data.contents;
      console.log(html);

    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
