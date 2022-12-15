import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home$!: Observable<string>;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.home$ = this.homeService.home();
  }
}
