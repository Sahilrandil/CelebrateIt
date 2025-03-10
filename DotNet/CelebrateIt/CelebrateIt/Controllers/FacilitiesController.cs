using CelebrateIt.DTOs.FacilitiesDTO;
using CelebrateIt.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CelebrateIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacilitiesController : ControllerBase
    {
        private readonly IFacilitiesService _service;
         public FacilitiesController(IFacilitiesService service)
        {
            _service = service;
        }

        //samruddhi
        [HttpGet("GetByFacilityId/{facilityId}")]
        public IActionResult GetFacilityById(int facilityId)
        {
            var facility = _service.GetFacilityById(facilityId);
            if (facility == null)
            {
                return NotFound("Facility not found.");
            }
            return Ok(facility);
        }

        //Trupti
        [HttpPost("Add")] 
        public IActionResult AddFacilities([FromBody] FacilitiesDto facilityDto) 
        { 
            _service.AddFacility(facilityDto); 
            return Ok(facilityDto); 
          }

        //Trupti
        [HttpGet("GetByCategory/{categoryId}")] 
        public IActionResult GetByCategory(int categoryId) 
        { 
            var facilities = _service.GetAllFacilities().Where(f => f.CategoryId == categoryId).ToList(); 
            return Ok(facilities); 
        }

        //Trupti
        [HttpDelete("Delete/{facilityId}")]
        public IActionResult DeleteFacility(int facilityId)
        {
            var facility = _service.GetAllFacilities().FirstOrDefault(f => f.FacilityId == facilityId);
            if (facility == null)
            {
                return NotFound();
            }
            _service.DeleteFacility(facilityId);
            return NoContent();
        }

        //Shreyash

        [HttpPut("Update/{facilityId}")]
        public IActionResult UpdateFacility(int facilityId, [FromBody] FacilitiesDto updatedFacility)
        {
            if (facilityId != updatedFacility.FacilityId)
            {
                return BadRequest("Facility ID mismatch.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = _service.Update(facilityId, updatedFacility);
                return NoContent();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}
