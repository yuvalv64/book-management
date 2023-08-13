
import { Action } from "@ngrx/store";
import { Book } from "../models/book.model";

export enum BookActionTypes {
    LOAD_BOOKS = "[Book] Load Books",
    LOAD_BOOKS_SUCCESS = "[Book] Load Book Success",
    LOAD_BOOKS_FAIL = "[Book] Load Book Fail"
}

export class LoadBooks implements Action {
    readonly type = BookActionTypes.LOAD_BOOKS
}

export class LoadBooksSuccess implements Action {
    readonly type = BookActionTypes.LOAD_BOOKS_SUCCESS
    constructor(public payload: Book[]) { }
}

export class LoadBooksFail implements Action {
    readonly type = BookActionTypes.LOAD_BOOKS_FAIL;
    constructor(public payload: string) { }
}

export type Actions = LoadBooks | LoadBooksSuccess | LoadBooksFail;