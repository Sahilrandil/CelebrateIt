using CelebrateIt.DTOs.CategoriesDTO;
using CelebrateIt.Models;

namespace CelebrateIt.Mapper
{
    public static class CategoryMapper
    {
        public static CategoryDto ToDto(this Categories categories)
        {
            return new CategoryDto
            {
                CategoryName = categories.CategoryName,
                ParentCategory = categories.ParentCategory
            };
        }
        public static Categories ToEntity(this CategoryDto category)
        {
            return new Categories
            {
                CategoryName = category.CategoryName,
                ParentCategory = category.ParentCategory
            };
        }
    }
}
