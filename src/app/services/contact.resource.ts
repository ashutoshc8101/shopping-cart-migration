import { Inject, Injectable } from "@angular/core";
import { downgradeInjectable, getAngularJSGlobal } from "@angular/upgrade/static";
import { HttpClient } from '@angular/common/http';
import * as angular from 'angular';


@Injectable({
  providedIn: 'root'
})
export class Contact {

  private apiRoot = 'http://localhost:3000/contacts/'

  constructor(
    @Inject(HttpClient) private httpClient: HttpClient
  ) { }

  query (params) {
    return this.httpClient.get(this.apiRoot, { params }).toPromise();
  }

  get(id, params?: { string: string }) {
    return this.httpClient.get(this.apiRoot + '/' + id, { params }).toPromise();
  }

  save(data: any) {
    return this.httpClient.post(this.apiRoot, data).toPromise();
  }

  update(data: any) {
    return this.httpClient.put(this.apiRoot + '/' + data.id, data).toPromise();
  }

  remove(data: any) {
    return this.httpClient.delete(this.apiRoot + '/' + data.id).toPromise();
  }
}

angular.module('codecraft')
  .service('Contact', downgradeInjectable(Contact))