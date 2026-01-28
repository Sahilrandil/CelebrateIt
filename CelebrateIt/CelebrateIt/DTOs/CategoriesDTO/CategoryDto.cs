using CelebrateIt.Models;

namespace CelebrateIt.DTOs.CategoriesDTO
{
    public class CategoryDto
    {
        public string CategoryName { get; set; }
        public ParentCategory ParentCategory { get; set; }
    }
}
