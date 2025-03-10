package com.celebrateit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.celebrateit.pojo.Services;

public interface ServiceDao extends JpaRepository<Services, Integer> {

}

