using CelebrateIt.Models;
using System.ComponentModel.DataAnnotations;

namespace CelebrateIt.DTOs.UserDTO
{
    public class ReqUserRegistrationDTO
    {

        [Required]
        [MaxLength(100)]
        public string UserName { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }

        [Required]
        [MaxLength(255)]
        public string Password { get; set; }

        [Required]
        [MaxLength(15)]
        [Phone]
        public string ContactNumber { get; set; }

        [Required]
        public UserRole UserRole { get; set; }
    }
}
