using CelebrateIt.Data;
using CelebrateIt.Models;
using CelebrateIt.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace CelebrateIt.Repositories.Implementation
{
    
        public class FeedbackRepository : IFeedbackRepository
        {
            private readonly CelebrateItContext _context;

            public FeedbackRepository(CelebrateItContext context)
            {
                _context = context;
            }

            public async Task<List<Feedback>> GetAllFeedbacksAsync()
            {
                return await _context.feedback.Include(f => f.Users).ToListAsync();
            }

            public async Task<Feedback> GetFeedbackByIdAsync(int id)
            {
                return await _context.feedback.Include(f => f.Users).FirstOrDefaultAsync(f => f.FeedbackId == id);
            }

            public async Task AddFeedbackAsync(Feedback feedback)
            {
                await _context.feedback.AddAsync(feedback);
            }

            public async Task SaveChangesAsync()
            {
                await _context.SaveChangesAsync();
            }

        //delete 
        public async Task DeleteFeedbackByIdAsync(int id)
        {
            var feedback = await GetFeedbackByIdAsync(id);
            if (feedback != null)
            {
                _context.feedback.Remove(feedback);
                await _context.SaveChangesAsync();
            }
        }
    }
    
}
