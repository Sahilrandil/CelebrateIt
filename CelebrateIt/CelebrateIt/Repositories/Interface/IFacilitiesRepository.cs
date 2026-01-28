using CelebrateIt.Models;

namespace CelebrateIt.Repositories.Interface
{
    public interface IFacilitiesRepository
    {
        void Add(Facilities facility); 
        Facilities GetById(int id); 
        void Delete(int id); 
        IEnumerable<Facilities> GetAll();
        void Update(Facilities facilities);
    }
}
