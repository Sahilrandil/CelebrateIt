package com.celebrateit.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.celebrateit.dao.CategoryDao;
import com.celebrateit.dto.ServiceRequestDTO;
import com.celebrateit.dto.ServiceResponseDTO;
import com.celebrateit.dto.ServiceResponseFormCategoryDTO;
import com.celebrateit.pojo.Categories;
import com.celebrateit.pojo.Services;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	CategoryDao categoryDao;
	
	@Autowired
	ModelMapper modelMapper;

	@Override
	public ServiceResponseFormCategoryDTO getServiceByCategoryId(Integer categoryId) {
		Categories category=categoryDao.findById(categoryId).orElseThrow(()->new RuntimeException("Invalid Category Id"));
		List<Services>services=category.getServices();
		List<ServiceResponseDTO> responselist = new ArrayList<>();
		for(Services s: services) {
			ServiceResponseDTO sdto=modelMapper.map(s, ServiceResponseDTO.class);
			responselist.add(sdto);
		}
		return new ServiceResponseFormCategoryDTO(responselist);
	}

	

}
