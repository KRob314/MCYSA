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


        [HttpGet("{gameId}/{teamId}")]
        //[Route("api/GetStats_Hitting")]
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

        [Route("GetByPlayer/{playerId}/{gameId}")]
        [HttpGet]
        public Stats_Hitting GetByPlayer(int playerId, int gameId)
        {
            var playerHittingStats = context.Stats_Hitting.Where(s => s.GameId == gameId && s.PlayerId == playerId).FirstOrDefault();

            if (playerHittingStats != null)
            {            
               if(playerHittingStats.Player != null && playerHittingStats.Player.Stats_Hitting != null)
                {
                    playerHittingStats.Player.Stats_Hitting = null;
                }
            }

            return playerHittingStats;
        }


        [HttpPut]
        [Route("UpdatePlayerHittingStats/{playerId}/{gameId}")]
        public IActionResult ReplacePlayerHittingStats(int playerId, int gameId, [FromBody] StatsHittingData viewModel)
        {
            if(ModelState.IsValid)
            {
                GetBattingAvg(viewModel);
                Stats_Hitting s = viewModel.statsHitting;
                context.Update(s);
                context.SaveChanges();

                return Ok(s);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        public void GetBattingAvg(StatsHittingData sb)
        {
            int totalHits = sb.Singles + sb.Doubles + sb.Triples + sb.Homeruns;
            int totalAtBats = sb.AB;
            decimal avg = 0.000M;

            if (totalAtBats > 0)
            {
                avg = Math.Round((decimal)totalHits / (decimal)totalAtBats, 3);
                sb.BattingAverage = avg;
            }
        }

    }
}