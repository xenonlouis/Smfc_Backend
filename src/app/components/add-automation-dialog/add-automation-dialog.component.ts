import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SfmcService } from '../../services/sfmc.service';
import { Automation } from '../Models/automation.model';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-automation-dialog',
  templateUrl: './add-automation-dialog.component.html',
  styleUrls: ['./add-automation-dialog.component.css']
})
export class AddAutomationDialogComponent {

  automationItem: Automation = {
    name: "",
    description: "",
    status: "Scheduled",
    schedule: {
      type : "Recurring",
      startDate: "2024-07-11T12:00:00Z",
      endDate: "2024-07-11T13:00:00Z",
      runFrequency: "Daily"
    }
  }

  constructor(
    public dialogRef: MatDialogRef<AddAutomationDialogComponent>,
    private sfmcService: SfmcService
  ) { }

  onSubmit(form: NgForm) {
    console.log("item");
    console.log(this.automationItem)
    if (form.valid) {
      this.sfmcService.createAutomation(this.automationItem).subscribe(
        () => {
          this.dialogRef.close();
        },
        error => {
          console.error('Error creating automation', error);
        }
      );
    }
  }
}
