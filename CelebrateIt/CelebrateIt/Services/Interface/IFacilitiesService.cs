using CelebrateIt.DTOs.FacilitiesDTO;
using CelebrateIt.Models;

namespace CelebrateIt.Services.Interface
{
    public interface IFacilitiesService
    {
        void AddFacility(FacilitiesDto facilityDto); 
        FacilitiesDto GetFacilityById(int id); 
        void DeleteFacility(int id); 
        IEnumerable<FacilitiesDto> GetAllFacilities();
        Facilities Update(int id, FacilitiesDto facility);
    }
}
