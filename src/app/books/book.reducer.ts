import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";
import { AddBook, AddBookSuccess, AddBookFailure, RemoveBook } from "./book.actions";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  
  on(AddBook, (state) => { return state }),
  on(AddBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
  on(AddBookFailure, (state, {error}) => {
    console.error('Error adding book:', error);
    return state;
  }),

  on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId)),

);