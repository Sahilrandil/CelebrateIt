using System.Security.Authentication;
using CelebrateIt.DTOs.UserDTO;
using CelebrateIt.Model;
using CelebrateIt.Services;
using CelebrateIt.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;

namespace CelebrateIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IEmailService emailService;
        private readonly IDistributedCache _cache;

        public AuthController(IAuthService authService,IEmailService emailService, IDistributedCache cache)
        {
            _authService = authService;
            this.emailService = emailService;
            _cache = cache;

        }

        //----otp
        private string GenerateOTP(string userEmail)
        {
            Random random = new Random();
            string randomno = random.Next(0, 1000000).ToString("D6");
            var options = new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
            };
            _cache.SetStringAsync(userEmail, randomno, options);
            return randomno;
        }

        private void SendOtpMail(string useremail, string OtpText, string Name)
        {
            var mailrequest = new MailRequest();
            mailrequest.Email = useremail;
            mailrequest.Subject = "Thanks for registering: OTP";
            mailrequest.EmailBody = GenerateEmailBody(Name, OtpText);
            this.emailService.SendEmail(mailrequest);
        }

        private string GenerateEmailBody(string name, string otptext)
        {
            string emailbody = "<div style='width: 100%;>";
            emailbody += "<h1>Hi " + name + ", Thanks for registering</h1>";
            emailbody += "<h2>Please enter OTP text and complete the registeration</h2>";
            emailbody += "<h2>OTP Text is: " + otptext + "</h2>";
            emailbody += "</div>";
            return emailbody;
        }
        //--------otp

        [HttpPost("/register_user")]
        public IActionResult RegisterUser([FromBody] ReqUserRegistrationDTO dto)
        {
            string otp = GenerateOTP(dto.Email);
            string emailBody = GenerateEmailBody(dto.UserName,otp);
            SendOtpMail(dto.Email, emailBody, dto.UserName);

            string userData = JsonConvert.SerializeObject(dto);

            var options = new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
            };
            _cache.SetString("data_" + dto.Email, userData, options);
            
            // string response = _authService.AddUser(dto);
            return Ok("OTO Generated");
        }

        //store data in radis

        [HttpPost("/validate_email")]
        public IActionResult ValidateEmail([FromBody] ReqValidateEmailDto dto)
        {
            int userOtp=dto.Otp;
            int genOtp =int.Parse (_cache.GetString(dto.Email));
            if(userOtp==genOtp)
            {
               ReqUserRegistrationDTO userData= JsonConvert.DeserializeObject<ReqUserRegistrationDTO>(_cache.GetString("data_" + dto.Email));
                string response=_authService.AddUser(userData);
                _cache.Remove(dto.Email);
                _cache.Remove("data_"+dto.Email);  //for separate key data_
                return Ok(response);    
            }

            return Ok("Invalid OTP");
        }

        //Add user

        [HttpPost]
        public IActionResult AuthUser([FromBody] ReqUserLoginDTO dto)
        {
            try
            {
                string token = _authService.AuthUserDetails(dto);
                return Ok(token);
            }
            catch (InvalidCredentialException e)
            {
                return Unauthorized(e.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500, new { error = e.Message });
            }
        }

    }
}

        
       

    

