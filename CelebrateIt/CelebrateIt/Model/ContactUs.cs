using System.ComponentModel.DataAnnotations;
using CelebrateIt.Model;

namespace CelebrateIt.Models
{
    public class ContactUs : BaseModel
    {
        [Key]
        public int ContactId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [MaxLength(255)]
        [EmailAddress]
        public string EmailId { get; set; }

        [Required]
        [MaxLength(15)]
        [Phone]
        public string? MobileNumber { get; set; }

        [Required]
        [MaxLength(1000)]
        public string Message { get; set; }
    }
}
