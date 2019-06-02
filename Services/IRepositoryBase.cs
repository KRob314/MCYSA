using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MCYSA.Services
{
    public interface IRepositoryBase<T>
    {
        IEnumerable<T> GetAll();
        IQueryable<T> GetWhere(Expression<Func<T, bool>> expression);
         void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
        void Save();
    }
}
