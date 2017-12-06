import { AppConfig } from './AppConfigInterface';
import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export let appConfig: AppConfig = { name: 'hello world from config' };

