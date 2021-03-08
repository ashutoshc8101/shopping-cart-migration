//@require "./**/*.html" 
require('bootstrap/dist/css/bootstrap.min.css');
require('../css/paper.css')
require('bootstrap-additions/dist/bootstrap-additions.min.css')
require('angularjs-toaster/toaster.min.css')
require('ladda/dist/ladda-themeless.min.css');
require('font-awesome/css/font-awesome.min.css');
require('../css/main.scss');

import * as angular from 'angular';
require('angular-resource');
require('angular-animate');

require('ng-infinite-scroll/build/ng-infinite-scroll.min.js');
require('spin.js');
require('angular-spinner');
require('angular-auto-validate/dist/jcs-auto-validate');
require('ladda/js/ladda');
require('angular-ladda');
require('angular-strap');
require('angularjs-toaster');
require('@uirouter/angularjs/release/angular-ui-router.min.js')

angular
  .module("codecraft", [
    "ngResource",
    "infinite-scroll",
    "angularSpinner",
    "jcs-autoValidate",
    "angular-ladda",
    "mgcrea.ngStrap",
    "toaster",
    "ngAnimate",
    "ui.router"
  ])
  .config(function(
    $httpProvider,
    $resourceProvider,
    laddaProvider,
    $datepickerProvider
  ) {
    laddaProvider.setOption({
      style: "expand-right"
    });
    angular.extend($datepickerProvider.defaults, {
      dateFormat: "d/M/yyyy",
      autoclose: true
    });
  });


require('./controllers')
require('./directives')
require('./filters')
require('./services')
require('./app.routes')


// Angular section

import('./polyfills')

import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrapFn = (extraProviders: StaticProvider[]) => {
  const platformRef = platformBrowserDynamic(extraProviders);
  return platformRef.bootstrapModule(AppModule);
};
const downgradedModule = downgradeModule(bootstrapFn);

angular.module('codecraft').requires.push(downgradedModule);