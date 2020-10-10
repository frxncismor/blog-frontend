import { CategoryComponent } from './category/category.component';
import { ArticlesComponent } from './articles/articles.component';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    ArticleComponent,
    CategoryComponent,
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
