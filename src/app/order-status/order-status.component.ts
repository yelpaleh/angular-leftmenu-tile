import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  items = [
    {name: 'Status 1', OrderCount: 234, OrderUnit:435},
    {name: 'Status 2', OrderCount: 35,  OrderUnit: 234},
    {name: 'Status 3', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 4', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 5', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 6', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 7', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 8', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 9', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 10', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 11', OrderCount: 1223, OrderUnit: 562},
    {name: 'Status 12', OrderCount: 1223, OrderUnit: 562},
  ]
  //channelInName= "";
  @Input('ChannelNamePtoC') channelInName!: string;
  @Input() messagelist!: any[];  
  constructor() { }

  ngOnInit(): void {
  
  }

}
