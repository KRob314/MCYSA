using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.EntityFrameworkCore;

namespace MCYSA.Services
{
    public class PlayerRepository : RepositoryBase<Player>, IPlayerRepository
    {
        public PlayerRepository(McysaContext context) : base(context) { }

        public override IEnumerable<Player> GetAll()
        {
            IQueryable<Player> players = context.Players;

                players = players.Include(p => p.Team);
                List<Player> data = players.ToList();

                data.ForEach(p =>
                {
                    if (p.Team != null)
                    {
                        p.Team.Players = null;
                    }
                });
            

            return base.GetAll();
        }

        public override IQueryable<Player> GetWhere(Expression<Func<Player, bool>> expression)
        {
            IQueryable<Player> players = context.Players;


                players = players.Include(p => p.Team);
                List<Player> data = players.ToList();

                data.ForEach(p =>
                {
                    if (p.Team != null)
                    {
                        p.Team.Players = null;
                    }
                });


            return players;
        }

        public IQueryable<Player> GetPlayers(Expression<Func<Player, bool>> expression, int teamId)
        {
            IQueryable<Player> players = context.Players;

            players = players.Include(p => p.Team);
            List<Player> data = players.ToList();

            data.ForEach(p =>
            {
                if (p.Team != null)
                {
                    p.Team.Players = null;
                }
            });


            if (teamId != 0)
            {
                players = players.Where(p => p.TeamId == teamId);
            }

            return players;
        }
    }
}
