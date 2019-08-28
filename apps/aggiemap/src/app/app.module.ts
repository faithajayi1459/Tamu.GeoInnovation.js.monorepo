import { NgModule } from '@angular/core';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppRoutingModule } from './modules/routing/app-routing.module';

import { NotificationModule, NotificationEvents, NotificationProperties } from '@tamu-gisc/common/ngx/ui/notification';
import { EVENTS } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  imports: [AppRoutingModule, Angulartics2Module.forRoot(), NotificationModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: NotificationEvents, useValue: EVENTS }]
})
export class AppModule {}