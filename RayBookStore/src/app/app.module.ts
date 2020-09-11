import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InfoBoxComponent } from './info-box/info-box.component';
import { MatIconModule } from '@angular/material/icon';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { MatMenuModule } from '@angular/material/menu';
import { TitleBoxComponent } from './title-box/title-box.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavigationComponent],
})
export class AppModule {}
