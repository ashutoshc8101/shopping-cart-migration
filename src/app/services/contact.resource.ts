import { Inject, Injectable } from "@angular/core";
import { downgradeInjectable, getAngularJSGlobal } from "@angular/upgrade/static";
import { HttpClient } from '@angular/common/http';
import * as angular from 'angular';
import { Person } from "./contact.service";


@Injectable({
  providedIn: 'root'
})
export class Contact {

  private apiRoot = 'http://localhost:3000/contacts/'

  constructor(
    @Inject(HttpClient) private httpClient: HttpClient
  ) { }

  query (params): Promise<Person[]> {
    return this.httpClient.get<Person[]>(this.apiRoot, { params }).toPromise();
  }

  get(id: number, params?: { string: string }) {
    return this.httpClient.get<Person>(this.apiRoot + '/' + id, { params }).toPromise();
  }

  save(data: Person) {
    return this.httpClient.post<Person>(this.apiRoot, data).toPromise();
  }

  update(data: Person) {
    return this.httpClient.put<Person>(this.apiRoot + '/' + data.id, data).toPromise();
  }

  remove(data: Person) {
    return this.httpClient.delete<Person>(this.apiRoot + '/' + data.id).toPromise();
  }
}

angular.module('codecraft')
  .service('Contact', downgradeInjectable(Contact))