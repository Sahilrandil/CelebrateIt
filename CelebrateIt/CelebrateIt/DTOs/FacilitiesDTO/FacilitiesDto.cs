namespace CelebrateIt.DTOs.FacilitiesDTO
{
    public class FacilitiesDto
    {
        public int FacilityId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string Image { get; set; }
        public double BasePrice { get; set; }
        public double Discount { get; set; }
        public double Rating { get; set; }


        public int CategoryId { get; set; }
    }
}