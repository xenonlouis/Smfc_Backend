// automation.model.ts
export interface Automation {
  id?: string;
  name: string;
  description: string;
  status: string;
  schedule: Schedule;
}

export interface Schedule {
  type: string;
  startDate: string;
  endDate: string;
  runFrequency: string;
}
