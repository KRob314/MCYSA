using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MCYSA.Controllers
{
    //[Produces("application/json")]
    [Route("api/players")]
    public class PlayerValuesController : Controller
    {
        private McysaContext context;

        public PlayerValuesController(McysaContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]
        public Player GetPlayer(int id)
        {
            Player result = context.Players.Where(t => t.Id == id).FirstOrDefault();

            return result;
        }

        [HttpGet]
        public IEnumerable<Player> GetPlayers(int teamId)
        {
            IQueryable<Player> players = context.Players;

            if(teamId != 0)
            {
                players = players.Where(p => p.TeamId == teamId);
            }

            return players;
        }
    }
}