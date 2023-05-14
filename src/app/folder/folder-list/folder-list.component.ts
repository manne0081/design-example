import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Folder } from '../folder-model';
import { FolderService } from '../folder.service';

@Component({
	selector: 'app-folder-list',
	templateUrl: './folder-list.component.html',
	styleUrls: ['./folder-list.component.scss']
})

export class FolderListComponent implements OnInit {
	folders: Folder[] = [];

	constructor(private router: Router,
				private folderService: FolderService) { }

	ngOnInit(): void {
		this.getFolders();
	}

	getFolders(): void {
		// TeamMembers-Observable
		this.folderService.getFolders()
			.subscribe(folders => this.folders = folders);
	}

	onClick(folder: Folder): void {
		const folderId = folder ? folder.id : null;
		this.router.navigate(['folder', folder.id]);
	}

}
