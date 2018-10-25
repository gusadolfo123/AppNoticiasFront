import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-news-detail",
  templateUrl: "./news-detail.component.html",
  styleUrls: ["./news-detail.component.css"]
})
export class NewsDetailComponent implements OnInit {
  notice: any;
  id: any;
  comments: any[];
  bloadComments: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _noticeService: NewsService
  ) {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.notice = this._noticeService.getNoticeById(this.id);
    this.comments = this._noticeService.getCommetsByNoticeId(this.id);
  }
  ngOnInit() {}

  loadComments() {
    if (this.bloadComments) this.bloadComments = false;
    else this.bloadComments = true;
  }
}
