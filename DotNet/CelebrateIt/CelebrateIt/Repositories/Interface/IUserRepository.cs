using CelebrateIt.Models;

namespace CelebrateIt.Repositories.Interface
{
    public interface IUserRepository
    {
        Task<IEnumerable<Users>> GetAllAsync();
        Task<Users> GetByIdAsync(int id);
        Task AddAsync(Users user);
        Task UpdateAsync(Users user);
        Task DeleteAsync(int id);
    }
}
