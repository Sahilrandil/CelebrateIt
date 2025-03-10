package com.celebrateit.service;

import com.celebrateit.dto.LoginRequestDTO;
import com.celebrateit.dto.SignupRequestDTO;
import com.celebrateit.dto.VerifyEmailDTO;

public interface AuthService {

	String authenticate(LoginRequestDTO dto);

	String addUser(VerifyEmailDTO dto);
	String sendOtp(SignupRequestDTO dto);
	
	

}
