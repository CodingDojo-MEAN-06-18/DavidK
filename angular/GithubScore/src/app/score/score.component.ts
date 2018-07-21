import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubService } from '../github.service';
import { User } from '../user';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  gitName: string;
  user: User;
  score: number;
  comment: string;
  found: boolean;


  OnSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form submitted', this.gitName);
    this.githubService.getUser(this.gitName)
      .subscribe(
      success => {
        this.found = true;
        this.user = new User(
          success['alias'],
          success['followers'],
          success['public_repos']
        );
        console.log(this.user);
      },

      error => {
        console.log('Error retrieving user.', error.error['message']);
        this.score = null;
        this.user = null;
        this.comment = null;
        this.found = false;
      });
    form.reset();
  }

  ngOnInit() {
  }

}
