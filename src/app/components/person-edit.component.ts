import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import { ContactService, Person } from '../services/contact.service';

@Component({
    selector: 'person-edit',
    templateUrl: './person-edit.component.html'
})
export class PersonEditComponent {
    person: Person;
    constructor(
        private contactService: ContactService,
    ) { }

    ngOnInit(): void {
        this.person = this.contactService.getPerson(/*Router need here*/);
    }

    save(): void {
        this.contactService.updateContact(this.person).then(() => {
            // Router redirect
        })
    }

}

angular.module('codecraft', 
    downgradeComponent({ component: PersonEditComponent }));
