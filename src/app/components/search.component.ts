import { Component, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {

    constructor(
        @Inject(ContactService) private contactService: ContactService
    ) { }

    loadMore(): void {
      this.contactService.loadMore();
    };
}

angular.module('codecraft')
    .directive('search', downgradeComponent({ component: SearchComponent }));