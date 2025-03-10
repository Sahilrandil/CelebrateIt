using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using CelebrateIt.Model;

namespace CelebrateIt.Models
{
    public class Bookings:BaseModel
    {
        [Key]
        public int BookingId { get; set; }

        [Required]
        [MaxLength(255)]
        public string EventLocation { get; set; }

        [Required]
        [MaxLength(10)]
        public string PinCode { get; set; }

        [Required]
        public DateTime EventDate { get; set; }

        [MaxLength(1000)]
        public string EventDetails { get; set; }

        [Required]
        public int Quantity { get; set; } = 1;

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalPrice { get; set; }

        //[Required]
        //[Column(TypeName = "decimal(18,2)")]
        //public decimal AdvancePayment { get; set; }

        //[Required]
        //[Column(TypeName = "decimal(18,2)")]
        //public decimal RemainingPayment { get; set; }

        [Required]
        public PaymentMethod PaymentMethod { get; set; }

        //[Required]
        //public PaymentStatus PaymentStatus { get; set; }

        [Required]
        public BookingStatus BookingStatus { get; set; }

        [ForeignKey("Users")]
        public int UserId { get; set; }
        public Users Users { get; set; } // Navigation property

        [ForeignKey("Facilities")]
        public int FacilityId { get; set; }
        public Facilities Facilities { get; set; } // Navigation property

        [ForeignKey("Categories")]
        public int CategoryId { get; set; }
        public Categories Category { get; set; } // Navigation property
    }
}

/*
 * Input:  EventLocation, pincode, Eventdate, eventdetails, paymentmethod, bookingstatus, userid, facilityid, categoryid, totalpayment
 */