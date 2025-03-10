package com.celebrateit.service;

import java.util.HashMap;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.celebrateit.dao.UserDao;
import com.celebrateit.dto.LoginRequestDTO;
import com.celebrateit.dto.SignupRequestDTO;
import com.celebrateit.dto.VerifyEmailDTO;
import com.celebrateit.pojo.Users;

import jakarta.transaction.Transactional;
import java.util.Random;

@Service
@Transactional
public class AuthServiceImpl implements AuthService {
	@Autowired
	UserDao userDao;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	AuthenticationManager authManager; 
	@Autowired
	JwtService jwtService;
	@Autowired
	ModelMapper mapper;
	@Autowired
	EmailService emailService;
	@Autowired
	RedisService redisService;
	
	@Override
	public String authenticate(LoginRequestDTO dto) {
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        dto.getEmail(),
                        dto.getPassword()
                )
        );

        Users user = userDao.findByEmail(dto.getEmail())
        		.orElseThrow();
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getUserid());
        claims.put("role", user.getRole());
        return jwtService.generateToken(claims, user);
	}

	@Override
	public String addUser(VerifyEmailDTO dto) {
		// TODO Auto-generated method stub
		//System.out.println("inside addUser");
		if(dto.getOtp().equals(redisService.get(dto.getEmail(), String.class))) {
			SignupRequestDTO userDto = redisService.get("data_"+dto.getEmail(), SignupRequestDTO.class);
			Users user = mapper.map(userDto, Users.class);
			String encryPassword = passwordEncoder.encode(user.getPassword());
			user.setPassword(encryPassword);
			userDao.save(user);
			return "Data Added Successfully";
		}else {
			throw new RuntimeException("Invalid OTP !!!");
		}
	}
	
	private String generateOTP(){
        Random random = new Random();
        int otpValue = 100000 + random.nextInt(900000);
        return String.valueOf(otpValue);
    }

    private void sendVerificationEmail(String email,String otp){
        String subject = "Email verification";
        String body ="your verification otp is: "+otp;
        emailService.sendEmail(email,subject,body);
    }
    
    private String generateEmailBody(String name,String otptext) {
    	 String emailbody = "<div style='width: 100%'>";
         emailbody += "<h1>Hi " + name + ", Thanks for registering</h1>";
         emailbody += "<h2>Please enter OTP text and complete the registeration</h2>";
         emailbody += "<h2>OTP Text is: " + otptext + "</h2>";
         emailbody += "</div>";
         return emailbody;
    }

	@Override
	public String sendOtp(SignupRequestDTO dto) {
		// TODO Auto-generated method stub
		 String otp = generateOTP();
         String emailBody = generateEmailBody(dto.userName,otp);
         
         redisService.set(dto.getEmail(), otp, 300l);
         redisService.set("data_"+dto.getEmail(),dto,300l);
         
         sendVerificationEmail(dto.getEmail(), emailBody);
         return "OTP Send Successfully";
		
	}

	

	
    
	
}
