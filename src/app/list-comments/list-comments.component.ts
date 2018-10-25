import { Component, OnInit, Input } from "@angular/core";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-list-comments",
  templateUrl: "./list-comments.component.html",
  styleUrls: ["./list-comments.component.css"]
})
export class ListCommentsComponent implements OnInit {
  @Input("user_id")
  user_id: string;

  @Input("notice_id")
  notice_id: string;

  listComments: any[];

  constructor(private _service: NewsService) {}

  ngOnInit() {
    this.listComments = this._service.getCommetsByNoticeId(this.notice_id);
  }
}
