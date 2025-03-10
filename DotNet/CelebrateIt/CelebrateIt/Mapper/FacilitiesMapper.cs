using CelebrateIt.DTOs.FacilitiesDTO;
using CelebrateIt.Models;
using System.Runtime.CompilerServices;

namespace CelebrateIt.Mapper
{
    public static class FacilitiesMapper
    {
        public static FacilitiesDto ToDto(this Facilities facilities)
        {
            return new FacilitiesDto
            {
                FacilityId=facilities.FacilityId,
                Title = facilities.Title,
                Image = facilities.Image,
                Description = facilities.Description,
                BasePrice = facilities.BasePrice,
                Discount = facilities.Discount,
                Rating = facilities.Rating,
                CategoryId = facilities.CategoryId
            };
        }

        public static Facilities ToEntity(this FacilitiesDto facilitiesDto)
        {
            return new Facilities
            {
                FacilityId=facilitiesDto.FacilityId,
                Title = facilitiesDto.Title,
                Image = facilitiesDto.Image,
                Description = facilitiesDto.Description,
                BasePrice = facilitiesDto.BasePrice,
                Discount = facilitiesDto.Discount,
                Rating = facilitiesDto.Rating,
                CategoryId = facilitiesDto.CategoryId

            };
        }

    }
}
