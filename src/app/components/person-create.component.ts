import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'person-create-controller',
    templateUrl: './person-create.component.html'
})
export class PersonCreateComponent {

    person : object = {}

    constructor(
        private contactService: ContactService
    ) { }

        save(): void {
            this.contactService.createContact(this.person).then(() => {
                // direct router to go different page
            });
        }

}

angular.module('codecraft',
    downgradeComponent({ component: PersonCreateComponent }))
