package com.celebrateit.service;

import java.util.List;

import com.celebrateit.dto.FeedbackRequestDTO;
import com.celebrateit.dto.FeedbackResponseDTO;
import com.celebrateit.pojo.Feedback;

public interface FeedbackService {
	
	FeedbackResponseDTO addFeedback(FeedbackRequestDTO feedbackRequestDTO);
    FeedbackResponseDTO getFeedbackById(Integer feedbackId);
    List<FeedbackResponseDTO> getAllFeedbacks();

}