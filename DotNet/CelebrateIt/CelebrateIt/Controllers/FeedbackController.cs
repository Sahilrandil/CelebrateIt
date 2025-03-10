using CelebrateIt.DTOs;
using CelebrateIt.DTOs.FeedbackDTO;
using CelebrateIt.Services;
using CelebrateIt.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CelebrateIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedbackService _service;

        public FeedbackController(IFeedbackService service)
        {
            _service = service;
        }

        // GET: api/Feedback
        [HttpGet]
        public async Task<ActionResult<List<FeedbackDTO>>> GetAllFeedbacks()
        {
            var feedbacks = await _service.GetAllFeedbacksAsync();
            return Ok(feedbacks);
        }

        // GET: api/Feedback/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<FeedbackDTO>> GetFeedbackById(int id)
        {
            var feedback = await _service.GetFeedbackByIdAsync(id);
            if (feedback == null)
            {
                return NotFound();
            }
            return Ok(feedback);
        }

        // POST: api/Feedback
        [HttpPost]
        public async Task<ActionResult> CreateFeedback([FromBody] FeedbackDTO feedbackDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _service.CreateFeedbackAsync(feedbackDTO);
            return CreatedAtAction(nameof(GetFeedbackById), new { id = feedbackDTO.FeedbackId }, feedbackDTO);
        }

        //delete
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFeedbackById(int id)
        {
            await _service.DeleteFeedbackByIdAsync(id);
            return NoContent();
        }
    }
}
