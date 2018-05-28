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
    [ValidateAntiForgeryToken]
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

                UpdateTeamRecord(gameData);

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

        public void UpdateTeamRecord(GameData gameData)
        {
            List<Game> homeTeamGames = context.Games.Where(g => g.HomeTeamId == gameData.HomeTeamId || g.AwayTeamId == gameData.HomeTeamId).ToList();
            List<Game> awayTeamGames = context.Games.Where(g => g.HomeTeamId == gameData.AwayTeamId || g.AwayTeamId == gameData.AwayTeamId).ToList();
            int homeTeamWins = 0;
            int homeTeamLosses = 0;
            int awayTeamWins = 0;
            int awayTeamLosses = 0;

            foreach(var game in homeTeamGames)
            {
                if(game.HomeTeamRuns > game.AwayTeamRuns)
                {
                    homeTeamWins += 1;
                }
                else if(game.AwayTeamRuns > game.HomeTeamRuns)
                {
                    homeTeamLosses += 1;
                }
            }
           
            foreach(var game in awayTeamGames)
            {
                if(game.AwayTeamRuns > game.HomeTeamRuns)
                {
                    awayTeamWins += 1;
                }
                else if(game.HomeTeamRuns != 0 && game.AwayTeamRuns != 0 && game.HomeTeamRuns > game.AwayTeamRuns)
                {
                    awayTeamLosses += 1;
                }
            }

            Team homeTeam = context.Teams.Find(gameData.HomeTeamId);
            Team awayTeam = context.Teams.Find(gameData.AwayTeamId);

            homeTeam.Wins = homeTeamWins;
            homeTeam.Losses = homeTeamLosses;
            awayTeam.Wins = awayTeamWins;
            awayTeam.Losses = awayTeamLosses;

            context.Update(homeTeam);
            context.Update(awayTeam);
            context.SaveChanges();

        }
    }
}