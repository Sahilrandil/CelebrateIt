package com.celebrateit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.celebrateit.dto.ContactDTO;
import com.celebrateit.service.ContactService;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(value = {"http://localhost:3000/"})
public class ContactController {
	
	@Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<ContactDTO> createOrUpdateContact(@RequestBody ContactDTO contactDTO) {
        ContactDTO savedContact = contactService.createOrUpdateContact(contactDTO);
        return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
    }
    
    @GetMapping
    public ResponseEntity<List<ContactDTO>> getAllContacts() {
        List<ContactDTO> contacts = contactService.getAllContacts();
        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactDTO> getContactById(@PathVariable Integer id) {
        ContactDTO contact = contactService.getContactById(id);
        if (contact == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable Integer id) {
        contactService.deleteContact(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	

}
