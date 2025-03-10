package com.celebrateit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ServiceRequestDTO {
	private Integer serviceid;
    private String title;
    private String description;
    private String image;
    private Double basePrice;
    private Double discount;
    private Double rating;
    private Integer categoryId;
}