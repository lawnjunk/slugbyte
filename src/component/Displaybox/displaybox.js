import React from 'react';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';

let CodeColor = (props) => {
  console.log('props', props);
  return <Highlight className={'wat'}>
    { props.literal }
  </Highlight>
} 

let Displaybox = ({text}) => {
  return (
    <div>
      <ReactMarkdown source={text} renderers={
        {CodeBlock: CodeColor}
      }/>
    </div>
  );
}

export default Displaybox;
