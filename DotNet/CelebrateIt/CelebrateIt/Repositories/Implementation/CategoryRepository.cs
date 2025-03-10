using CelebrateIt.Data;
using CelebrateIt.Models;
using CelebrateIt.Repositories.Interface;

namespace CelebrateIt.Repositories.Implementation
{
    namespace CelebrateIt.Repositories.Implementation
    {
        public class CategoryRepository : ICategoryRepository
        {
            private readonly CelebrateItContext _context;

            public CategoryRepository(CelebrateItContext context)
            {
                _context = context;
            }

            public void Add(Categories category)
            {
                _context.Categories.Add(category);
                _context.SaveChanges();
            }

            public IEnumerable<Categories> GetAll()
            {
                return _context.Categories.ToList();
            }

            public Categories GetById(int id)
            {
                return _context.Categories.Find(id);
            }
        }
    }
}