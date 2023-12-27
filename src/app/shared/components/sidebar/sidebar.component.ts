import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor ( private gifsService: GifsService ){}

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  onSelectTag( tag: string ): void {
    this.gifsService.searchTag(tag);
  }

  isSidebarOpen: boolean = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('Sidebar Open?', this.isSidebarOpen);
  }
}
