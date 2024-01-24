import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  Sports:ContentList= new ContentList();
  constructor(){
    this.Sports.add({
      id:1,
      title:"Leather Ball",
      description:"The most important raw material is leather, and the final price of a ball depends on leather quality. The highest quality of the leather is locally known as “puttha leather”.",
      imgUrl:"https://bestcricketstore.com/wp-content/uploads/2024/01/img_5714-1.jpeg",
      type:"Red Ball",
      creator:"Kookaburra-colt"

    })

    this.Sports.add({
      id:2,
      title:"Cricket bat",
      description:"The bat is wooden equipment that the batsman uses to strike the ball. It is made up of willow wood therefore it is also known as the willow.",
      imgUrl:"https://www.cricketbestbuy.com/cdn/shop/articles/cricket-bats_600x.jpg?v=1585670436",
      type:"Willow Bat",
      creator:"Spartan"

    })
    this.Sports.add({ 
      id:3,
      title:"Gloves",
      description:"Look for a comfortable grip, making sure to grip the bat handle firmly and reduce the chances of the bat or ball slipping out of your hand while shooting.",
      imgUrl:"https://files.ekmcdn.com/cornishcricket/images/kookaburra-kahuna-400-batting-gloves-13968-p.jpg?v=EA3CA608-167E-45D1-BEDE-DEBAA1CD8BD3",
      type:"Die-cutting the Glove Parts, Shelling and lining, Inserting plastic reinforcements, Constructing the web, and Lacing and Stitching",
      creator:"Kookaburra"

    })

  }}
