package com.vizel.librarymanagement.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vizel.librarymanagement.models.Book;
import com.vizel.librarymanagement.repos.BookRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BookController {

	@Autowired
	private BookRepo bookRepo;

	@GetMapping("/books")
	public ResponseEntity<List<Book>> getAllBooks() {
		List<Book> books = new ArrayList<Book>();
		try {
			bookRepo.findAll().forEach(books::add);
			return new ResponseEntity<>(books, HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@GetMapping("/bookInfo/{id}")
	public ResponseEntity<Book> getBookInfo(@PathVariable String id) {
		try {
			Book book = bookRepo.findById(Long.valueOf(id)).get();
			return new ResponseEntity<>(book, HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@GetMapping("/removeBook/{id}")
	public void removeBook(@PathVariable String id) {
		try {
			bookRepo.deleteById(Long.valueOf(id));
			// return new ResponseEntity<>("Book Deleted", HttpStatus.OK);
		} catch (Exception ex) {
			throw ex;
		}
	}

	@PostMapping("/performBookAction")
	public void performBookAction(@RequestBody Book book) {
		try {
			bookRepo.save(book);
			// return new ResponseEntity<>("Book Updated / Added", HttpStatus.OK);
		} catch (Exception ex) {
			throw ex;
		}
	}

}
