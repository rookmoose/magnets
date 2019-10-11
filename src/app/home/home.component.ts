import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  original: number[] = [];
  expected: number[] = [];
  solution: number[] = [];

  constructor() { 
    for(var i = 0; i < 5; i++){
      this.original.push(i);
      this.expected.push(i);
    }
    for(var i = this.original.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.original[i];
      this.original[i] = this.original[j];
      this.original[j] = temp;
    }
  }

  checkSolution(){
    for(var i = 0; i < this.expected.length; i++){
      if (this.solution[i] != this.expected[i])
        return false;
    }
    return true;
  }

  getSecondListPopulated() {
    return this.expected.length == this.solution.length;
  }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  
}
