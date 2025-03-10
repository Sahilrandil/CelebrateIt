using CelebrateIt.DTOs.FeedbackDTO;

namespace CelebrateIt.Services.Interface
{
    public interface IFeedbackService
    {
        Task<List<FeedbackDTO>> GetAllFeedbacksAsync();
        Task<FeedbackDTO> GetFeedbackByIdAsync(int id);
        Task CreateFeedbackAsync(FeedbackDTO feedbackDTO);

        Task DeleteFeedbackByIdAsync(int id);


    }
}
