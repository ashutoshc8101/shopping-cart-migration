import { Component, Output, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { Contact } from '../services/contact.resource';

@Component({
    selector: 'service-bootstrap',
    template: ''
})
export class ServiceBootstrapComponent implements AfterViewInit {
    @Output() initialized: EventEmitter<void> = new EventEmitter();

    ngAfterViewInit(): void {
        this.initialized.emit();
    }
}