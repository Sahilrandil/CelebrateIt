package com.celebrateit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.celebrateit.pojo.Contact;

public interface ContactDao extends JpaRepository<Contact, Integer> {

}