import { Content } from "./content-interface";

export class ContentList{
private contentArray: Content[];
constructor(){
    this.contentArray = [];
}
get Content():Content[]{
return this.contentArray;
}
add(contentitem:Content):void{
    this.Content.push(contentitem);
}
numbOfItem():number{
return this.contentArray.length;
}

htmlOutput():string{
    let htmlData="";

    for(let item of this.contentArray){
    htmlData+=
    `<div>
    <h2> ${item.title}</h2>
    <p>${item.description}</p>
    <p>${item.creator}</p>
    <img src="${item.imgUrl}"></img>
    <p> ${item.type}</p>

    </div>`;
    }
    return htmlData;
}
}