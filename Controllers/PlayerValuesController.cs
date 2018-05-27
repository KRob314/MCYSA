using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using MCYSA.Models.BindingTargets;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public IEnumerable<Player> GetPlayers(int teamId = 0, bool related = false)
        {
            IQueryable<Player> players = context.Players;

            if(related == true)
            {
                players = players.Include(p => p.Team);
                List<Player> data = players.ToList();

                data.ForEach(p =>
                {
                    if (p.Team != null)
                    {
                        p.Team.Players = null;
                    }
                });
            }
          
            if(teamId != 0)
            {
                players = players.Where(p => p.TeamId == teamId);
            }

            return players;
        }

        [HttpPost]
        public IActionResult CreatePlayer([FromBody] PlayerData playerData)
        {
            if(ModelState.IsValid)
            {
                Player p = playerData.player;

                context.Add(p);
                context.SaveChanges();

                return Ok(p.Id);
            }
           else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplacePlayer(int id, [FromBody] PlayerData playerData)
        {
            if(ModelState.IsValid)
            {
                Player p = playerData.player;
                p.Id = playerData.Id;
                context.Update(p);
                context.SaveChanges();

                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public void DeletePlayer(int id)
        {
            context.Players.Remove(new Player { Id = id });
            context.SaveChanges();
        }
    }
}