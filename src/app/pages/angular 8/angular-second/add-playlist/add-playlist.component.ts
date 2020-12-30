import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.scss'],
})
export class AddPlaylistComponent implements OnInit {
  addForm: FormGroup;
  playlistNameField = new FormControl('', Validators.required);
  descriptionField = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddPlaylistComponent>
  ) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      name: this.playlistNameField,
      description: this.descriptionField,
      songs: this.fb.array([this.createSongForm()]),
    });
  }

  createSongForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      duration: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onAddSongForm() {
    (this.addForm.get('songs') as FormArray).push(this.createSongForm());
  }

  onDeleteSongForm(index: any) {
    (this.addForm.get('songs') as FormArray).removeAt(index);
  }

  onClose() {
    this.dialogRef.close();
  }

  onAddPlaylist(form) {
    Swal.fire('New Playlist Add', 'Enjoy your new playlist', 'success');
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
