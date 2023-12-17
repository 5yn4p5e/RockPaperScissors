import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {PlayingFieldComponent} from "./app/components/playing-field/playing-field.component";

bootstrapApplication(PlayingFieldComponent, appConfig)
    .catch((err) => console.error(err));
