import React from 'react';

var reactify = (html) => {
  return React.createClass({
    render() {
      return <div dangerouslySetInnerHTML={{__html: html}}></div>;
    }
  });
}

var objectify = (name, html, icon, props) => {
  return {
    name: name,
    component: html,
    icon: icon? icon : "",
    props: props? props : {}
  };
};

var Elements = [ 
  objectify('heading-XL', reactify('<h1>Heading XL</h1>')),
  objectify('heading-L', reactify('<h2>Heading L</h2>')),
  objectify('heading', reactify('<h3>Heading</h3>')),
  objectify('heading-M', reactify('<h4>Heading M</h4>')),
  objectify('heading-S', reactify('<h5>Heading S</h5>')),
  objectify('heading-XS', reactify('<h6>Heading XS</h6>')),
  objectify('paragraph', reactify('<p>On January 20, 2014, Subodh Varma reporting for The Economic Times indicated that not only had Wikipedia growth flattened but that it has lost nearly 10 per cent of its page-views last year. Thats a decline of about 2 billion between December 2012 and December 2013. Its most popular versions are leading the slide: page-views of the English Wikipedia declined by 12 per cent, those of German version slid by 17 per cent and the Japanese version lost 9 per cent.[61] Varma added that, While Wikipediaobjectifys managers think that this could be due to errors in counting, other experts feel that Googleobjectifys Knowledge Graphs project launched last year may be gobbling up Wikipedia users.[61] When contacted on this matter, Clay Shirky, associate professor at New York University and fellow at Harvardobjectifys Berkman Center for Internet and Security indicated that he suspected much of the page view decline was due to Knowledge Graphs, stating, If you can get your question answered from the search page, you donobjectifyt need to click [any further].[61] By the end of December 2016, Wikipedia was ranked fifth in the most popular websites globally.[62]</p>'),
  null, { display : 'inline-block' }),
];

export default Elements;