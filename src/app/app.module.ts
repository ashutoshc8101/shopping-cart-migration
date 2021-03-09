import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceBootstrapComponent } from "./components/service-bootstrap.component";
import { Contact } from "./services/contact.resource";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
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
        Contact
    ]
})
export class AppModule {

    ngDoBootstrap(): void { }

}