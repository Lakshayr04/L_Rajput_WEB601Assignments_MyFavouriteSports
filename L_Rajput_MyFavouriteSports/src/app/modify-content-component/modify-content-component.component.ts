import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  data: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    imgUrl: '',
    type: '',
    tags: [],
  }
  submit() {
    console.log(this.data);
  };

}
