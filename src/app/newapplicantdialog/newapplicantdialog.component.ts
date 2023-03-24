import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SharedserviceService } from "../sharedservice.service";

@Component({
  selector: 'app-newapplicantdialog',
  templateUrl: './newapplicantdialog.component.html',
  styleUrls: ['./newapplicantdialog.component.css']
})
export class NewapplicantdialogComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private applicantService: SharedserviceService) {

    this.form = this.fb.group({
      name: ["", Validators.required],
      experience: ["", Validators.required],
      jobTitle: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      status: ["", Validators.required],
      applicationDate: ["", Validators.required],
    })
  }

  onSubmit(): void {
    let applicant = {
      name: this.form.get('name')?.value,
      experience: this.form.get('experience')?.value,
      jobTitle: this.form.get('jobTitle')?.value,
      email: this.form.get('email')?.value,
      status: this.form.get('status')?.value,
      applicationDate: this.form.get('applicationDate')?.value
    }
    this.applicantService.addApplicant(applicant)
  }

}