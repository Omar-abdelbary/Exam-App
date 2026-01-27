import { Component } from '@angular/core';
import { SidebarstudentComponent } from "../../shared/sidebarstudent/sidebarstudent.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterOutlet, SidebarstudentComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

}
