import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title: string = 'test';
	name: string = 'Manuel Schmidt';
	department: string = 'Vertrieb & Konzeption';
	quicklinks: string[] = ['Team-Members / DEV', 'Team-Members / PM', 'Folder / ABC', 'Project / 0815',
							// 'Team-Members / DEV', 'Team-Members / PM', 'Folder / ABC', 'Project / 0815',
							// 'Folder + Project', 'Team-Members / PM', 'Folder / XYZ', 'Project / 4711',
							// 'Team-Members / DEV', 'Team-Members / PM', 'Folder / ABC', 'Project / 0815',
							// 'Folder + Project', 'Team-Members / PM', 'Folder / XYZ', 'Project / 4711',
							// 'Team-Members / DEV', 'Team-Members / PM', 'Folder / ABC', 'Project / 0815',
							'Folder + Project', 'Team-Members / PM', 'Folder / XYZ', 'Project / 4711'];
	firstName: string = 'Bärbel';
	lastName: string = 'Beispiel';

	printQuicklinks(): void {
		console.log(this.quicklinks);
	}

}
