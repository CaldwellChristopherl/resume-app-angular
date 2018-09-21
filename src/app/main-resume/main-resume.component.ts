import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-resume',
  templateUrl: './main-resume.component.html',
  styleUrls: ['./main-resume.component.scss']
})
export class MainResumeComponent implements OnInit {

  user$:Object;
  userWorkHistory$:Object;

  constructor(private route:ActivatedRoute,private data:DataService) { 
    this.route.params.subscribe( params => this.user$ = params.id);
  }
  
  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => {
        console.log(data)
        this.user$ = data
      }
    )
    this.data.getUserHistory(this.user$).subscribe(
      data => {
        console.log(data)
        this.userWorkHistory$ = data
      }
    )
  }

}
