using CelebrateIt.DTOs.CategoriesDTO;

namespace CelebrateIt.Services.Interface
{
    public interface ICategoryService
    {
        void AddCategory(CategoryDto categoryDto);
        CategoryDto GetCategoryById(int id);
        IEnumerable<CategoryDto> GetAllCategories();
    }
}
