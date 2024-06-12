import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BootcampService } from '../../services/concretes/bootcamp.service';
import { PageRequest } from '../../../core/models/page-request';
import { BootcampListItemDto } from '../../models/responses/bootcamp/bootcamp-list-item-dto';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-homepage-bootcamp',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './homepage-bootcamps.component.html',
  styleUrl: './homepage-bootcamps.component.scss'
})
export class HomePageBootcampComponent implements OnInit {
  currentPageNumber!:number;
  bootcamps: BootcampListItemDto={
    index:0,
    size:0,
    count:0,
    hasNext:false,
    hasPrevious:false,
    pages:0,
    items:[]
  };

  constructor(private bootcampService:BootcampService){}   
  readonly PAGE_SIZE=6;
  
  ngOnInit(): void {
    this.getBootcamps({page:0, pageSize:this.PAGE_SIZE});
  }

getBootcamps(pageRequest:PageRequest){
    this.bootcampService.getList(pageRequest).subscribe((response)=>{
      this.bootcamps=response;
      this.updateCurrentPageNumber();
    })
  }

  onViewMoreClicked():void{
    const nextPageIndex = this.bootcamps.index+1;
    const pageSize = this.bootcamps.size;

    this.getBootcamps({page:nextPageIndex,pageSize})
    this.updateCurrentPageNumber();
  }

  onPreviousPageClicked():void{
    const previousPageIndex = this.bootcamps.index-1;
    const pageSize = this.bootcamps.size;
    this.getBootcamps({page:previousPageIndex,pageSize});
    this.updateCurrentPageNumber();
  }

  updateCurrentPageNumber():void{
    this.currentPageNumber=this.bootcamps.index+1;
  }
}
