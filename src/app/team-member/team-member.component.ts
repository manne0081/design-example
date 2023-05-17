import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TeamMember } from './team-member-model';
import { TeamMemberService } from './team-member.service';

@Component({
	selector: 'app-team-member',
	templateUrl: './team-member.component.html',
	styleUrls: ['./team-member.component.scss']
})

export class TeamMemberComponent implements OnInit {
	teamMember: TeamMember | undefined;
	idTeamMember: string = "";

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private teamMemberService: TeamMemberService,
	) {}

	ngOnInit(): void {
		this.getTeamMember();
	}

	getTeamMember(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.idTeamMember = String(id);

		this.teamMemberService.getTeamMember(id)
			.subscribe(teamMember => this.teamMember = teamMember);
	}

	goBack(): void {
		this.location.back();
	}
}
