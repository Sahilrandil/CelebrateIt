using CelebrateIt.Models;

namespace CelebrateIt.Repositories.Interface
{
    public interface ICategoryRepository
    {
        void Add(Categories category);
        Categories GetById(int id);
        IEnumerable<Categories> GetAll();
    }
}
