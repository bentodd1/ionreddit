import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';



@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  constructor( private redditService:RedditService) {
  }

ngOnInit(){
  	 console.log('oninit');
  }

  getPosts(category,limit){
  	this.redditService.getPosts(category, limit).subscribe(response =>{console.log(response);
  	});
  }
}