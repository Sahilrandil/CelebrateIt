package com.celebrateit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.celebrateit.pojo.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Integer> {

}