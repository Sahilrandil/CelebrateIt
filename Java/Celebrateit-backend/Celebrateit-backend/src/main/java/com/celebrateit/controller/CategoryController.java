package com.celebrateit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.celebrateit.service.CategoryService;

@RestController
@RequestMapping("/categories")
@CrossOrigin(value = {"http://localhost:3000/"})
public class CategoryController {

	
	@Autowired
	private CategoryService categoryService;
	
	 //Get all services
	   @GetMapping("/{categoryId}")
	   public ResponseEntity<?>getServiceByCategoryId(@PathVariable int categoryId){
		   return ResponseEntity.ok(categoryService.getServiceByCategoryId(categoryId));
	   }
}
