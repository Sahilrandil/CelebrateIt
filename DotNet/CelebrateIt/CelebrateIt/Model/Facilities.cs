using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using CelebrateIt.Model;

namespace CelebrateIt.Models
{
    public class Facilities : BaseModel
    {
        [Key]
        public int FacilityId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        [MaxLength(512)]
        public string Description { get; set; }

        [Required]
        [MaxLength(512)]
        public string Image { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public double BasePrice { get; set; }

        [Required]
        [Column(TypeName ="DOUBLE DEFAULT 0")]
        
        public double Discount { get; set; } = 0;

        [Required]
        [Column(TypeName = "DOUBLE DEFAULT 0")]
        public double Rating { get; set; }

        // Uncomment these if soft delete or approval functionality is needed
        // [Required]
        // [Column(TypeName = "bit")]
        // public bool IsActive { get; set; } = true;

        // [Required]
        // [Column(TypeName = "bit")]
        // public bool IsApproved { get; set; } = false;

        // Navigation Property: ServiceBookings (One-to-Many)
        public ICollection<Bookings> Bookings { get; set; } = new List<Bookings>();

        // Foreign Key: CategoryId
        [Required]
        [ForeignKey("Categories")]
        public int CategoryId { get; set; }
        public Categories Categories { get; set; } // Navigation property
    }
}
