import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
	linkImages: string[] = [
		'assets/icons/dashboard.svg',
		'assets/icons/teamMembers.svg',
	];

	constructor() { }

	ngOnInit(): void {
	}

	getUrlLink() {
		// todo > get routerLink-information from the linkImage-string
	}

}
