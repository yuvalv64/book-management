package com.vizel.librarymanagement;

// import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.annotation.Bean;

// import com.vizel.librarymanagement.models.Book;
// import com.vizel.librarymanagement.repos.BookRepo;

@SpringBootApplication
public class LibraryManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryManagementApplication.class, args);
	}

	// @Bean
	// public CommandLineRunner run(BookRepo repo) {
	// return (args -> {
	// insertBooks(repo);
	// });
	// }

	// private void insertBooks(BookRepo repo) {
	// repo.save(new Book(1, "test", "Horro", "1999", "100.0", "bla bla bla"));
	// repo.save(new Book(2, "tes2222t", "Horro", "1999", "100.0", "bla bla bla"));
	// repo.save(new Book(3, "tesdfsdt", "Ho33rro", "1999", "100.0", "bla bla
	// bla"));
	// }

}
