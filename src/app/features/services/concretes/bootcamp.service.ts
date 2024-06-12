import { Injectable } from '@angular/core';
import { BootcampBaseService } from '../abstracts/bootcamp-base.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { BootcampListItemDto } from '../../models/responses/bootcamp/bootcamp-list-item-dto';
import { PageRequest } from '../../../core/models/page-request';

@Injectable({
  providedIn: 'root'
})
export class BootcampService extends BootcampBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/bootcamps`
  constructor(private httpClient:HttpClient) {super()}

  override getList(pageRequest:PageRequest): Observable<BootcampListItemDto>{
    const newRequest :{[key:string]:string | number}={
      pageIndex:pageRequest.page,
      pageSize:pageRequest.pageSize
    };
    return this.httpClient.get<BootcampListItemDto>(this.apiUrl,{
      params:newRequest,
  }).pipe(
    map((response)=>{
      const newResponse:BootcampListItemDto={
          index:pageRequest.page,
          size:pageRequest.pageSize,
          count:response.count,
          hasNext:response.hasNext,
          hasPrevious:response.hasPrevious,
          items:response.items,
          pages:response.pages
        };
        return newResponse;
      })
    )
  }
}
