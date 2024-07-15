// src/app/components/dataextensions/dataextensions.component.ts

import { Component, OnInit } from '@angular/core';
import { SfmcService } from '../../services/sfmc.service';
import { DataExtension, DataExtensionItem } from '../Models/dataextension.model';

@Component({
  selector: 'app-dataextensions',
  templateUrl: './data-extension.component.html',
  styleUrls: ['./data-extension.component.css']
})
export class DataExtensionComponent implements OnInit {
  dataExtensions: DataExtension[] = [];
  selectedDataExtensionKey: string = '';
  dataExtensionItems: DataExtensionItem[] = [];
  dataExtensionFields: string[] = [];
  dataExtensionKeyFields: string[] = [];

  constructor(private sfmcService: SfmcService) {}

  ngOnInit(): void {
    this.sfmcService.getDataExtensions().subscribe((data: DataExtension[]) => {
      this.dataExtensions = data;
    });
  }

  fetchDataExtensionDetails(): void {
    if (this.selectedDataExtensionKey) {
      this.sfmcService.getDataExtensionRows(this.selectedDataExtensionKey).subscribe((items: DataExtensionItem[]) => {
        if (items.length > 0) {
          this.dataExtensionFields = Object.keys(items[0].values);
          this.dataExtensionKeyFields = Object.keys(items[0].keys);
        }
        this.dataExtensionItems = items;
      });
    }
  }
}
