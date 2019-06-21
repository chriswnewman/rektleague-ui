import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderBarComponent } from './app-header-bar/app-header-bar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SeasonOverviewComponent } from './season-overview/season-overview.component';
import { SeasonSelectorComponent } from './season-selector/season-selector.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';

@NgModule({
  declarations: [AppComponent, AppHeaderBarComponent, MainNavComponent, SeasonOverviewComponent, SeasonSelectorComponent, SideNavContentComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'season', component: SeasonOverviewComponent },
      { path: 'teams', component: SeasonOverviewComponent },
      { path: 'players', component: SeasonOverviewComponent },
      { path: 'champions', component: SeasonOverviewComponent },
      { path: 'graphs', component: SeasonOverviewComponent },
      { path: 'about', component: SeasonOverviewComponent },
      { path: '', pathMatch: 'full', redirectTo: 'season' }
    ], { initialNavigation: 'enabled', useHash: true }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
