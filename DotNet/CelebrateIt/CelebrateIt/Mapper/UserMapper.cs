using AutoMapper;
using CelebrateIt.DTOs.UserDTO;
using CelebrateIt.Models;

namespace CelebrateIt.Mapper
{
    public class UserMapper : Profile
    {
        public UserMapper()
        {
            CreateMap<Users, UserDto>();
            CreateMap<CreateUserDto, Users>();
            CreateMap<UpdateUserDto, Users>().ForMember(dest => dest.UserRole, opt => opt.Ignore());
        }
    }
}
