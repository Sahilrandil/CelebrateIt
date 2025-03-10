using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using CelebrateIt.DTOs.UserDTO;
using CelebrateIt.Models;
using CelebrateIt.Repositories.Interface;
using CelebrateIt.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;


namespace CelebrateIt.Service.Implementation
{
    public class AuthService : IAuthService
    {
        IAuthRepository _repository;
        IMapper _mapper;
        
        private readonly IConfiguration _configuration;

        public AuthService(IAuthRepository repository, IMapper mapper, IConfiguration configuration)
        {
            _repository = repository;
            _mapper = mapper;
           
            _configuration = configuration;
        }

        public string AddUser(ReqUserRegistrationDTO dto)
        {
            Users user = _mapper.Map<Users>(dto);
            //user.Password = _encryptionService.EncryptData(user.Password);
            var passwordHasher = new PasswordHasher<Users>();
            user.Password = passwordHasher.HashPassword(user, user.Password);

            if (_repository.AddUser(user))
            {
                return "User Registered Successfully !!";
            }
            else
            {
                return "User Registeration Failed !!";
            }
        }

        public string AuthUserDetails(ReqUserLoginDTO dto)
        {
            if (dto.Email != null && dto.Password != null)
            {
                //dto.Password = _encryptionService.EncryptData(dto.Password);
                Users user = _repository.AuthUserDetails(dto.Email, dto.Password);
                if (user != null)
                {
                    var claims = new List<Claim> {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim("Id", user.UserId.ToString()),
                        new Claim("Email", user.Email),
                        new Claim("UserRole", user.UserRole.ToString())
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(10),
                        signingCredentials: signIn);

                    var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);
                    return jwtToken;
                }
                else
                {
                    throw new Exception("user is not valid");
                }
            }
            else
            {
                throw new Exception("credentials are not valid");
            }

        }

       

        public string AuthUserDetails(ReqUserRegistrationDTO dto)
        {
            throw new NotImplementedException();
        }
    }
}