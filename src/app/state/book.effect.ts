import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Book } from "../models/book.model";
import * as bookActions from "./book.actions";
import { ApiService } from "../shared/api.service";

@Injectable()
export class BookEffect {

    constructor(private actions$: Actions,
        private apiService: ApiService) {

    }

    // $ at the end - means Observable
    loadBooks$: Observable<Action> = createEffect(
        () => this.actions$.pipe(
            // listening to all actions - if it's type of LoadBooks - do somethig
            ofType<bookActions.LoadBooks>(
                bookActions.BookActionTypes.LOAD_BOOKS),
            // we are using mergeMap cause we need to return Observable and then
            // do another pipe to map the output with a new Action LoadBooksSuccess
            mergeMap(() =>
                this.apiService.getAllBooks().pipe(
                    map(
                        (booksList: Book[]) =>
                            new bookActions.LoadBooksSuccess(booksList)
                        // bookActions.LoadBooksSuccess is the Observable<Action> for loadBooks$ 
                    ),
                    catchError(err => of(new bookActions.LoadBooksFail(err)))
                )
            )
        )
    );
}