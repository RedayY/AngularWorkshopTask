import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  books = [
    {
      title: 'Design Patterns',
      isdn: '1',
      subtitle: 'Elements of Reusable Object-Oriented Software',
    },
    {
      title: 'REST und HTTP',
      isdn: '2',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
    },
    {
      title: 'Eloquent JavaScript',
      isdn: '2',
      subtitle: 'A Modern Introduction to Programming',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
