import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule,provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom([
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{
      dataEncapsulation:false,
      delay:1000,}),
      HttpClientModule,HttpClientModule
  ])]
};
