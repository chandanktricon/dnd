import Calendar from './calendar';
import Converter from './converter';
import ImageWidget from './imageWidget';

var objectify = (name, component, props) => {
  return {
    name: name,
    component: component,
    props: props
  };
};

var Widgets = [ 
  objectify('calendar', Calendar, null),
  objectify('converter', Converter, null),
  objectify('imageWidget', ImageWidget, null)
];

export default Widgets;