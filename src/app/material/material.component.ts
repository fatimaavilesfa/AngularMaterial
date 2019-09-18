import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styles: []
})
export class MaterialComponent implements OnInit {

  items = [
    'Item 0',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
  ];

  constructor( ) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray( this.items, event.previousIndex, event.currentIndex );
  }

}
