import { Component, OnInit } from '@angular/core';
import { BodyService } from '../body-service.service';
import { JovsInfo } from 'src/app/models/jobsInfo.model';

@Component({
  selector: 'experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.scss'],
})
export class ExperienceInfoComponent implements OnInit {
  jobsInfo: JovsInfo[] = [];

  constructor(private bodyService: BodyService) {}

  ngOnInit() {
    this.jobsInfo = this.bodyService.getJobsInfo();
  }
}
