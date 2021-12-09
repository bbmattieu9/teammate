import { Component, OnInit } from '@angular/core';
import { TeammateService } from './teammate/service/teammate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  title = 'teammates';



  constructor(private teammateSrv: TeammateService) { }


  ngOnInit(): void {
    this.teammateSrv.getTeammates().subscribe();

  }
}
