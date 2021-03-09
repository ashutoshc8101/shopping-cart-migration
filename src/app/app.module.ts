import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";
import { ServiceBootstrapComponent } from "./components/service-bootstrap.component";
import { Contact } from "./services/contact.resource";
import { ContactService } from "./services/contact.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ],
    declarations: [
        ServiceBootstrapComponent,
    ],
    entryComponents: [
        ServiceBootstrapComponent,
    ],
    exports: [
        ServiceBootstrapComponent,
    ],
    providers: [
        Contact,
        ContactService
    ]
})
export class AppModule {

    ngDoBootstrap(): void { }

}