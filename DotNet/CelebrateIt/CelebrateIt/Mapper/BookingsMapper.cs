using CelebrateIt.DTOs;
using CelebrateIt.Models;

namespace CelebrateIt.Mapper
{
    public static class BookingMapper
    {
        public static BookingDTO ToDto(this Bookings booking)
        {
            return new BookingDTO
            {
                BookingId = booking.BookingId,
                EventLocation = booking.EventLocation,
                PinCode = booking.PinCode,
                EventDate = booking.EventDate,
                EventDetails = booking.EventDetails,
                TotalPrice = booking.TotalPrice,
                //AdvancePayment = booking.AdvancePayment,
                //RemainingPayment = booking.RemainingPayment,
                PaymentMethod = booking.PaymentMethod,
                //PaymentStatus = booking.PaymentStatus,
                BookingStatus = booking.BookingStatus,
               UserId = booking.UserId,
                FacilityId = booking.FacilityId,
                CategoryId = booking.CategoryId
            };
        }

        public static Bookings ToEntity(this BookingDTO bookingDto)
        {
            return new Bookings
            {
                //BookingId = bookingDto.BookingId,
                EventLocation = bookingDto.EventLocation,
                PinCode = bookingDto.PinCode,
                EventDate = bookingDto.EventDate,
                EventDetails = bookingDto.EventDetails,
                TotalPrice = bookingDto.TotalPrice,
                //AdvancePayment = bookingDto.AdvancePayment,
                //RemainingPayment = bookingDto.RemainingPayment,
                PaymentMethod = bookingDto.PaymentMethod,
                //PaymentStatus = bookingDto.PaymentStatus,
                BookingStatus = bookingDto.BookingStatus,
                UserId = bookingDto.UserId,
               FacilityId = bookingDto.FacilityId,
               CategoryId = bookingDto.CategoryId
            };
        }
    }
}
