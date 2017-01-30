import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { IndustryPagePage } from '../pages/industry-page/industry-page';
import { ServicePagePage } from '../pages/service-page/service-page';
import { ContactUsPagePage } from '../pages/contact-us-page/contact-us-page';
import { ListPage } from '../pages/list/list';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    IndustryPagePage,
    ServicePagePage,
    ContactUsPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    IndustryPagePage,
    ServicePagePage,
    ContactUsPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
