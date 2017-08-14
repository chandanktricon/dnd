import Calendar from './calendar';
import Converter from './converter';
import ImageWidget from './imageWidget';

var objectify = (name, component, props) => {
  return {
    name: name,
    component: component,
    props: props ? props : {}
  };
};

var Widgets = [ 
  objectify('calendar', Calendar, { display : 'inline-block' }),
  objectify('converter', Converter, { display : 'inline-block' }),
  objectify('imageWidget', ImageWidget, { display : 'inline-block' })
];

export default Widgets;