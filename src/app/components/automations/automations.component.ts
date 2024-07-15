// src/app/components/automation/automation.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SfmcService } from '../../services/sfmc.service';
import { Automation } from '../Models/automation.model';
import {AutomationDetailsDialogComponent} from "../automation-details-dialog/automation-details-dialog.component";
import {AddAutomationDialogComponent} from "../add-automation-dialog/add-automation-dialog.component";

@Component({
  selector: 'app-automation',
  templateUrl: './automations.component.html',
  styleUrls: ['./automations.component.css']
})
export class AutomationsComponent implements OnInit {
  automations: Automation[] = [];
  filteredAutomations: Automation[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';

  constructor(private sfmcService: SfmcService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.sfmcService.getAutomations().subscribe((data: Automation[]) => {
      this.automations = data;
      this.filteredAutomations = data;
    });
  }

  filterAutomations(): void {
     console.log("filtered by scheduled");
     this.automations.forEach(n => console.log(n.status));
     console.log(this.automations.filter( n => n.status =='Scheduled'))
    this.filteredAutomations = this.automations.filter(automation => {
      return automation.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedCategory === 'all' || automation.status === this.selectedCategory);
    })
  }

  openDetails(automation: Automation): void {
    this.dialog.open(AutomationDetailsDialogComponent, {
      data: automation
    });
  }

  deleteAutomation(id: string | undefined): void {
    this.sfmcService.deleteAutomation(id).subscribe(() => {
      this.automations = this.automations.filter(a => a.id !== id);
      this.filterAutomations();
    });
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddAutomationDialogComponent, {
      width: '1200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sfmcService.createAutomation(result).subscribe(() => {
          this.ngOnInit(); // Reload the automations list
        });
      }
    });
  }
}
