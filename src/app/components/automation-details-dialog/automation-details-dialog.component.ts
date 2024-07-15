// src/app/components/automation-details-dialog/automation-details-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-automation-details-dialog',
  templateUrl: './automation-details-dialog.component.html',
  styleUrls: ['./automation-details-dialog.component.css']
})
export class AutomationDetailsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
