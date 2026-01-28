using CelebrateIt.Models;

namespace CelebrateIt.Repositories.Interface
{
    public interface IFeedbackRepository
    {
        Task<List<Feedback>> GetAllFeedbacksAsync();
        Task<Feedback> GetFeedbackByIdAsync(int id);
        Task AddFeedbackAsync(Feedback feedback);
        Task SaveChangesAsync();
        Task DeleteFeedbackByIdAsync(int id);
    }
}
