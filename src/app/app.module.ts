import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamMemberListComponent } from './team-member/team-member-list/team-member-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FolderComponent } from './folder/folder.component';
import { FolderListComponent } from './folder/folder-list/folder-list.component';
import { ActionsComponent } from './actions/actions.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamMemberComponent,
    TeamMemberListComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    QuicklinksComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    FolderComponent,
    FolderListComponent,
    ActionsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
