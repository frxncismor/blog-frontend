import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import CATEGORIES_QUERY from '../apollo/queries/category/categories';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  data: any = {};
  loading = true;
  errors: any;

  private queryCategories: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.queryCategories = this.apollo
      .watchQuery({
        query: CATEGORIES_QUERY,
      })
      .valueChanges.subscribe((result) => {
        console.log('result:', result);
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
  ngOnDestroy(): void {
    this.queryCategories.unsubscribe();
  }
}
