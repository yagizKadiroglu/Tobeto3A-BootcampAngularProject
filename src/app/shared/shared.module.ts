import { NgModule } from "@angular/core";
// import { FilterModelPipe } from "./pipes/filter-model-pipe.pipe";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { FilterBootcampByInstructorPipe } from "./pipes/filter-bootcamp-by-instructor.pipe";

@NgModule({
    declarations:[NavbarComponent, FooterComponent, FilterBootcampByInstructorPipe],
    exports:[NavbarComponent,FooterComponent, FilterBootcampByInstructorPipe],
    imports:[CommonModule, RouterModule]

})
export class SharedModule{}