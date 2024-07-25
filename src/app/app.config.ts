import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-798c0","appId":"1:328302814841:web:7f87501133526f840816a8","storageBucket":"danotes-798c0.appspot.com","apiKey":"AIzaSyBce6wUItYG8A-sjdkw6GUt5Hl39ZWBbfo","authDomain":"danotes-798c0.firebaseapp.com","messagingSenderId":"328302814841"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
