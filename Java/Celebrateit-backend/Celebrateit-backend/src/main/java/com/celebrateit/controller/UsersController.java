package com.celebrateit.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.celebrateit.dto.ApiResponse;
import com.celebrateit.dto.UsersResponseDTO;
import com.celebrateit.service.UsersService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000/")
public class UsersController {

    private final UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping("/{userid}")
    public ResponseEntity<?> getUsersDetailsById(@PathVariable Integer userid) {
        try {
            UsersResponseDTO userDetails = usersService.getUsersDetailsById(userid);
            return ResponseEntity.ok(userDetails);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
        }
    }
}
