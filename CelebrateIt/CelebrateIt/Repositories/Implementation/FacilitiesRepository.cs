using CelebrateIt.Data;
using CelebrateIt.Models;

namespace CelebrateIt.Repositories.Implementation
{
    public class FacilitiesRepository : Interface.IFacilitiesRepository
    {
        private readonly CelebrateItContext _context;

        public FacilitiesRepository(CelebrateItContext context)
        {
            _context = context;
        }


        public void Add(Facilities facility)
        {
            _context.Facilities.Add(facility);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var facility = _context.Facilities.Find(id); if (facility != null) { _context.Facilities.Remove(facility); _context.SaveChanges(); }
        }

        public IEnumerable<Facilities> GetAll()
        {
            return _context.Facilities.ToList();
        }

        public Facilities GetById(int id)
        {
            return _context.Facilities.Find(id);
        }

        //shreyash
        public void Update(Facilities facility)
        {
            var updateFacility = _context.Facilities.Find(facility.FacilityId);
            if (updateFacility != null)
            {
                _context.Facilities.Update(updateFacility);
                _context.SaveChanges();
            }
        }
    }
}
