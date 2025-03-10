
using CelebrateIt.DTOs.UserDTO;

using CelebrateIt.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CelebrateIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        //Samruddhi

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _service.GetAllUsersAsync();
            return Ok(users);
        }

        //Samruddhi
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _service.GetUserByIdAsync(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

        //Samruddhi

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserDto createUserDto)
        {
            await _service.CreateUserAsync(createUserDto);
            return CreatedAtAction(nameof(GetUserById), new { id = createUserDto.Email }, createUserDto);
        }

        //Samruddhi
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UpdateUserDto updateUserDto)
        {
            try
            {
                await _service.UpdateUserAsync(id, updateUserDto);
                return NoContent();
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        //Samruddhi

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            await _service.DeleteUserAsync(id);
            return NoContent();
        }
    }
}
