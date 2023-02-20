import { library } from '@fortawesome/fontawesome-svg-core';

/* Import specific icons */
import { faCoffee, faUserSecret } from '@fortawesome/free-solid-svg-icons';


/* Edit array to add icons to the library. */
library.add(...[
  faUserSecret,
  faCoffee
]);

/** 
 * Usage in template
 * <font-awesome icon="fa-solid fa-coffee" />
 **/