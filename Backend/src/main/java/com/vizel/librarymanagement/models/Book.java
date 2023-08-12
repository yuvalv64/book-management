package com.vizel.librarymanagement.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "books")
@AllArgsConstructor
@NoArgsConstructor
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "genre")
	private String genre;

	@Column(name = "price")
	private String price;

	@Column(name = "yearOfPublish")
	private String yearOfPublish;

	@Column(name = "description")
	private String description;
}
