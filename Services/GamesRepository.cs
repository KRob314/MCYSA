using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.EntityFrameworkCore;

namespace MCYSA.Services
{
    public class GamesRepository : RepositoryBase<Game>, IGamesRepository
    {
        public GamesRepository(McysaContext context) :base(context)
        {
            
        }

        public override IEnumerable<Game> GetAll()
        {
            IEnumerable<Game> games = context.Games.
                Include(g => g.AwayTeam).
                Include(g => g.HomeTeam).
                Include(g => g.Ballpark);

            return games;
        }

        public override IQueryable<Game> GetWhere(Expression<Func<Game, bool>> expression)
        {
            IQueryable<Game> games = context.Games.
                Include(g => g.AwayTeam).
                Include(g => g.HomeTeam).
                Include(g => g.Ballpark);

            if(expression != null)
            {
                games = games.Where(expression);
            }

            return games;
        }
    }
}
