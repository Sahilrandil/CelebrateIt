using CelebrateIt.DTOs.UserDTO;
using CelebrateIt.Models;

namespace CelebrateIt.Services
{
    public interface IAuthService
    {
        string AuthUserDetails(ReqUserLoginDTO dto);
        //string AddUser(ReqUserLoginDTO dto);
        string AddUser(ReqUserRegistrationDTO dto);
        string AuthUserDetails(ReqUserRegistrationDTO dto);
    }
}
