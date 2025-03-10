using CelebrateIt.DTOs;
using CelebrateIt.DTOs.BookingsDTO;
using CelebrateIt.Models;

namespace CelebrateIt.Services.Interface
{
    public interface IBookingsService
    {
        int AddBooking(BookingDTO dto);
        Task<List<BookingDTO>> GetBookingsDetailsByBookingStatusAsync(BookingStatus bookingStatus);

        Task<List<BookingsDisplayDTO>> GetBookingDetailsByUserIdAsync(int userId);


        //BookingId
        Task<BookingsBillDTO> GetBookingDetailsByBookingIdAsync(int bookingId);


        Task<List<BookingsShowDTO>> GetBookingsByCategoryIdAsync(int categoryId);

        Task<List<BookingsDisplayDTO>> GetAllBookingsAsync();  // New method

        //cancel Booking
        Task<bool> CancelBookingAsync(int bookingId);

    }
}
