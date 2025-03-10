package com.celebrateit.dto;

import java.util.List;

import com.celebrateit.pojo.Services;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ServiceResponseFormCategoryDTO {
 private List<ServiceResponseDTO>services;
}
