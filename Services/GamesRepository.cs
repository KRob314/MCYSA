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

        public override void Create(Game entity)
        {
            base.Create(entity);

            var teamPlayers = context.Players.Where(p => p.TeamId == entity.HomeTeamId || p.TeamId == entity.AwayTeamId);

            foreach(var p in teamPlayers)
            {
                Stats_Hitting stats_Hitting = new Stats_Hitting()
                {
                    PlayerId = p.Id,
                    GameId = entity.Id,
                    PA = 0,
                    AB = 0,
                    Singles = 0,
                    Doubles = 0,
                    Triples = 0,
                    Homeruns = 0,
                    HBP = 0,
                    BB = 0,
                    BattingAverage = .000M
                };

                context.Stats_Hitting.Add(stats_Hitting);
            }

            context.SaveChanges();

        }
    }
}
