import { CategoryComponent } from './category/category.component';
import { ArticlesComponent } from './articles/articles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'category/:id', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
