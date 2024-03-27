import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";
import { CommonModule } from '@angular/common';
import { SortTypePipe } from "../sort-type.pipe";
import { FormsModule } from '@angular/forms';
import { SportServiceService } from '../services/sport-service.service';
import { MessagesComponent } from "../messages/messages.component";
import { ModifyContentComponentComponent } from "../modify-content-component/modify-content-component.component";
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
  imports: [ContentCardComponent, CommonModule, SortTypePipe, FormsModule, MessagesComponent, ModifyContentComponentComponent]
})
export class ContentListComponent implements OnInit {

  bgColor: string = '';
  name: string = '  ';
  result: string = '';
  title: any;
  sportsContent: Content[] = [];
  Constent: Content | undefined = undefined;
  id: any;
  constructor(private contentServie: SportServiceService, private DatabaseService: FetchApiService) {
  }

  ngOnInit(): void {


    // this.contentServie.getSport().subscribe(result => { this.sportsContent = result });

    this.DatabaseService.getContent().subscribe(result => {
      result = this.sportsContent;
      console.log(this.sportsContent);
    });
    // console.log(this.sportsContent);

  }

  single(id: number) {
    this.contentServie.getSingle(id).subscribe(result => { this.Constent = result });
  }
  filterResults(text: string) {
    this.sportsContent = this.sportsContent.filter(s => s.title.toLowerCase().includes(text.toLowerCase()))
    if (this.sportsContent.length > 0) {
      this.result = 'Content Found';
      this.bgColor = 'green';

    } else {
      this.result = 'Content Not Found';
      this.bgColor = 'red';
    }
  }
}