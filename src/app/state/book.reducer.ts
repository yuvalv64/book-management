import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../models/book.model';
import * as booksActions from './book.actions';

export interface BookState {
    booksList: Book[],
    loading: boolean,
    loaded: boolean,
    error: string
}



export function booksReducer(state: any, action: booksActions.Actions) {

    switch (action.type) {
        case booksActions.BookActionTypes.LOAD_BOOKS: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case booksActions.BookActionTypes.LOAD_BOOKS_SUCCESS: {
            return {
                ...state,
                booksList: action.payload,
                loading: false,
                loaded: true
            }
        }
        case booksActions.BookActionTypes.LOAD_BOOKS_FAIL: {
            return {
                ...state,
                booksList: [],
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}


const getBooksListFeatureState = createFeatureSelector<BookState>(
    "booksList"
)


export const getAllBooks = createSelector(
    getBooksListFeatureState, (state: BookState) => state.booksList
)

export const getBooksLoading = createSelector(
    getBooksListFeatureState, (state: BookState) => state.loading
)

export const getBooksLoaded = createSelector(
    getBooksListFeatureState, (state: BookState) => state.loaded
)

export const getError = createSelector(
    getBooksListFeatureState, (state: BookState) => state.error
)