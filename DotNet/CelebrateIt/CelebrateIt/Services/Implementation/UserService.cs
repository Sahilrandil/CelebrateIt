using AutoMapper;
using CelebrateIt.DTOs.UserDTO;
using CelebrateIt.Models;
using CelebrateIt.Repositories.Interface;
using CelebrateIt.Services.Interface;

namespace CelebrateIt.Services.Implementation
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<UserDto>> GetAllUsersAsync()
        {
            var users = await _repository.GetAllAsync();
            return _mapper.Map<IEnumerable<UserDto>>(users);
        }

        public async Task<UserDto> GetUserByIdAsync(int id)
        {
            var user = await _repository.GetByIdAsync(id);
            return _mapper.Map<UserDto>(user);
        }

        public async Task CreateUserAsync(CreateUserDto createUserDto)
        {
            var user = _mapper.Map<Users>(createUserDto);
            await _repository.AddAsync(user);
        }

        public async Task UpdateUserAsync(int id, UpdateUserDto updateUserDto)
        {
            var existingUser = await _repository.GetByIdAsync(id);
            if (existingUser == null) throw new Exception("User not found");

            _mapper.Map(updateUserDto, existingUser);
            await _repository.UpdateAsync(existingUser);
        }

        public async Task DeleteUserAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
