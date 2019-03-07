using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.EntityFrameworkCore;

namespace MCYSA.Services
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected McysaContext context { get; set; }

        public RepositoryBase(McysaContext Context)
        {
            this.context = Context;
        }

        public void Create(T entity)
        {
            context.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            context.Set<T>().Remove(entity);
        }

        public virtual IEnumerable<T> GetAll()
        {
            return context.Set<T>();
        }

        public virtual IQueryable<T> GetWhere(Expression<Func<T, bool>> expression)
        {
            return context.Set<T>().Where(expression);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void Update(T entity)
        {
            context.Set<T>().Update(entity);
        }
    }
}
