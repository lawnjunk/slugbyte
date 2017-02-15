'use strict';

require('./_markdown-editor.scss');

import React from 'react';
import BackArrow from '../back-arrow';
import Editor from '../../container/editor';

let MarkdownEditor = (props) => (
  <div className="markdown-editor">
    <BackArrow path={props.location.query.backpath || '/random'} />
    <Editor />
  </div>
)

export default MarkdownEditor;
