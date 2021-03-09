import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";
import { ServiceBootstrapComponent } from "./components/service-bootstrap.component";
import { Contact } from "./services/contact.resource";
import { ContactService } from "./services/contact.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CCcardComponent } from "./directives/cc-card.component";
import { defaultImagePipe } from "./filters/default-image.filter";

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
        CCcardComponent,
        defaultImagePipe,
    ],
    entryComponents: [
        ServiceBootstrapComponent,
        CCcardComponent
    ],
    exports: [
        ServiceBootstrapComponent,
        CCcardComponent
    ],
    providers: [
        Contact,
        ContactService
    ]
})
export class AppModule {

    ngDoBootstrap(): void { }

}