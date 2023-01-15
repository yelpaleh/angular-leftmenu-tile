import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-cmp',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() public ChannelNamePtoC = new EventEmitter<any>();
  //ChannelNamePtoC = null;

  channelItems = [
    {ChannelName: 'Channel 1', RouteChannel: "order-status"},
    {ChannelName: 'Channel 2', RouteChannel: "order-status"},
    {ChannelName: 'Channel 3', RouteChannel: "order-status"},
    {ChannelName: 'Channel 4', RouteChannel: "order-status"},
  ]
  messagelist = [{  
    id: 1,  
    msg: 'Test first notification'  
}, {  
    id: 2,  
    msg: 'Test first notification'  
} ];  
  constructor() { }

  ngOnInit(): void {
  }
  handleMenuClick (ChannelName: any) {
    alert(ChannelName)
    this.ChannelNamePtoC.emit(ChannelName);
  }
}
