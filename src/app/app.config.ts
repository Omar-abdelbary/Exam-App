import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { loadingScreenInterceptor } from './core/interceptors/loading-screen.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withInMemoryScrolling()), provideClientHydration() ,

    provideAnimations() ,
    provideHttpClient(withFetch() , withInterceptors([headerInterceptor , errorsInterceptor , loadingScreenInterceptor]) )  ,
  ]
};
