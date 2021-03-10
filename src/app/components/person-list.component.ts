import { Component, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular'
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'person-list',
    templateUrl: './person-list.component.html'
})
export class PersonListComponent {
    constructor(
        @Inject(ContactService) private contactService: ContactService
    ) { }
}

angular.module('codecraft').directive('PersonList', 
    downgradeComponent({ component: PersonListComponent }))
