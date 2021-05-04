import React from 'react';
import ReactDOM from 'react-dom';
import SampleWidget from './components/sample';

let init = null;

export default {
  config: (config) =>{
      init = config;
  },
  new: () => {
    return {
      render: () => {
        ReactDOM.render(<SampleWidget
        />, document.querySelector(init.selector));
      },
      unmount(){
        ReactDOM.unmountComponentAtNode(document.querySelector(init.selector)); 
      },
    }
  }
}