package com.celebrateit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.celebrateit.custom_exceptions.ResourceNotFoundException;
import com.celebrateit.dao.UserDao;
import com.celebrateit.dto.UsersResponseDTO;
import com.celebrateit.dto.UsersUpdateDTO;
import com.celebrateit.pojo.Users;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private ModelMapper mapper;

    @Override
    public UsersResponseDTO getUsersDetailsById(Integer userid) {
        Users userEntity = userDao.findById(userid)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid User ID!!!!"));
        System.out.println("User Entity: " + userEntity);
        UsersResponseDTO dto = mapper.map(userEntity, UsersResponseDTO.class);
        dto.setUserName(userEntity.getUsername());
        return dto;
    }
    
    
//    @Override
//    public UsersResponseDTO updateUserDetailsById(Integer userid, UsersUpdateDTO userUpdateDTO) {
//        Users userEntity = userDao.findById(userid)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + userid));
//
//        // Update fields
//        userEntity.setUsername(userUpdateDTO.getUserName());
//        userEntity.setEmail(userUpdateDTO.getEmail());
//        userEntity.setContactNumber(userUpdateDTO.getContactNumber());
//
//        // Save updated user
//        Users updatedUser = userDao.save(userEntity);
//
//        // Convert to DTO and return response
//        return mapper.map(updatedUser, UsersResponseDTO.class);
//    }
}
