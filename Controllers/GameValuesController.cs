using MCYSA.Models;
using MCYSA.Models.BindingTargets;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using System;
using MCYSA.Services;

namespace MCYSA.Controllers
{
    [Produces("application/json")]
    [Route("api/Games")]
    [ValidateAntiForgeryToken]
    public class GameValuesController : Controller
    {
        //private McysaContext context;
        private IGamesRepository gamesRepo;

        public GameValuesController(IGamesRepository gamesRepository)
        {
            //this.context = context;
            this.gamesRepo = gamesRepository;
        }

        [HttpGet("{id}")]
        public Game GetGame(int id)
        {
            //Game game = context.Games
            //    .Include(g => g.HomeTeam)
            //    .Include(g => g.AwayTeam)
            //    .Include(g => g.Ballpark)
            //    .First(g => g.Id == id);

            Game game = gamesRepo.GetWhere(g => g.Id == id).FirstOrDefault();

            return game;
     
        }

        [HttpGet]
        public IEnumerable<Game> GetGames(bool related = false)
        {
            //IQueryable<Game> games = context.Games;

            //if(related == true)
            //{
            //    games = games
            //        .Include(g => g.AwayTeam)
            //        .Include(g => g.HomeTeam)
            //        .Include(g => g.Ballpark);
            //}

            //return games.OrderBy(g => g.GameDate);

            IEnumerable<Game> games = gamesRepo.GetAll().OrderBy(g => g.GameDate);

            return games;
        }

        [HttpPost]
        public IActionResult CreateGame([FromBody] GameData gameData)
        {
            if (ModelState.IsValid)
            {
                Game game = gameData.game;
                gamesRepo.Create(game);
                gamesRepo.Save();
                ////context.Add(game);
                ////context.SaveChanges();

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
                gamesRepo.Update(game);
                gamesRepo.Save();
                //context.Update(game);
                //context.SaveChanges();

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
            gamesRepo.Delete(new Game { Id = id });
            gamesRepo.Save();
            //context.Games.Remove(new Game { Id = id });
            //context.SaveChanges();
        }

        public void UpdateTeamRecord(GameData gameData)
        {
            //TeamRecord homeTeamRecord = new TeamRecord { TeamId = gameData.HomeTeamId.Value };
            //TeamRecord awayTeamRecord = new TeamRecord { TeamId = gameData.AwayTeamId.Value };
            ////Team homeTeam = context.Teams.Find(gameData.HomeTeamId);
            ////Team awayTeam = context.Teams.Find(gameData.AwayTeamId
            

            //GetTeamRecord(homeTeamRecord);
            //GetTeamRecord(awayTeamRecord);
            //homeTeam.Wins = homeTeamRecord.GamesWon;
            //homeTeam.Losses = homeTeamRecord.GamesLost;
            //awayTeam.Wins = awayTeamRecord.GamesWon;
            //awayTeam.Losses = awayTeamRecord.GamesLost;

            //context.Update(homeTeam);
            //context.Update(awayTeam);
            //context.SaveChanges();

        }

        public void GetTeamRecord(TeamRecord record)
        {
            GetHomeGameRecord(record);
            GetAwayGameRecord(record);
        }

        public void GetHomeGameRecord(TeamRecord record)
        {            
            //List<Game> games = context.Games.Where(g => g.HomeTeamId == record.TeamId).ToList();

            //foreach(var game in games)
            //{
            //    if (game.HomeTeamRuns > game.AwayTeamRuns)
            //    {
            //        record.GamesWon += 1;
            //    }
            //    else if (game.AwayTeamRuns > game.HomeTeamRuns)
            //    {
            //        record.GamesLost += 1;
            //    }
            //}

        }

        public void GetAwayGameRecord(TeamRecord record)
        {
            //List<Game> games = context.Games.Where(g => g.AwayTeamId == record.TeamId).ToList();

            //foreach (var game in games)
            //{
            //    if (game.HomeTeamRuns > game.AwayTeamRuns)
            //    {
            //        record.GamesLost += 1;
            //    }
            //    else if (game.AwayTeamRuns > game.HomeTeamRuns)
            //    {
            //        record.GamesWon += 1;
            //    }
            //}
        }
    }
}