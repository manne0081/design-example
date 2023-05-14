import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Folder } from './folder-model';
import { FOLDERS } from '../mock-data/folder-mock';

@Injectable({
    providedIn: 'root'
})

export class FolderService {

    constructor() { }

    // Returns Folders Array as Observable
    // --------------------------------------
    getFolders(): Observable<Folder[]> {
      const folders = of(FOLDERS);
      return folders;
    }

    getFolder(id: number): Observable<Folder> {
      const folder = FOLDERS.find(h => h.id === id)!;
      return of(folder);
    }

}
