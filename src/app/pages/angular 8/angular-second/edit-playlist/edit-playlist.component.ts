import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Playlist } from '../services/intermediate-data';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.scss'],
})
export class EditPlaylistComponent implements OnInit {
  editForm: FormGroup;
  playlistNameField: FormControl;
  descriptionField: FormControl;
  songsField: FormArray;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditPlaylistComponent>,
    @Inject(MAT_DIALOG_DATA) public playlist: Playlist
  ) {}

  ngOnInit() {
    this.playlistNameField = new FormControl(
      this.playlist.name,
      Validators.required
    );
    this.descriptionField = new FormControl(
      this.playlist.description,
      Validators.required
    );
    this.editForm = this.fb.group({
      name: this.playlistNameField,
      description: this.descriptionField,
      songs: this.fb.array([]),
    });
    this.editForm.setControl('songs', this.fb.array(this.updateSongForm()));
  }

  updateSongForm() {
    const songs = this.playlist.songs.map((s) => {
      return this.fb.group({
        title: [s.title, Validators.required],
        artist: [s.artist, Validators.required],
        duration: [s.duration, [Validators.required, Validators.min(0)]],
      });
    });
    return songs;
  }

  createSongForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      duration: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onAddSongForm() {
    (this.editForm.get('songs') as FormArray).push(this.createSongForm());
  }

  onDeleteSongForm(index: any) {
    (this.editForm.get('songs') as FormArray).removeAt(index);
  }

  onClose() {
    this.dialogRef.close();
  }

  onEditForm(form) {
    Swal.fire('Playlist Updated', 'Enjoy your updated playlist', 'success');
    const totalMinutes = this.calculateMinutes(form.value);
    const totalSong = form.value.songs.length;
    form.value['totalSongs'] = totalSong;
    form.value['totalDuration'] = totalMinutes;
    this.dialogRef.close(form.value);
  }

  calculateMinutes(value: any) {
    let totalMinutes = 0;
    for (let i in value.songs) {
      {
        totalMinutes += value.songs[i].duration;
      }
    }
    return totalMinutes;
  }
}
