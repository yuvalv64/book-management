package com.vizel.librarymanagement.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vizel.librarymanagement.models.Book;

public interface BookRepo extends JpaRepository<Book, Long> {

}
