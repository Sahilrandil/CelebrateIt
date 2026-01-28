namespace CelebrateIt.DTOs.FeedbackDTO
{
    public class FeedbackDTO
    {
        public int FeedbackId { get; set; }
        public string Image { get; set; }
        public string FeedbackMessage { get; set; }
        public decimal Rating { get; set; }
        public int UserId { get; set; }
    }
}
