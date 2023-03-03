/**
 * Configure the specifc icons to import from the Font Awesome library for use
 * within the application. Icons MUST be added to the library below to work.
 *
 * How to use an imported icon in a template:
 * <font-awesome icon="fa-solid fa-user-secret" />
 **/
import { library } from '@fortawesome/fontawesome-svg-core';

/* Import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

/* Edit array to add icons to the library. */
library.add(...[faUserSecret]);
