import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
 @Input() content:any;
 OnClick=(id:number,name:string) =>{
return console.log(`number ${id} and ${name} of the content`);
  };
}