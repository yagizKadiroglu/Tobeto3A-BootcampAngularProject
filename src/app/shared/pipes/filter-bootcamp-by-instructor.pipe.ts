import { Pipe, PipeTransform } from "@angular/core";
import { GetlistBootcampResponse } from "../../features/models/responses/bootcamp/getlist-bootcamp-response";

@Pipe({
    name:'filterPipe'
})
export class FilterBootcampByInstructorPipe implements PipeTransform{
    transform(value: GetlistBootcampResponse[], filterText:string):GetlistBootcampResponse[] {
        filterText=filterText?filterText.toLocaleLowerCase():""
        return filterText?value.filter((b:GetlistBootcampResponse)=>b.instructorFirstName.toLocaleLowerCase().
        indexOf(filterText)!==-1):value;
    }
}