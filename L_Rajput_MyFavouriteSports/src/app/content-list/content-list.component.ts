import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";
import { CommonModule } from '@angular/common';
import { SortTypePipe } from "../sort-type.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [ContentCardComponent, CommonModule, SortTypePipe,FormsModule]
})
export class ContentListComponent implements OnInit{

bgColor: string = '';
name: string='  ';
result:string = '';
  sportsContent: Content[];
title: any;
  constructor(){
    this.sportsContent=[];
  }

  ngOnInit(): void {
    
  
   this.sportsContent =[
    {
      id: 1,
      title: 'Cricket Bat review',
      description: 'The aims of this study were to experimentally measure and numerically describe the performance of cricket bats and balls. A dynamic finite element model was employed to simulate the bat-ball impact.',
      creator: 'English Willow',
      imgUrl: 'https://imgs.search.brave.com/_I5g0GfSgAn2048a5Z09bFO_4wFBiB1CgBzufSmlzTs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jcmlj/a2V0ZXJzY2hvaWNl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNi9HdW5u/LWFuZC1Nb29yZS1E/aWFtb25kLUNyaWNr/ZXQtQmF0LTIwMTkt/bWFpbi5qcGc',
      type: 'Video',
      tags: ['Bat', 'Drive', 'Analysis']
   
     },
    {
      id: 2,
      title: 'Cricket',
      description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps.',
      creator: 'ICC',
      imgUrl: 'https://imgs.search.brave.com/PFLdcsBmnsXWwqdG2xdZHypVtqLxDm3sPsUFXqlgSBw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjQtMDIvZGk3Zzd2/bWdfaW5kaWEtYmNj/aV82MjV4MzAwXzAz/X0ZlYnJ1YXJ5XzI0/LmpwZz9pbT1GZWF0/dXJlQ3JvcCxhbGdv/cml0aG09ZG5uLHdp/ZHRoPTgwNixoZWln/aHQ9NjA1',
      type: 'Video',
      tags: ['Cricket', 'tutorial', 'training', 'video']
    },
    {
      id: 3,
      title: 'Ball',
      description: 'A cricket ball is a hard, solid ball used to play cricket. A cricket ball consists of a cork core wound with string then a leather cover stitched on, and manufacture is regulated by cricket law at first-class level.',
      creator: 'SG',
      imgUrl: 'https://imgs.search.brave.com/dzPDmjAAdgsvRU73vjBK5VnhigYgQPxVvnP-cIbL5IA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFGRWFCUUhYc0wu/anBn',
      type: 'Description',
      tags: ['Ball', 'sports', 'material']
    },
    {
      id: 4,
      title: 'Cricket commentary review ',
      description: 'A number of famous players have had a second career as writers or commentators. However, many commentators never played the game at a professional level, yet they have gone on to become famous names associated with the game.',
      creator: 'Commentary',
      imgUrl: 'https://imgs.search.brave.com/B1Ap-DT74_829d3gw_y9nos-d_HfJ6T3jrqjVQLO6o8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/amFncmFuam9zaC5j/b20vaW1hZ2VzLzIw/MjMvT2N0b2Jlci80/MTAyMDIzL1dvcmxk/LUN1cC1Db21tZW50/YXRvcnMud2VicA',
      type: 'video',
      tags: ['Commentary', 'debate', 'sports', 'pitch review']
    },
    {
      id: 5,
      title:'Football',
      description: 'The game of association football is played in accordance with the Laws of the Game, a set of rules that has been in effect since 1863 and maintained by the IFAB since 1886.',
      creator: 'Star Sports',
      imgUrl: 'https://imgs.search.brave.com/k4G1vMkGTmi1HaGtOv1fLgMQDtIiVkRj49ryvwjr0OE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA3/ODc5NDkxL3Bob3Rv/L2Zvb3RiYWxsLXBs/YXllcnMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW9xT3ZJ/ZUpKSjczbTJubUdk/bEJVVHlvZmRJWWts/bEg0ZmNyWHJlLWFO/S3M9',
      type: 'video',
      tags: ['sports', 'highlights']
     },
    {
      id: 6,
      title: 'Volleyball',
      description: 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other teams court under organized rules.',
      creator: 'TeamSports',
      imgUrl: 'https://imgs.search.brave.com/IbTiDKLvNT9gAuuzbIw4kuPy1xOV4MSM3h5DTzYubP4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taWth/c2FzcG9ydHNjYS0y/LmF6dXJlZWRnZS5u/ZXQvaW1nL3Byb2R1/Y3QvVjIwMFdfMS5q/cGc_ZnY9QkIxQkYw/QjQwRUVBRTYzNkE5/NTRDNjVGQzNCMEFF/QzE',
      type: 'description',
      tags: ['Volleyball', 'Live Cast', 'Sports']
    },

  {
    id: 7,
    title: 'Badminton',
    description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are singles.',
    creator: 'TeamSports',
    imgUrl: 'https://sportsmatik.com/uploads/matik-sports-corner/matik-know-how/badminton1_1562313127.jpg',
    type: 'description',
    tags: ['Badminton', 'Live Cast', 'Sports']
  }
];
}
filterResults(text: string){
  this.sportsContent=this.sportsContent.filter(s=>s.title.toLowerCase().includes(text.toLowerCase()))
  if(this.sportsContent.length>0){
    this.result='Content Found';
    this.bgColor='green' ;

  }else{
    this.result='Content Not Found';
this.bgColor='red' ;
  }
}
}