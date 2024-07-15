import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { JourneyDetailsDialogComponent } from '../journey-details-dialog/journey-details-dialog.component';
import { Journey } from '../Models/journey.model';
import { SfmcService } from '../../services/sfmc.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent implements OnInit {
  journeys: Journey[] = [];
  filteredJourneys: Journey[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  sortOrder: string = 'name';

  constructor(private journeyService: SfmcService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.journeyService.getJourneys().subscribe((data: Journey[]) => {
      this.journeys = data;
      this.filteredJourneys = data;
    });
  }

  filterJourneys(): void {
    this.filteredJourneys = this.journeys.filter(journey => {
      return journey.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedCategory === 'all' || journey.status === this.selectedCategory);
    });
    this.sortJourneys();
  }

  sortJourneys(): void {
    if (this.sortOrder === 'name') {
      this.filteredJourneys.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOrder === 'modifiedDate') {
      this.filteredJourneys.sort((a, b) => new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime());
    }
  }

  openDetails(journey: Journey): void {
    this.dialog.open(JourneyDetailsDialogComponent, {
      data: journey
    });
  }
}
