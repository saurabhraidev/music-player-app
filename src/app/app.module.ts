import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayerComponent } from './player/player.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppMusicInfoComponent } from './app-music-info/app-music-info.component';
import { ShareMenuSidebarComponent } from './share-menu-sidebar/share-menu-sidebar.component';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerMenuButtonsComponent } from './player-menu-buttons/player-menu-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent,
    AppHomeComponent,
    AppMusicInfoComponent,
    ShareMenuSidebarComponent,
    PlayerMenuButtonsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MenuModule, MenubarModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
