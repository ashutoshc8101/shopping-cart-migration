
require('./polyfills')
import * as angular from 'angular';

import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeComponent, downgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app.module';
import { environment } from './environments/environment';
import { ServiceBootstrapComponent } from './components/service-bootstrap.component';

if (environment.production) {
  enableProdMode();
}

const bootstrapFn = (extraProviders: StaticProvider[]) => {
  const platformRef = platformBrowserDynamic(extraProviders);
  return platformRef.bootstrapModule(AppModule);
};
const downgradedModule = downgradeModule(bootstrapFn);

angular.module('codecraft').requires.push(downgradedModule);

angular.module('codecraft').directive('serviceBootstrap', downgradeComponent({ component: ServiceBootstrapComponent }));

