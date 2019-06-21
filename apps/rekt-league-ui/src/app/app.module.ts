import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderBarComponent } from './app-header-bar/app-header-bar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SeasonOverviewComponent } from './season-overview/season-overview.component';

@NgModule({
  declarations: [AppComponent, AppHeaderBarComponent, MainNavComponent, SeasonOverviewComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: SeasonOverviewComponent },
    ], { initialNavigation: 'enabled', useHash: true }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
