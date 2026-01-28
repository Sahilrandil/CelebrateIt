using CelebrateIt.DTOs.FacilitiesDTO;
using CelebrateIt.Mapper;
using CelebrateIt.Models;
using CelebrateIt.Repositories.Interface;

namespace CelebrateIt.Services.Implementation
{
    public class FacilitiesService : Interface.IFacilitiesService
    {
        private readonly IFacilitiesRepository _repository;

        public FacilitiesService(IFacilitiesRepository repository)
        {
            this._repository = repository;
        }

        //samruddhi
        //public FacilitiesDto GetFacilityById(int id)
        //{
        //    var facility = _repository.GetById(id);
        //    return facility?.ToDto(); // Convert entity to DTO
        //}

        public void AddFacility(FacilitiesDto facilityDto)
        {
            var facility = facilityDto.ToEntity(); 
            _repository.Add(facility);
        }

        public void DeleteFacility(int id)
        {
            _repository.Delete(id);
        }

        public IEnumerable<FacilitiesDto> GetAllFacilities()
        {
            var facilities = _repository.GetAll(); 
            return facilities.Select(f => f.ToDto());
        }

        public FacilitiesDto GetFacilityById(int id)
        {
            var facility = _repository.GetById(id); 
            return facility?.ToDto();
        }

        //shreyash
        public Facilities Update(int id, FacilitiesDto facility)
        {
            var existingFacility = _repository.GetById(id);
            if (existingFacility == null)
            {
                throw new Exception("Does not found");
            }

            existingFacility.Title = facility.Title;
            existingFacility.Description = facility.Description;
            existingFacility.Image = facility.Image;
            existingFacility.BasePrice = facility.BasePrice;
            existingFacility.Discount = facility.Discount;
            existingFacility.Rating = facility.Rating;
            existingFacility.CategoryId = facility.CategoryId;

            _repository.Update(existingFacility);
            return existingFacility;
        }
    }
}
