using CelebrateIt.DTOs;
using CelebrateIt.DTOs.FeedbackDTO;
using CelebrateIt.Models;

namespace CelebrateIt.Mappers
{
    public static class FeedbackMapper
    {
        public static FeedbackDTO ToDTO(this Feedback feedback)
        {
            return new FeedbackDTO
            {
                FeedbackId = feedback.FeedbackId,
                Image = feedback.Image,
                FeedbackMessage = feedback.FeedbackMessage,
                Rating = feedback.Rating,
                UserId = feedback.UserId
            };
        }

        public static Feedback ToModel(this FeedbackDTO feedbackDTO)
        {
            return new Feedback
            {
                FeedbackId = feedbackDTO.FeedbackId,
                Image = feedbackDTO.Image,
                FeedbackMessage = feedbackDTO.FeedbackMessage,
                Rating = feedbackDTO.Rating,
                UserId = feedbackDTO.UserId
            };
        }
    }
}
