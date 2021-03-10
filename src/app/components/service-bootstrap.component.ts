import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';

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
