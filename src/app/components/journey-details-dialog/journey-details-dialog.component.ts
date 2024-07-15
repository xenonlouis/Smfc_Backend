import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-journey-details-dialog',
  templateUrl: './journey-details-dialog.component.html',
  styleUrls: ['./journey-details-dialog.component.css']
})
export class JourneyDetailsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
