'use strict';

import React from 'react';
import Editbox from '../../component/editbox/editbox.js';
import Displaybox from '../../component/displaybox/displaybox.js';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  updateText(text){
    this.setState({text});
  }

  render(){
    return (
      <div>
        <Displaybox text={this.state.text}/>
        <Editbox updateText={this.updateText.bind(this)}/>
      </div>
    );
  }
}

export default Editor;

