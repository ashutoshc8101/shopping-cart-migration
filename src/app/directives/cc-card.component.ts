import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import { ContactService, Person } from '../services/contact.service';

@Component({
  selector: 'cc-card',
  templateUrl: './cc-card.component.html'
})
export class CCcardComponent {
  @Input() user: Person;
  @Output() updateUser: EventEmitter<void> = new EventEmitter();
  isDeleting: boolean = false;
  
  constructor(
    @Inject(ContactService) private contactService: ContactService
  ) { }

  deleteUser(): void {
    this.isDeleting = false;
    this.contactService.removeContact(this.user).then(() => {
      this.isDeleting = false;
      this.updateUser.emit();
    });
  }
}

angular.module('codecraft')
  .directive('ccCard', 
  downgradeComponent({ component : CCcardComponent }))
// angular
//   .module("codecraft")
//   .directive("ccCard", function() {
//     return {
//       restrict: "AE",
//       templateUrl: "../templates/card.html",
//       scope: {
//         user: "="
//       },
//       controller: function($scope, ContactService) {
//         $scope.isDeleting = false;
//         $scope.deleteUser = function() {
//           $scope.isDeleting = true;
//           ContactService.removeContact($scope.user).then(function() {
//             $scope.isDeleting = false;
//             $scope.$apply();
//           });
//         };
//       }
//     };
//   });