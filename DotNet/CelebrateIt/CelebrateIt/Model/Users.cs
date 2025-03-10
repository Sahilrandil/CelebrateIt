using System.ComponentModel.DataAnnotations;
using CelebrateIt.Model;

namespace CelebrateIt.Models
{
    public class Users : BaseModel
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [MaxLength(100)]
        public string UserName { get; set; }

        [Required]
        [MaxLength(255)]
        [EmailAddress]
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


        // public bool IsEmailVerified { get; set; }

        public List<Bookings> Bookings { get; set; }
    }
}

