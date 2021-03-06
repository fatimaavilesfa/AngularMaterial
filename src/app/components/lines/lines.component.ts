import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem,  CdkDragStart, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  data: any = {
    name: '',
    title: ''
  };

  icons: any = [1, 2, 3];
  items: any = [4,7];
  // items: any = [{
  //   state : "",
  //   position : ""
  // }];
  childItems: any = [5,6];


  state = "";
  position = "";
  X : number;
  Y : number;






  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }



  edit() {
    console.log(this.items);
    console.log(this.data );
    console.log(this.items.position);
    console.log(this.items.X);
    console.log(this.items.Y);
  }

  reciveData($event) {
    this.data = $event;
  }

  dragStarted(event: CdkDragStart) {
    this.items.state = 'dragStarted';
    console.log(event);

  }

  dragEnded(event: CdkDragEnd) {
    this.items.state = 'dragEnded';
    console.log(event);
  }

  dragMoved(event: CdkDragMove) {
    this.items.position = ` Position X: ${event.pointerPosition.x} - Y: ${event.pointerPosition.y}`;
    this.items.X = event.pointerPosition.x;
    this.items.Y = event.pointerPosition.y;
    // console.log(event)
  }

  concat() {
    if( this.items.X < this.items.Y ) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }

}
