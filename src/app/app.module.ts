import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
import { API_ENDPOINT } from './constants';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
//import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'mwl-homepage'
    }),
    // ServiceWorkerModule.register('/ngsw-worker.js', {
    //   enabled: environment.production
    // }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // CollapseModule.forRoot(),
    // TooltipModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: API_ENDPOINT, useValue: 'https://api.mudem.me' }]
})
export class AppModule {}
