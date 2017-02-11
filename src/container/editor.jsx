'use strict';

import React from 'react';
import Editbox from '../component/editbox/editbox.js';
import Displaybox from '../component/Displaybox/displaybox.js';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  updateText(text){
    // save to redux store
    this.setState({text});
  }

  render(){
    return (
      <div>
        <Editbox updateText={this.updateText.bind(this)}/>
        <Displaybox text={this.state.text}/>
      </div>
    );
  }
}

export default Editor;

