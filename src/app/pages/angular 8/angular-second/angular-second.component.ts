import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { EditPlaylistComponent } from './edit-playlist/edit-playlist.component';
import { Playlist, PlaylistComponent } from './services/intermediate-data';

@Component({
  selector: 'app-angular-second',
  templateUrl: './angular-second.component.html',
  styleUrls: ['./angular-second.component.scss'],
})
export class AngularSecondComponent implements OnInit {
  playlist: Playlist[];

  constructor(
    private playlistServ: PlaylistComponent,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.playlist = this.playlistServ.getPlaylist();
  }

  addNewPlaylist() {
    const dialog = this.dialog.open(AddPlaylistComponent, {
      width: '90vh',
    });

    dialog.afterClosed().subscribe((newPlaylist) => {
      if (newPlaylist) this.playlist.push(newPlaylist);
    });
  }

  deletePlaylist(playlist: Playlist) {
    this.playlist = this.playlist.filter((p) => p.name != playlist.name);
  }

  editPlaylist(playlist: Playlist) {
    const dialog = this.dialog.open(EditPlaylistComponent, {
      width: '90vh',
      data: playlist,
    });

    dialog.afterClosed().subscribe((res) => {
      const foundIndex = this.playlist.findIndex((x) => x.name == res.name);
      this.playlist[foundIndex] = res;
    });
  }
}
