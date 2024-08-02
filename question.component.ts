import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  public name: string = "";
  constructor(private questionservice: QuestionService) { }
  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getallquestion();
  }
  getallquestion() {
    this.questionservice.getquestionjson().subscribe(res => {
      console.log(res);

    })
  }
}
