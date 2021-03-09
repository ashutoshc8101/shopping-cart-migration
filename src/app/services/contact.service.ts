import * as angular from 'angular'
angular
  .module("codecraft")
  .factory("ContactService", function(Contact, $rootScope, $q, toaster) {
    var self = {
      isDeleting: false,
      getPerson: function(email) {
        for (var i = 0; i < self.persons.length; i++) {
          var obj = self.persons[i];
          if (obj.email == email) {
            return obj;
          }
        }
      },
      page: 1,
      hasMore: true,
      isLoading: false,
      isSaving: false,
      persons: [],
      search: null,
      sorting: "name",
      ordering: "ASC",
      doSearch: function() {
        self.hasMore = true;
        self.page = 1;
        self.persons = [];
        self.loadContacts();
      },
      doOrder: function() {
        self.hasMore = true;
        self.page = 1;
        self.persons = [];
        self.loadContacts();
      },
      loadContacts: function() {
        if (self.hasMore && !self.isLoading) {
          self.isLoading = true;

          var params = {
            _page: self.page,
            _sort: self.sorting,
            _order: self.ordering,
            q: self.search ? self.search : ''
          };

          Contact.query(params).then(function(data) {
            angular.forEach(data, function(person) {
              self.persons.push(person);
            });

            if (data.length === 0) {
              self.hasMore = false;
            }
            self.isLoading = false;
          });
        }
      },
      loadMore: function() {
        if (self.hasMore && !self.isLoading) {
          self.page += 1;
          self.loadContacts();
        }
      },
      updateContact: function(person) {
        var d = $q.defer();
        self.isSaving = true;
        Contact.update(person).then(function() {
          self.isSaving = false;
          toaster.pop("success", "Updated " + person.name);
          d.resolve();
        });
        return d.promise;
      },
      removeContact: function(person) {
        var d = $q.defer();
        self.isDeleting = true;
        let name = person.name;
        Contact.remove(person)
        .then(function() {
          self.isDeleting = false;
          var index = self.persons.indexOf(person);
          self.persons.splice(index, 1);
          toaster.pop("success", "Deleted " + name);
          d.resolve();
        });
        return d.promise;
      },
      createContact: function(person) {
        var d = $q.defer();
        self.isSaving = true;
        Contact.save(person).then(function() {
          self.isSaving = false;
          self.hasMore = true;
          self.page = 1;
          self.persons = [];
          self.loadContacts();
          toaster.pop("success", "Created " + person.name);
          d.resolve();
        });
        return d.promise;
      }
    };

    self.loadContacts();

    return self;
  });
