using AutoMapper;
using CelebrateIt.DTOs;
using CelebrateIt.DTOs.BookingsDTO;
using CelebrateIt.DTOs.UserDTO;
using CelebrateIt.Models;

namespace CelebrateIt.Mapper
{
    public class MapperProfile:Profile
    {
        public MapperProfile() 
        {
            CreateMap<Users, ReqUserRegistrationDTO>().ReverseMap();
            CreateMap<BookingDTO, Bookings>().ReverseMap();
            CreateMap< Bookings, BookingsBillDTO>()
                .ForMember(dest => dest.UName, opt => opt.MapFrom(source => source.Users.UserName))
                .ForMember(dest => dest.UEmail, opt => opt.MapFrom(source => source.Users.Email))
                .ForMember(dest => dest.UContactNumber, opt => opt.MapFrom(source => source.Users.ContactNumber))
                 .ForMember(dest => dest.FTitle, opt => opt.MapFrom(source => source.Facilities.Title))
                  .ForMember(dest => dest.FBasePrice, opt => opt.MapFrom(source => source.Facilities.BasePrice))
                   .ForMember(dest => dest.FDiscount, opt => opt.MapFrom(source => source.Facilities.Discount))
                    .ForMember(dest => dest.BCategoryName, opt => opt.MapFrom(source => source.Category.CategoryName)
).ReverseMap();

            //cancel   //Img,Categoryname,Title,baseP,Discout,Total,Paymentstatus,evetdate
            CreateMap<Bookings, BookingsDisplayDTO>()
                .ForMember(dest => dest.FImage, opt => opt.MapFrom(source => source.Facilities.Image))
                .ForMember(dest => dest.FTitle, opt => opt.MapFrom(source => source.Facilities.Title))
                 .ForMember(dest => dest.FBasePrice, opt => opt.MapFrom(source => source.Facilities.BasePrice))
                  .ForMember(dest => dest.FDiscount, opt => opt.MapFrom(source => source.Facilities.Discount))
                   .ForMember(dest => dest.BCategoryName, opt => opt.MapFrom(source => source.Category.CategoryName)
).ReverseMap();


            //SHOW ON ADMIN
            CreateMap<Bookings, BookingsShowDTO>()
               .ForMember(dest => dest.UName, opt => opt.MapFrom(source => source.Users.UserName))
               .ForMember(dest => dest.UEmail, opt => opt.MapFrom(source => source.Users.Email))
               .ForMember(dest => dest.UContactNumber, opt => opt.MapFrom(source => source.Users.ContactNumber))
                .ForMember(dest => dest.FTitle, opt => opt.MapFrom(source => source.Facilities.Title))
                 .ForMember(dest => dest.FBasePrice, opt => opt.MapFrom(source => source.Facilities.BasePrice))
                  .ForMember(dest => dest.FDiscount, opt => opt.MapFrom(source => source.Facilities.Discount))
                  .ForMember(dest => dest.FImage, opt => opt.MapFrom(source => source.Facilities.Image))
                   .ForMember(dest => dest.BCategoryName, opt => opt.MapFrom(source => source.Category.CategoryName)
).ReverseMap();


        }
    }
}
