import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  Applicants: Applicant[] = [];
  
  constructor() { }

  addApplicant(applicant: Applicant) {
    this.Applicants.push(applicant);
    this.applicantAdded.emit();
    console.log(this.Applicants)
  };

  getApplicants(): Applicant[] {
    return this.Applicants;
  };

  applicantAdded = new EventEmitter<void>();

}
export interface Applicant {
  name: string;
  experience: number;
  jobTitle: string;
  email: string;
  status: string;
  applicationDate: string;
}