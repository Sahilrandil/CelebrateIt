using CelebrateIt.Data;
using CelebrateIt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CelebrateIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        private readonly CelebrateItContext _context;

        public ContactUsController(CelebrateItContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Create(ContactUs contact)
        {
            if (ModelState.IsValid)
            {
                _context.ContactUs.Add(contact); // Add the contact
                _context.SaveChanges(); // Save to database
                return Ok(contact); // Return the saved contact as a response
            }

            return BadRequest(ModelState); // Return validation errors
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactUs>>> GetAll()
        {
            var contactList = await _context.ContactUs.ToListAsync(); // Fetch all contacts
            return Ok(contactList); // Return the list of contacts
        }
    }
}
