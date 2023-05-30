import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TeamMemberListComponent } from './team-member/team-member-list/team-member-list.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { FolderListComponent } from './folder/folder-list/folder-list.component';
import { FolderComponent } from './folder/folder.component';

import { TestComponent } from './test/test.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'teamMembers', component: TeamMemberListComponent },
	{ path: 'teamMember/:id', component: TeamMemberComponent },
	{ path: 'folders', component: FolderListComponent },
	{ path: 'folder/:id', component: FolderComponent },

	{ path: 'tests', component: TestComponent },

	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
