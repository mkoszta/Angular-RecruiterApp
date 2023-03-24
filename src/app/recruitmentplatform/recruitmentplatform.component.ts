import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { NewapplicantdialogComponent } from '../newapplicantdialog/newapplicantdialog.component';
import { SharedserviceService, Applicant } from '../sharedservice.service';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-recruitmentplatform',
  templateUrl: './recruitmentplatform.component.html',
  styleUrls: ['./recruitmentplatform.component.css']
})
export class RecruitmentplatformComponent implements OnInit {
  displayedColumns: string[] = ['name', 'experience', 'jobTitle', 'email', 'status', 'applicationDate'];
  Applicants: Applicant[] = []
  dataSource = new MatTableDataSource<Applicant>();
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(public dialog: MatDialog, private applicantService: SharedserviceService) {
  }
  ngOnInit() {
    this.Applicants = this.applicantService.getApplicants();
    this.dataSource = new MatTableDataSource(this.Applicants);
    this.applicantService.applicantAdded.subscribe(() => {
      this.Applicants = this.applicantService.getApplicants();
    });

    this.applicantService.applicantAdded.subscribe(() => {
      this.refreshApplicants();
    });
    this.dataSource = new MatTableDataSource(this.applicantService.getApplicants());
  };
  refreshApplicants() {
    this.Applicants = this.applicantService.getApplicants();
    this.dataSource.data = this.Applicants;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NewapplicantdialogComponent, {
    });
  };

  statusFilter!: string;
  titleFilter!: string;

  async generateNotification(name: string, status: string) {
    const prompt = `Generate a notification message for ${name} that their application status has changed to ${status}.`;
    const model = 'davinci';
    const maxTokens = 64;
    const n = 1;
    const stop = '\n';

    const response = await axios.post('https://api.openai.com/v1/engines/' + model + '/completions', {
      prompt,
      max_tokens: maxTokens,
      n: n,
      stop: stop
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      }
    });

    const message = response.data.choices[0].text.trim();
    console.log(message);
  }
}