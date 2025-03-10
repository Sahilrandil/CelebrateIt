package com.celebrateit.pojo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Version;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Feedback extends BaseEntity {
	
    //@Version
    //private int version; // version field for optimistic locking
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Integer feedbackId;

	  private String imageUrl;

	  private String message;
	  private double rating;
	  
	  @ManyToOne
	  @JoinColumn(name = "user_id", nullable = false)
	  private Users user;
}