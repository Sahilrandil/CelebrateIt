using CelebrateIt.DTOs.FeedbackDTO;
using CelebrateIt.Mappers;
using CelebrateIt.Repositories.Interface;
using CelebrateIt.Services.Interface;

namespace CelebrateIt.Services.Implementation
{
    public class FeedbackService : IFeedbackService
    {
        private readonly IFeedbackRepository _repository;

        public FeedbackService(IFeedbackRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<FeedbackDTO>> GetAllFeedbacksAsync()
        {
            var feedbacks = await _repository.GetAllFeedbacksAsync();
            return feedbacks.Select(f => f.ToDTO()).ToList();
        }

        public async Task<FeedbackDTO> GetFeedbackByIdAsync(int id)
        {
            var feedback = await _repository.GetFeedbackByIdAsync(id);
            return feedback?.ToDTO();
        }

        public async Task CreateFeedbackAsync(FeedbackDTO feedbackDTO)
        {
            var feedback = feedbackDTO.ToModel();
            await _repository.AddFeedbackAsync(feedback);
            await _repository.SaveChangesAsync();
        }

        //delete
        public async Task DeleteFeedbackByIdAsync(int id)
        {
            await _repository.DeleteFeedbackByIdAsync(id);
        }
    }
}
