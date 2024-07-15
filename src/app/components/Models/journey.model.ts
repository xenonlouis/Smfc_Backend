export interface Activity {
  id: string;
  key: string;
  name: string;
  type: string;
}

export interface Journey {
  id: string;
  key: string;
  name: string;
  status: string;
  createdDate: Date;
  modifiedDate: Date;
  activities: Activity[];
}
