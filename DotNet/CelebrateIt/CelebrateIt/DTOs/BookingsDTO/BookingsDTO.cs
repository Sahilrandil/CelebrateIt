using CelebrateIt.Models;

namespace CelebrateIt.DTOs
{
    public class BookingDTO
    {
        public int BookingId { get; set; }
        public string EventLocation { get; set; }
        public string PinCode { get; set; }
        public DateTime EventDate { get; set; }
        public string EventDetails { get; set; }
        public decimal TotalPrice { get; set; }
        //public decimal AdvancePayment { get; set; }
        //public decimal RemainingPayment { get; set; }
        public PaymentMethod PaymentMethod { get; set; }

        //public PaymentStatus PaymentStatus { get; set; }
        public BookingStatus BookingStatus { get; set; }
       public int UserId { get; set; }
        public int FacilityId { get; set; }
       public int CategoryId { get; set; }
    }
}
