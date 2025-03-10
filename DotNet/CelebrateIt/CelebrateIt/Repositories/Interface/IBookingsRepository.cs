using CelebrateIt.DTOs;
using CelebrateIt.Models;

namespace CelebrateIt.Repositories.Interface
{
    public interface IBookingsRepository
    {
        int AddBooking(Bookings booking);
        Task<List<Bookings>> GetBookingsByStatusAsync(BookingStatus bookingStatus);

        Task<List<Bookings>> GetBookingsByUserIdAsync(int userId);

        //BookingId
        Task<Bookings> GetBookingByIdAsync(int bookingId);


        Task<List<Bookings>> GetBookingsByCategoryIdAsync(int categoryId);
        Task<List<Bookings>> GetAllBookingsAsync();

        //Task<Bookings> GetBookingByIdAsync(int bookingId);
        void UpdateBooking(Bookings booking);



    }
}
