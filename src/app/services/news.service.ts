import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  API_ENDPOINT: "";
  private comments: any[] = [
    {
      id: 1,
      notice_id: 4,
      sender_user_id: 1,
      receiver_user_id: 0,
      title: "Pregunta 1",
      creationDate: "09-12-2018",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero"
    },
    {
      id: 1,
      notice_id: 4,
      sender_user_id: 1,
      receiver_user_id: 0,
      title: "Pregunta 2",
      creationDate: "09-12-2018",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero"
    },
    {
      id: 1,
      notice_id: 4,
      sender_user_id: 1,
      receiver_user_id: 0,
      title: "Pregunta 3",
      creationDate: "09-12-2018",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero"
    }
  ];
  private notices: any[] = [
    {
      id: 1,
      title: "Noticia 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero maxime explicabo architecto incidunt facilis!",
      creationDate: "10-10-2018"
    },
    {
      id: 2,
      title: "Noticia 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero maxime explicabo architecto incidunt facilis!",
      creationDate: "10-10-2018"
    },
    {
      id: 3,
      title: "Noticia 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero maxime explicabo architecto incidunt facilis!",
      creationDate: "10-20-2018"
    },
    {
      id: 4,
      title: "Noticia 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero maxime explicabo architecto incidunt facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero maxime explicabo architecto incidunt facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero maxime explicabo architecto incidunt facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero maxime explicabo architecto incidunt facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam optio aperiam omnis explicabo fugiat veritatis    minima consectetur labore.Hic sequi laudantium illo iure libero maxime explicabo architecto incidunt facilis!",
      creationDate: "10-12-2018"
    }
  ];
  constructor(private httpClient: HttpClient) {}

  getAllNotices() {
    return this.notices;
    //return this.httpClient.get(this.API_ENDPOINT + "/movies");
  }

  getNoticeById(id: any) {
    return this.notices.filter(x => x.id == id)[0];
  }

  getCommetsByNoticeId(id) {
    return this.comments.filter(x => x.notice_id == id);
  }
}
