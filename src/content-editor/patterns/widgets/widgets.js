import Calendar from './calendar';
import Converter from './converter';
import ImageWidget from './imageWidget';

var objectify = (name, component, icon, props) => {
  return {
    name: name,
    component: component,
    icon: icon ? icon : "",
    props: props ? props : {}
  };
};

var Widgets = [ 
  objectify('calendar', Calendar, null, { display : 'inline-block' }),
  objectify('converter', Converter, null, { display : 'inline-block' }),
  objectify('imageWidget', ImageWidget, null, { display : 'inline-block' })
];

export default Widgets;