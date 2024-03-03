import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() addOutput = new EventEmitter<Content>();
  contents: Content = {
    id: 4,
    title: '',
    description: '',
    tags: [],
    type: '',
    creator: ''

  }
  errorMess: string|null = null;
  addData() {
    console.log(this.contents);
    let dataPromise = new Promise((resolve, reject) => {
      let testpass = false;

      if (testpass) {
        resolve("Sucees");
      }
      else {
        reject("Error");
      }
    })

    dataPromise.then((data) => {
      this.addOutput.emit(this.contents);
      this.contents = {
        id: 4,
        title: '',
        description: '',
        tags: [],
        type: '',
        creator: ''
      }
    })
    dataPromise.catch((err) => {
      this.errorMess = "Data is not vaild";
     
    })
  }
}