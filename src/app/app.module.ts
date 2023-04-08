import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayerComponent } from './player/player.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppMusicInfoComponent } from './app-music-info/app-music-info.component';
import { ShareMenuSidebarComponent } from './share-menu-sidebar/share-menu-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent,
    AppHomeComponent,
    AppMusicInfoComponent,
    ShareMenuSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
