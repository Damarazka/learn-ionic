import { Component, OnInit } from '@angular/core';
import { ServicesItemService } from '../services-item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items : any[] = []

  constructor(private servicesItemService : ServicesItemService) { }

  ngOnInit() {
    this.loadItems()
  }

  loadItems(){
    this.servicesItemService.getItems().subscribe((data)=>{
      this.items = data
    })
  }

  deleteItem(id:number){
    this.servicesItemService.deleteItem(id).subscribe(()=>{
      this.loadItems()
    })
  }
}
