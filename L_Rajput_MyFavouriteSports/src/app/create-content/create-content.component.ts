import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  contents: Content = {
    id: 4,
    title: '',
    description: '',
    tags: [],
    type: '',
    creator: ''

  }
  addData() {
    console.log(this.contents);
    let dataPromise = new Promise((resolve, reject) => {
      resolve(this)
    })
  }
}