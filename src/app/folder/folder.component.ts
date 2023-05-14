import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Folder } from './folder-model';
import { FolderService } from './folder.service';

@Component({
	selector: 'app-folder',
	templateUrl: './folder.component.html',
	styleUrls: ['./folder.component.scss']
})

export class FolderComponent implements OnInit {
	folder: Folder | undefined;
	idFolder: string = "";

	constructor(private route: ActivatedRoute,
				private location: Location,
				private folderService: FolderService) { }

	ngOnInit(): void {
		this.getTeamMember();
	}

	getTeamMember(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.idFolder = String(id);

		this.folderService.getFolder(id)
			.subscribe(folder => this.folder = folder);
	}

	goBack(): void {
		this.location.back();
	}

}
