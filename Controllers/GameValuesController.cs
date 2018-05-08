using MCYSA.Models;
using MCYSA.Models.BindingTargets;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using System;

namespace MCYSA.Controllers
{
    [Produces("application/json")]
    [Route("api/Games")]
    public class GameValuesController : Controller
    {
        private McysaContext context;

        public GameValuesController(McysaContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]
        public Game GetGame(int id)
        {
            Game game = context.Games
                .Include(g => g.HomeTeam)
                .Include(g => g.AwayTeam)
                .Include(g => g.Ballpark)
                .First(g => g.Id == id);

            return game;
     
        }

        [HttpGet]
        public IEnumerable<Game> GetGames(bool related = false)
        {
            IQueryable<Game> games = context.Games;

            if(related == true)
            {
                games = games
                    .Include(g => g.AwayTeam)
                    .Include(g => g.HomeTeam)
                    .Include(g => g.Ballpark);
            }

            return games;
        }

        [HttpPost]
        public IActionResult CreateGame([FromBody] GameData gameData)
        {
            if (ModelState.IsValid)
            {
                Game game = gameData.game;
                context.Add(game);
                context.SaveChanges();

                return Ok(game.Id);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceGame(int id, [FromBody] GameData gameData)
        {
            if (ModelState.IsValid)
            {
                Game game = gameData.game;
                game.Id = gameData.Id;
                context.Update(game);
                context.SaveChanges();

                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete]
        public void DeleteGame(int id)
        {
            context.Games.Remove(new Game { Id = id });
            context.SaveChanges();
        }
    }
}