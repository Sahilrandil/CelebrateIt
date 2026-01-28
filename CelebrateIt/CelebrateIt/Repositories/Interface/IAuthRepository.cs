using CelebrateIt.DTOs.UserDTO;
using CelebrateIt.Models;

namespace CelebrateIt.Repositories.Interface
{
    public interface IAuthRepository
    {
        //Task<Users> GetUserByEmail(string email);

        //Users AuthUserDetails(ReqUserLoginDTO dto);
        bool AddUser(Users users);
      
        
        Users AuthUserDetails(string email, string password);
    }
}
