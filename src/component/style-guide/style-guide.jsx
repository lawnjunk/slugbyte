import React from 'react';
import Editor from '../../container/editor';
import BackArrow from '../back-arrow';
import NavbarContainer from '../../container/navbar';
import SmartHeading from '../smart-heading';

const StyleGuide = () => {
  return (
    <div>
      <BackArrow path='/random' />
      <Editor />
      <h1> <a href="#"> wat </a> </h1>
      <SmartHeading level={1}><a href="#">Style Pratice G </a> </SmartHeading>
      <SmartHeading level={2}><a href="#">Style Pratice H </a> </SmartHeading>
      <SmartHeading level={3}><a href="#">Style Pratice I </a> </SmartHeading>
      <SmartHeading level={4}><a href="#">Style Pratice J </a> </SmartHeading>
      <SmartHeading level={5}><a href="#">Style Pratice K </a> </SmartHeading>
      <SmartHeading level={6}> <a href="#"><strong> Style Pratice L</strong> </a> </SmartHeading>
      <SmartHeading level={1}> Style Pratice A </SmartHeading>
      <SmartHeading level={2}> Style Pratice B </SmartHeading>
      <SmartHeading level={3}> Style Pratice C </SmartHeading>
      <SmartHeading level={4}> Style Pratice D </SmartHeading>
      <SmartHeading level={5}> Style Pratice E </SmartHeading>
      <SmartHeading level={6}> Style Pratice F </SmartHeading>
      <blockquote> this is a blockquote </blockquote>
      <p> strong: <strong> hello world </strong> </p>
      <p> em: <em> hello world </em> </p>
      <p> a: <a href="#">hello world</a></p>

      <p className="aling-left"><strong> className align-left </strong> </p>
      <p className="aling-left"> success className: <span className="success"> hello world </span> </p>
      <p className="align-center"><strong > className align-center</strong> </p>
      <p className="align-center"> error className: <span className="error"> hello world </span> </p>
      <p className="align-right"><strong> className align-right</strong> </p>
      <p className="align-right"> primary className: <span className="primary"> hello world </span> </p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum neque ac dui fringilla pellentesque sed et lectus. Aliquam fermentum erat in leo auctor porta. Fusce maximus leo vel augue laoreet rutrum. Nullam id ipsum et velit porta condimentum nec a eros. Suspendisse pulvinar, felis ac egestas egestas, quam orci tristique tortor, id pellentesque magna eros a odio. Aenean pulvinar tortor vel ligula molestie bibendum.</p> 

      <ul>
        <li> a good point </li>
        <li> a good point </li>
        <ol>
          <li> a point </li>
          <li> a point </li>
        </ol>
        <li> a good point </li>
        <li> a good point </li>
        <ul>
          <li> a point </li>
          <li> a point </li>
        </ul>
      </ul>

      <ol> 
        <li> vary organized </li>
        <li> vary organized </li>
        <ul>
          <li> a point </li>
          <li> a point </li>
        </ul>
        <li> vary organized </li>
        <li> vary organized </li>
        <ol>
          <li> a point </li>
          <li> a point </li>
        </ol>
      </ol>

    <pre> {`
     __________ 
    < pre text >
     ---------- 
            \\   ^__^
             \\  (oo)\\_______
                (__)\\       )\\/\\
                    ||----w |
                    ||     ||
    `} </pre>

      <hr />

      <form> 
          <label> this label </label>
          <select>
            <option> its all the same </option>
            <option> its all the same </option>
            <option> its all the same </option>
            <option> its all the same </option>
          </select> 
          <button> button in form </button>
          <input type="submit" value="input type sumbit" />
      </form>

      <button> button out of form </button>
      <button className="success"> success button  </button>
      <button className="error"> error button  </button>
      <button className="primary"> primary button  </button>

      <p className="bubble success"> success bubble </p>
      <p className="bubble error"> error bubble </p>
      <p className="bubble primary"> primary bubble </p>

    </div>
  );
};

export default StyleGuide;
