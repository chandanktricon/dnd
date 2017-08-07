import React, { Component } from 'react';

var reactify = (html) => {
  return React.createClass({
    render() {
      return <div dangerouslySetInnerHTML={{__html: html}}></div>;
    }
  });
}

var Elements = [ 
  {
    name: 'heading-large',
    component: reactify('<h1>Heading Large</h1>'),
    props: null
  },
  {
    name: 'heading',
    component: reactify('<h3>Heading</h3>'),
    props: null
  },
  {
    name: 'paragraph',
    component: reactify('<p>Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.</p>'),
    props: null
  }
];

export default Elements;