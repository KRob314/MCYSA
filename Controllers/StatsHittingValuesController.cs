using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MCYSA.Models.BindingTargets;
using Microsoft.EntityFrameworkCore;

namespace MCYSA.Controllers
{
    [Produces("application/json")]
    [Route("api/StatsHittingValues")]
    [ValidateAntiForgeryToken]
    public class StatsHittingValuesController : Controller
    {
        private McysaContext context;

        public StatsHittingValuesController(McysaContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public IEnumerable<Stats_Hitting> GetStats_Hitting(int gameId, int teamId)
        {
            IQueryable<Stats_Hitting> hittingStats = context.Stats_Hitting.Where(s => s.GameId == gameId).Include(s => s.Player);
            var playersByTeam = context.Players.Where(p => p.TeamId == teamId);

            List<Stats_Hitting> data = (from p in playersByTeam
                                        from hs in hittingStats
                                        where hs.PlayerId == p.Id
                                        select hs).ToList();

            data.ForEach(p =>
            {
                p.Game = null;
                p.Player.Stats_Hitting = null;
            });

            return data;

        }

    }
}