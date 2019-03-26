import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.","David Brinkley","Dany Times",0,0,new Date(2019,5,17)),
    new Quote(2,"Challenges are what make life interesting and overcoming them is what makes life meaningful.","Joshua J. Marine","Jayman Times",0,0,new Date(2019,7,5)),
    new Quote(2,"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.","Leonardo Da Vinci","Vinci Times",0,0,new Date(2019,8,15)),
  ]

  quoteSubmission(quote){
    quote.id +=1;
    quote.actualDate = new Date(quote.actualDate);
    this.quotes.push(quote);
  }

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  upVote(index){
      this.quotes[index].upvotes +=1;
  }
  downVote(index){
      this.quotes[index].downVote +=1;
  }

  deleteQuote(quoteDelete,index){
    if(quoteDelete){
      let deletion = confirm(`Are you sure you want to delete this Quote`)
      if(deletion){
        this.quotes.splice(index,1);
      }

    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
