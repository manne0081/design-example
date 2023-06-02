import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TeamMember } from '../../app/team-member/team-member-model';
import { TeamMemberService } from '../team-member/team-member.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
	teamMembers: TeamMember[] = [];
	
	constructor(private router: Router,
				private teamMemberService: TeamMemberService) { }

	ngOnInit(): void {
		this.getTeamMembers();
  	}

	getTeamMembers(): void {
		this.teamMemberService.getTeamMembers()
			.subscribe(teamMembers => this.teamMembers = teamMembers);
	}

  	onClick(teamMember: TeamMember): void {
		const teamMemberId = teamMember ? teamMember.id : null;
		this.router.navigate(['teamMember', teamMember.id]);
	}
}
