import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'cc-spinner',
  templateUrl: './cc-spinner.component.html'
})
export class CcSpinnerComponent {

  @Input() isLoading: boolean;
  @Output() updateIsLoading: EventEmitter<void> = new EventEmitter();
  @Input() message: string;

  constructor(
    @Inject(NgxSpinnerService) private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
  }

  ngOnChanges(): void {
    if(this.isLoading) {
      this.spinner.hide();
    }
  }

}

angular.module('codecraft').directive('ccSpinner',
  downgradeComponent({ component: CcSpinnerComponent }));