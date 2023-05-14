import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TeamMember } from './team-member-model';
import { TEAMMEMBERS } from '../mock-data/team-member-mock';


@Injectable({
  	providedIn: 'root'
})

export class TeamMemberService {

  	constructor() { }

	// Returns TeamMember Array as Observable
	// --------------------------------------
	getTeamMembers(): Observable<TeamMember[]> {
		const teamMembers = of(TEAMMEMBERS);
		return teamMembers;
	}

	getTeamMember(id: number): Observable<TeamMember> {
		const teamMember = TEAMMEMBERS.find(h => h.id === id)!;
		return of(teamMember);
	}

	getTeamMembersByArt(isDeveloper: boolean): Observable<TeamMember[]> {
		const test = TEAMMEMBERS.filter(item => item.isDeveloper == isDeveloper);
		return of(test);
	}

}
