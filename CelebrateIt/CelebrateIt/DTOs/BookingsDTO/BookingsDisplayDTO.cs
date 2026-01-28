using CelebrateIt.Models;

namespace CelebrateIt.DTOs.BookingsDTO
{
    public class BookingsDisplayDTO

    {

        //Img,Categoryname,Title,baseP,Discout,Total,Paymentstatus,evetdate
        public int BookingId { get; set; }
       
        public DateTime EventDate { get; set; }
       
        //public string EventDetails { get; set; }
        public decimal TotalPrice { get; set; }


        public BookingStatus BookingStatus { get; set; }
        //public int UserId { get; set; }
        
        // public int FacilityId { get; set; }
        public string FTitle { get; set; }
        public double FBasePrice { get; set; }
        public double FDiscount { get; set; }

        public string FImage { get; set; }
        //public int CategoryId { get; set; }
        public string BCategoryName { get; set; }
    }
}
