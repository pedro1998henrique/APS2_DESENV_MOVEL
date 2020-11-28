import { News2FeedsService } from './../news2--feeds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  articles: any;
  constructor(private newsService: News2FeedsService) {
    this.loadNews();
   }

  ngOnInit() {
  }
  loadNews(){
    this.newsService.getNews('q=bitcoin&from=2020-10-28&sortBy=publishedAt').subscribe( news => {
      this.articles = news['articles'];
      console.log(this.articles);
    });

  }
}
