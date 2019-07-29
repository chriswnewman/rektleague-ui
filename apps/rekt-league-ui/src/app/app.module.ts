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
import { PlayersOverviewComponent } from './players-overview/players-overview.component';
import { TeamsOverviewComponent } from './teams-overview/teams-overview.component';
import { ChampionsOverviewComponent } from './champions-overview/champions-overview.component';
import { AboutComponent } from './about/about.component';
import { SeasonHeaderComponent } from './season-header/season-header.component';
import { SeasonGraphsComponent } from './season-graphs/season-graphs.component';
import { TableComponent } from './table/table.component';
import { BsColMeasurementModule } from '@rekt/bs-col-measurement';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderBarComponent,
    MainNavComponent,
    SeasonOverviewComponent,
    SeasonSelectorComponent,
    SideNavContentComponent,
    PlayersOverviewComponent,
    TeamsOverviewComponent,
    ChampionsOverviewComponent,
    AboutComponent,
    SeasonHeaderComponent,
    SeasonGraphsComponent,
    TableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: 'season/:seasonId', component: SeasonOverviewComponent },
        { path: 'teams', component: TeamsOverviewComponent },
        { path: 'players', component: PlayersOverviewComponent },
        { path: 'champions', component: ChampionsOverviewComponent },
        { path: 'graphs', component: SeasonGraphsComponent },
        { path: 'about', component: AboutComponent },
        { path: '', pathMatch: 'full', redirectTo: '/season/4' }
      ],
      { initialNavigation: 'enabled', useHash: true }
    ),
    AngularMaterialModule,
    FormsModule,
    BsColMeasurementModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
