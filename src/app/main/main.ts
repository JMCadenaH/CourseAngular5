import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  template: require('./main.html'),
  styles: [`
    button {
      width:200px;
    }
  `]
})

export class MainComponent implements OnInit {
  isVisible: boolean = false;
  heroes: any = [];

  ngOnInit() {
    this.heroes.push({
      name: 'IronMan',
      color: 'red'
    });

    this.heroes.push({
      name: 'SpiderMan',
      color: 'red'
    });

    this.heroes.push({
      name: 'Thor',
      color: 'red'
    });

    console.log(this.heroes);
    
  }

  handleEventClick(event) {
    console.log(`From Main: ${event}`);
    console.log(event);
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}