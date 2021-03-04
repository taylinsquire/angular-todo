import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  checked: Boolean = false;
  list: Array<String> = ['Walk the dog', 'Feed the dog', 'Go to work', 'Something else'];

  constructor() { }

  ngOnInit(): void {
  }

}
