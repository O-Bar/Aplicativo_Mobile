import { Component } from '@angular/core';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage  {
  public items: any = [];
  public items2: any = []; 
  public items3: any = [];


  constructor() { 
    this.items = [
      { expanded: false }
    ];
    this.items2 = [
      { expanded: false }
    ];
    this.items3 = [
      { expanded: false }
    ];  
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  expandItem2(item2): void {
    if (item2.expanded) {
      item2.expanded = false;
    } else {
      this.items2.map(listItem2 => {
        if (item2 == listItem2) {
          listItem2.expanded = !listItem2.expanded;
        } else {
          listItem2.expanded = false;
        }
        return listItem2;
      });
    }
  }
  expandItem3(item3): void {
    if (item3.expanded) {
      item3.expanded = false;
    } else {
      this.items3.map(listItem3 => {
        if (item3 == listItem3) {
          listItem3.expanded = !listItem3.expanded;
        } else {
          listItem3.expanded = false;
        }
        return listItem3;
      });
    }
  }
}
