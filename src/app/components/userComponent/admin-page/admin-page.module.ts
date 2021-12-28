import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminPageComponent } from "./admin-page.component";

@NgModule({
  declarations: [AdminPageComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class AdminPageModule {}
