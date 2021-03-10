import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";
import { ServiceBootstrapComponent } from "./components/service-bootstrap.component";
import { Contact } from "./services/contact.resource";
import { ContactService } from "./services/contact.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CCcardComponent } from "./components/cc-card.component";
import { defaultImagePipe } from "./filters/default-image.filter";
import { CcSpinnerComponent } from "./components/cc-spinner.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxSpinnerModule,
    ],
    declarations: [
        ServiceBootstrapComponent,
        CCcardComponent,
        CcSpinnerComponent,
        defaultImagePipe,
    ],
    entryComponents: [
        ServiceBootstrapComponent,
        CCcardComponent,
        CcSpinnerComponent,
    ],
    exports: [
        ServiceBootstrapComponent,
        CCcardComponent,
        CcSpinnerComponent,
    ],
    providers: [
        Contact,
        ContactService
    ]
})
export class AppModule {

    ngDoBootstrap(): void { }

}