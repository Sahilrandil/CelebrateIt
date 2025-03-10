package com.celebrateit.dto;

import java.util.ArrayList;
import java.util.List;

import com.celebrateit.pojo.Categories;
import com.celebrateit.pojo.Bookings;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceResponseDTO extends BaseEntityDTO {
	
	private Integer serviceid;
	private String title;
	private String description;
	private String image;
	private Double basePrice; 
	private Double discount; 
	private Double rating; 
	private Integer categorieid;

}
