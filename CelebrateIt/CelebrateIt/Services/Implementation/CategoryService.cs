using CelebrateIt.DTOs.CategoriesDTO;
using CelebrateIt.Mapper;
using CelebrateIt.Repositories.Interface;
using CelebrateIt.Services.Interface;

namespace CelebrateIt.Services.Implementation
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _repository;

        public CategoryService(ICategoryRepository repository)
        {
            _repository = repository;
        }

        public void AddCategory(CategoryDto categoryDto)
        {
            var category = categoryDto.ToEntity();
            _repository.Add(category);
        }

        public IEnumerable<CategoryDto> GetAllCategories()
        {
            var categories = _repository.GetAll();
            return categories.Select(c => c.ToDto());
        }

        public CategoryDto GetCategoryById(int id)
        {
            var category = _repository.GetById(id);
            return category?.ToDto();
        }
    }
}
