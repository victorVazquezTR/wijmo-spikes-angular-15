import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {
  SafButton,
  SafToolbar,
  SafIcon,
  SafCheckbox,
  SafPagination,
  SafStatus,
  SafTooltip,
} from '@saffron/core-components';

SafButton();
SafToolbar();
SafIcon();
SafCheckbox();
SafPagination();
SafStatus();
SafTooltip();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
