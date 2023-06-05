import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

	classItem1: string = '';
	classItem2: string = '';
	classItem3: string = '';
	classItem4: string = '';
	classItemPlaceholder: string = '';

	constructor(
		private route: Router,
	) { }

	ngOnInit(): void {
		this.setClassToItem(this.route.url);		
	}

	setClassToItem(route: string): void {
		if (route == "/dashboard") {
			// console.log("navigationComponent -> url == /dashboard!");
			this.classItem1 = "navigation-item active";
			this.classItem2 = "navigation-item post-active";
		}
		if (route.substring(0,11) == "/teamMember") {
			// console.log("navigationComponent -> url == " + route.substring(0,11));
			this.classItem1 = "navigation-item pre-active";
			this.classItem2 = "navigation-item active";
			this.classItem3 = "navigation-item post-active";
		}
		if (route.substring(0,7) == "/folder") {
			// console.log("navigationComponent -> url == " + route.substring(0,6));
			this.classItem2 = "navigation-item pre-active";
			this.classItem3 = "navigation-item active";
			this.classItem4 = "navigation-item post-active";
		}
		if (route.substring(0,6) == "/tests") {
			// console.log("navigationComponent -> url == /test2!");
			this.classItem3 = "navigation-item pre-active";
			this.classItem4 = "navigation-item active";
			this.classItemPlaceholder = "navigation-item post-active";
		}
	}
}
