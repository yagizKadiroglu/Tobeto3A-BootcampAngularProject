import { CommonModule } from '@angular/common';
import { Component, OnInit, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { BootcampService } from '../../../services/concretes/bootcamp.service';
import { PageRequest } from '../../../../core/models/page-request';
import { BootcampListItemDto } from '../../../models/responses/bootcamp/bootcamp-list-item-dto';
import { GetlistBootcampResponse } from '../../../models/responses/bootcamp/getlist-bootcamp-response';

@Component({
  selector: 'app-bootcamp-list-group',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './bootcamp-list-group.component.html',
  styleUrl: './bootcamp-list-group.component.scss'
})
export class BootcampListGroupComponent implements OnInit {
  filterText="";
  currentBootcamp!:GetlistBootcampResponse
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

  setCurrentBootcamp(bootcamp:GetlistBootcampResponse){
    this.currentBootcamp=bootcamp;
  }

getCurrentBootcampClass(bootcamp:GetlistBootcampResponse){
  if(bootcamp==this.currentBootcamp){
    return "list-group-item active"
  }
  else{
    return "list-group-item"
  }
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
