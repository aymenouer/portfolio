import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { serverConfig } from './app/app.config.server';

export default (context: BootstrapContext) => bootstrapApplication(AppComponent, serverConfig, context);
