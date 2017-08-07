import Calendar from './calendar';
import Converter from './converter';
import ImageWidget from './imageWidget';

var Widgets = [ 
  {
    name: 'calendar',
    component: Calendar,
    props: null
  },
  {
    name: 'converter',
    component: Converter,
    props: null
  },
  {
    name: 'imageWidget',
    component: ImageWidget,
    props: null
  }
];

export default Widgets;