import { Inject, Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';
import * as angular from 'angular'
import { ToastrService } from 'ngx-toastr';
import { Contact } from './contact.resource';

export interface Person {
    id: number,
    createdTs: string,
    updatedTs: string,
    name: string,
    email: string,
    sex: string,
    birthdate: string,
    phonenumber: string,
    address: string,
    city: string,
    country: string,
    photo: string,
    favorite: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  isDeleting : boolean = false;
  page: number = 1;
  hasMore: boolean = true;
  isLoading: boolean = false;
  isSaving: boolean = false;
  persons: Person[] = []
  search: string = ''
  sorting: string = 'name';
  ordering: string = 'ASC';

  constructor(
    @Inject(Contact) private contact: Contact,
    @Inject(ToastrService) private toastr: ToastrService
  ) {
    this.loadContacts()
   }


  getPerson(email: string): object {
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i].email === email) {
        return this.persons[i];
      }
    }
  }

  doSearch(): void {
    this.hasMore = true;
    this.page = 1;
    this.persons = [];
    this.loadContacts();
  }

  loadContacts(): void {
    if ( this.hasMore && !this.isLoading ) {
      this.isLoading = true;

      let params = {
        _page : this.page,
        _sort : this.sorting,
        _order : this.ordering,
        q : this.search
      };

      this.contact.query(params).then((data: []) => {
        data.forEach(person => {
          this.persons.push(person);
        });

        if (data.length === 0) {
          this.hasMore = false;
        }

        this.isLoading = false;
      });
    }
  }

  loadMore(): void {
    if (this.hasMore && !this.isLoading) {
      this.page += 1;
      this.loadContacts();
    }
  }

  updateContact(person: Person): Promise<void> {
    this.isSaving = true;
    return new Promise((resolve, reject) => {
      this.contact.update(person).then(() => {
        this.isSaving = false;
        this.toastr.success('Updated ' + person.name);
        resolve();
      })
    });
  }

  removeContact(person: Person): Promise<void> {
    this.isDeleting = true;
    let name = person.name;
    return new Promise((resolve, reject) => {
      this.contact.remove(person)
      .then(() => {
        this.isDeleting = false;
        let index = this.persons.indexOf(person);
        this.persons.splice(index, 1);
        this.toastr.success("Removed " + name);
        resolve();
      });
    });
  }

  createContact(person): Promise<void> {
    this.isSaving = true;
    return new Promise((resolve, reject) => {
      this.contact.save(person).then(() => {
        this.isSaving = false;
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
        this.toastr.success('Created ' + person.name);
        resolve();
      });
    });
  }

}

angular.module('codecraft')
  .factory('ContactService', downgradeInjectable(ContactService));
