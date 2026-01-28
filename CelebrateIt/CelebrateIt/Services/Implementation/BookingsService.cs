using CelebrateIt.DTOs;
using CelebrateIt.Repositories;
using CelebrateIt.Mapper;
using CelebrateIt.Models;
using CelebrateIt.Services.Interface;
using CelebrateIt.Repositories.Interface;
using CelebrateIt.Repositories.Implementation;
using AutoMapper;
using CelebrateIt.DTOs.BookingsDTO;

namespace CelebrateIt.Services;



public class BookingsService : IBookingsService
{
    private readonly IBookingsRepository _bookingsRepository;
    private readonly IMapper _mapper;
    

    public BookingsService(IBookingsRepository bookingsRepository, IMapper mapper)
    {
        _bookingsRepository = bookingsRepository;
        _mapper = mapper;
    }

    public int AddBooking(BookingDTO dto)
    {
        try
        {
            Bookings booking = _mapper.Map<Bookings>(dto);
            //_bookingsRepository.AddBooking(booking);
            return _bookingsRepository.AddBooking(booking); 
        }
        catch (Exception e)
        {
            return -1;
        }
    }

    //BookingStatus
    public async Task<List<BookingDTO>> GetBookingsDetailsByBookingStatusAsync(BookingStatus bookingStatus)
    {
        var bookings = await _bookingsRepository.GetBookingsByStatusAsync(bookingStatus);
        return bookings.Select(b => b.ToDto()).ToList();
    }


    //GetDetails By UseRiD
    public async Task<List<BookingsDisplayDTO>> GetBookingDetailsByUserIdAsync(int userId)
    {
        var bookings = await _bookingsRepository.GetBookingsByUserIdAsync(userId);
        var dto = _mapper.Map<List<BookingsDisplayDTO>>(bookings);
        return dto;
    }


    //BookingId
    public async Task<BookingsBillDTO> GetBookingDetailsByBookingIdAsync(int bookingId)
    {
        var booking = await _bookingsRepository.GetBookingByIdAsync(bookingId);
         return booking == null ? null : _mapper.Map<BookingsBillDTO>(booking);
        //return booking; 
    }

    public async Task<List<BookingsShowDTO>> GetBookingsByCategoryIdAsync(int categoryId)
    {
        var bookings = await _bookingsRepository.GetBookingsByCategoryIdAsync(categoryId);
        var dto = _mapper.Map<List<BookingsShowDTO>>(bookings);
        return dto;
    }
    //BookService

    public async Task<List<BookingsDisplayDTO>> GetAllBookingsAsync()
    {
        var bookings = await _bookingsRepository.GetAllBookingsAsync();  // Fetch only non-canceled bookings
        var dto=_mapper.Map<List<BookingsDisplayDTO>>(bookings);
        return dto;
    }


    // Implement the CancelBooking method
    public async Task<bool> CancelBookingAsync(int bookingId)
    {
        try
        {
            var booking = await _bookingsRepository.GetBookingByIdAsync(bookingId);
            if (booking != null)
            {
                booking.BookingStatus = BookingStatus.CANCELLED;
                _bookingsRepository.UpdateBooking(booking);  // Update the status in the database
                return true;
            }
            return false;
        }
        catch (Exception)
        {
            return false;
        }
    }
}
