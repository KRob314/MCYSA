using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using MCYSA.Models.BindingTargets;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MCYSA.Services;

namespace MCYSA.Controllers
{
    //[Produces("application/json")]
    [Route("api/players")]
    [ValidateAntiForgeryToken]
    public class PlayerValuesController : Controller
    {
        private McysaContext context;
        private IPlayerRepository playerRepo;

        public PlayerValuesController(IPlayerRepository playerRepository)
        {
            this.playerRepo = playerRepository;
        }

        [HttpGet("{id}")]
        public Player GetPlayer(int id)
        {
            //Player result = context.Players.Where(t => t.Id == id).FirstOrDefault();
            Player player = playerRepo.GetWhere(t => t.Id == id).FirstOrDefault();

            return player;
        }

        [HttpGet]
        public IEnumerable<Player> GetPlayers(int teamId = 0, bool related = false)
        {
            IQueryable<Player> players = playerRepo.GetWhere(p => p.TeamId == teamId);

            //if(related == true)
            //{
            //    players = players.Include(p => p.Team);
            //    List<Player> data = players.ToList();

            //    data.ForEach(p =>
            //    {
            //        if (p.Team != null)
            //        {
            //            p.Team.Players = null;
            //        }
            //    });
            //}
          
            //if(teamId != 0)
            //{
            //    players = players.Where(p => p.TeamId == teamId);
            //}

            return players;
        }

        [HttpPost]
        public IActionResult CreatePlayer([FromBody] PlayerData playerData)
        {
            if(ModelState.IsValid)
            {
                Player p = playerData.player;

                playerRepo.Create(p);
                playerRepo.Save();

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
                p.Email = playerData.Email;
                p.TeamId = playerData.TeamId;
                playerRepo.Update(p);
                playerRepo.Save();

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
            playerRepo.Delete(new Player { Id = id });
            playerRepo.Save(); 
        }
    }
}