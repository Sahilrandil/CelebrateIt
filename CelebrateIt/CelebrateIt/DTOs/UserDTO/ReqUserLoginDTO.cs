using System.ComponentModel.DataAnnotations;

namespace CelebrateIt.DTOs.UserDTO
{
    public class ReqUserLoginDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
