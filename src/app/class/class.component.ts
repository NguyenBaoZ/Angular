import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  isDanger = false;
  isWarning = false;
  classes = "box red-border yellow-background"
}
