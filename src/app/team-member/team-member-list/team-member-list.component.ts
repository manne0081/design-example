import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TeamMember } from '../team-member-model';
import { TeamMemberService } from '../team-member.service';

@Component({
	selector: 'app-team-member-list',
	templateUrl: './team-member-list.component.html',
	styleUrls: ['./team-member-list.component.scss']
})

export class TeamMemberListComponent implements OnInit {
	teamMembers: TeamMember[] = [];

	private teamMemberArt: string = 'all';

	constructor(private router: Router,
				private teamMemberService: TeamMemberService,
				private route: ActivatedRoute) { }

	ngOnInit(): void {
		if (this.teamMemberArt == 'all') {
			console.log("Alle...");
			this.getTeamMembers();
		} else {
			if (this.teamMemberArt == 'dev') {
				console.log("DEV...");
				this.getTeamMembersDev();
			} else {
				if (this.teamMemberArt == 'pm') {
					console.log("PM...");
					this.getTeamMembersPM();
				}
			}
		}		 
	}

	getTeamMembers(): void {
		this.teamMemberService.getTeamMembers()
			.subscribe(teamMembers => this.teamMembers = teamMembers);
	}
	
	getTeamMembersDev(): void {
		this.teamMemberService.getTeamMembersByArt(true)
			.subscribe(teamMembers => this.teamMembers = teamMembers);
	}
	
	getTeamMembersPM(): void {
		this.teamMemberService.getTeamMembersByArt(false)
			.subscribe(teamMembers => this.teamMembers = teamMembers);
	}

	onClick(teamMember: TeamMember): void {
		const teamMemberId = teamMember ? teamMember.id : null;
		this.router.navigate(['teamMember', teamMember.id]);
	}
}
