using CelebrateIt.Services;
using CelebrateIt.DTOs;
using Microsoft.AspNetCore.Mvc;
using CelebrateIt.Models;
using CelebrateIt.Services.Interface;
using CelebrateIt.DTOs.BookingsDTO;

namespace CelebrateIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly IBookingsService _bookingsService;

        public BookingsController(IBookingsService bookingsService)
        {
            _bookingsService = bookingsService;
        }

        //BookingStatus

        [HttpGet("GetBookingsDetailsByBookingStatus")]
        public async Task<ActionResult<List<BookingDTO>>> GetBookingsDetailsByBookingStatus([FromQuery] BookingStatus bookingStatus)
        {
            try
            {
                var bookings = await _bookingsService.GetBookingsDetailsByBookingStatusAsync(bookingStatus);
                if (bookings == null || bookings.Count == 0)
                {
                    return NotFound("No bookings found with the specified status.");
                }
                return Ok(bookings);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        //Bookingadd
        [HttpPost("/add")]
        public IActionResult AddBookingDetails([FromBody] BookingDTO dto) 
        {
            int bookingId = _bookingsService.AddBooking(dto);
            if (bookingId!=-1)
                return Ok(bookingId);
            else
                return BadRequest("Failed to Place Order");
        }


        //GETBYUSERID
        [HttpGet("GetBookingDetailsByUserId/{userId}")]
        public async Task<ActionResult<List<BookingDTO>>> GetBookingDetailsByUserId(int userId)
        {
            try
            {
                var bookings = await _bookingsService.GetBookingDetailsByUserIdAsync(userId);
                if (bookings == null || bookings.Count == 0)
                {
                    return NotFound($"No bookings found for user ID: {userId}");
                }
                return Ok(bookings);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        //bboingID
        [HttpGet("GetBookingDetailsByBookingId/{bookingId}")]
        public async Task<ActionResult<BookingsBillDTO>> GetBookingDetailsByBookingId(int bookingId)
        {
            try
            {
                var booking = await _bookingsService.GetBookingDetailsByBookingIdAsync(bookingId);
                if (booking == null)
                {
                    return NotFound($"No booking found with ID: {bookingId}");
                }
                return Ok(booking);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        [HttpGet("GetBookingsByCategoryId")]
        public async Task<ActionResult<List<BookingDTO>>> GetBookingsByCategoryId([FromQuery] int categoryId)
        {
            try
            {
                var bookings = await _bookingsService.GetBookingsByCategoryIdAsync(categoryId);
                if (bookings == null || bookings.Count == 0)
                {
                    return NotFound("No bookings found for the given category ID.");
                }
                return Ok(bookings);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        // New endpoint for GetAllBookings
        [HttpGet("GetAllBookings")]
        public async Task<ActionResult<List<BookingDTO>>> GetAllBookings()
        {
            try
            {
                var bookings = await _bookingsService.GetAllBookingsAsync();
                if (bookings == null || bookings.Count == 0)
                {
                    return NotFound("No bookings found.");
                }
                return Ok(bookings);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpPost("CancelBooking/{bookingId}")]
        public async Task<IActionResult> CancelBooking(int bookingId)
        {
            bool result = await _bookingsService.CancelBookingAsync(bookingId);
            if (result)
            {
                return Ok("Booking has been cancelled successfully.");
            }
            else
            {
                return NotFound("Booking not found or could not be cancelled.");
            }
        }



    }
}
