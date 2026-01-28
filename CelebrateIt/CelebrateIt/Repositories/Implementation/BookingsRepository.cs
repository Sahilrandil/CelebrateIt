using CelebrateIt.Data;
using CelebrateIt.Models;
using CelebrateIt.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace CelebrateIt.Repositories.Implementation
{
    

    public class BookingsRepository : IBookingsRepository
    {
        private readonly CelebrateItContext _context;

        public BookingsRepository(CelebrateItContext context)
        {
            _context = context;
        }

        public int AddBooking(Bookings booking)
        {
            try
            {
                _context.Bookings.Add(booking);
                _context.SaveChanges();
                return booking.BookingId;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Data Insertion Failed");
            }
        }

        //Bookingstatus
        public async Task<List<Bookings>> GetBookingsByStatusAsync(BookingStatus bookingStatus)
        {
            return await _context.Bookings
                .Where(b => b.BookingStatus == bookingStatus)
                .ToListAsync();
        }

        //GETDETAILS BYUSERID
        public async Task<List<Bookings>> GetBookingsByUserIdAsync(int userId)
        {
            return await _context.Bookings
                .Where(b => b.UserId == userId)
                .Include(b => b.Users).Include(b => b.Facilities).Include(b => b.Category)
                .ToListAsync();
        }

        //BookingId
        public async Task<Bookings> GetBookingByIdAsync(int bookingId)
        {
            return await _context.Bookings.Include(b=>b.Users).Include(b => b.Facilities).Include(b => b.Category).FirstOrDefaultAsync(b => b.BookingId == bookingId);
        }

        public async Task<List<Bookings>> GetBookingsByCategoryIdAsync(int categoryId)
        {
            return await _context.Bookings
                .Where(b => b.CategoryId == categoryId)
                .Include(b => b.Users).Include(b => b.Facilities).Include(b => b.Category)
                .ToListAsync();
        }

        //BookService
        // Implement GetAllBookingsAsync
        public async Task<List<Bookings>> GetAllBookingsAsync()
        {
            return await _context.Bookings
                .Where(b => b.BookingStatus != BookingStatus.CANCELLED) // Exclude canceled bookings
                .Include(b => b.Users).Include(b => b.Facilities).Include(b => b.Category)
                .ToListAsync();
        }

        public void UpdateBooking(Bookings booking)
        {
            _context.Bookings.Update(booking);
            _context.SaveChanges();
        }

    }
}
