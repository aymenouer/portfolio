import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { inject as injectVercelAnalytics } from '@vercel/analytics';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Vercel Web Analytics (cookieless page views). Its auto-detection relies on process.env, which Angular
// doesn't provide, so the mode is set explicitly: dev builds only log to the console, production builds track.
injectVercelAnalytics({ mode: isDevMode() ? 'development' : 'production' });

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
