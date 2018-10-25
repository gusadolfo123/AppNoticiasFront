import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  notices: any[];
  constructor(private _noticeService: NewsService) {
    this.notices = _noticeService.getAllNotices();
  }

  ngOnInit() {}
}
