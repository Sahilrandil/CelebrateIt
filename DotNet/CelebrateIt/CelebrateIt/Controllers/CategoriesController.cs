using CelebrateIt.DTOs.CategoriesDTO;
using CelebrateIt.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CelebrateIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _service;

        public CategoriesController(ICategoryService service)
        {
            _service = service;
        }

        [HttpPost("Add")]
        public IActionResult AddCategory([FromBody] CategoryDto categoryDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _service.AddCategory(categoryDto);
            return Ok(categoryDto);
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var categories = _service.GetAllCategories();
            return Ok(categories);
        }
    }
}
