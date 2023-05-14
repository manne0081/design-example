import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quicklinks',
    templateUrl: './quicklinks.component.html',
    styleUrls: ['./quicklinks.component.scss']
})

export class QuicklinksComponent implements OnInit {
	quicklinks: string[] = ['Team-Members / DEV', 'Team-Members / PM', 'Folder / ABC', 'Project / 0815',
							// 'Team-Members / DEV', 'Team-Members / PM', 'Folder / ABC', 'Project / 0815',
							// 'Folder + Project', 'Team-Members / PM', 'Folder / XYZ', 'Project / 4711',
							// 'Team-Members / DEV', 'Team-Members / PM', 'Folder / ABC', 'Project / 0815',
							// 'Folder + Project', 'Team-Members / PM', 'Folder / XYZ', 'Project / 4711',
							// 'Team-Members / DEV', 'Team-Members / PM', 'Folder / ABC', 'Project / 0815',
							'Folder + Project', 'Team-Members / PM', 'Folder / XYZ', 'Project / 4711'
							];

    constructor(
		private router: Router,
	) { }

    ngOnInit(): void {
    }

	openQuicklink1(): void {
		// let test: string = 'dev';
		// this.router.navigate(['teamMembers', test]);
		this.router.navigate(['teamMembers']);
	}

}
