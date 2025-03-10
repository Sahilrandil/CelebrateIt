package com.celebrateit.dto;


import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseEntityDTO {
	private Long id;	
	private LocalDateTime createdOn;	
	private LocalDateTime updatedOn;
}
