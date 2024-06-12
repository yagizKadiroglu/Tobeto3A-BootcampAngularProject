import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BootcampListGroupComponent } from "../../features/components/bootcamps/bootcamp-list-group/bootcamp-list-group.component";
import { SharedModule } from "../../shared/shared.module";
import { HomePageBootcampComponent } from '../../features/components/homepage-bootcamps/homepage-bootcamps.component';

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [RouterModule, CommonModule, BootcampListGroupComponent, HomePageBootcampComponent, SharedModule]
})
export class HomepageComponent implements OnInit {
  // apiUrl = "http://localhost:5268/api/Bootcamps";
  // Bootcamps: GetlistBootcampResponse[] = [];

  constructor(private httpclient: HttpClient){}

  ngOnInit(): void {
    console.log("Bootcamp GetAll metodu çalıştırıldı..");
    // this.getBootcamps();
  }

  
}