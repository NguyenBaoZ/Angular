// **** TS module **** //
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// call func to execute bootstrap application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
