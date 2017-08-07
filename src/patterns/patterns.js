import Widgets from './widgets/widgets';
import Elements from './elements';

export default { 
  elements : Elements, 
  widgets : Widgets, 
  all : Elements.concat(Widgets)
};