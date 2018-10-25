import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { FormCommentComponent } from "./form-comment/form-comment.component";
import { ListCommentsComponent } from "./list-comments/list-comments.component";

const routes: Routes = [
  { path: "contacto", component: ContactComponent },
  { path: "nosotros", component: AboutUsComponent },
  { path: "noticias/:id", component: NewsDetailComponent },
  { path: "noticias", component: NewsComponent },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", redirectTo: "/", pathMatch: "full" } //para redireccionar cualquier ruta desconocida al index
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NewsListComponent,
    NewsDetailComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    AboutUsComponent,
    FormCommentComponent,
    ListCommentsComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
