// src/app/components/Models/dataextension.model.ts

export interface DataExtensionField {
  name: string;
  fieldType: string;
  maxLength: number;
  isPrimaryKey: boolean;
  isRequired: boolean;
}

export interface DataExtension {
  key: string;
  fields: DataExtensionField[];
}

export interface DataExtensionItem {
  keys: { [key: string]: string };
  values: { [key: string]: any };
}
