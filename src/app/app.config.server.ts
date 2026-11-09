import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { RenderMode, provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';

/** Build-time only: the single page is prerendered to static HTML so crawlers and link previews see the content. */
export const serverConfig: ApplicationConfig = mergeApplicationConfig(appConfig, {
  providers: [provideServerRendering(withRoutes([{ path: '**', renderMode: RenderMode.Prerender }]))],
});
