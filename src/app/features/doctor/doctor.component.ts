import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarstudentComponent } from "../../shared/sidebarstudent/sidebarstudent.component";

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [RouterOutlet, ],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

}
