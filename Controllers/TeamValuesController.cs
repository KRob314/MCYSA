using MCYSA.Models;
using MCYSA.Models.BindingTargets;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using System;

namespace MCYSA.Controllers
{
    [Route("api/teams")]
    [ValidateAntiForgeryToken]
    public class TeamValuesController : Controller
    {
        private McysaContext context;

        public TeamValuesController(McysaContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]
        public Team GetTeam(int id)
        {
            Team result = context.Teams
                .Include(t => t.Players)
                .Include(t => t.AgeGroup)
                .Include(t => t.State).ThenInclude( s => s.Teams)
                .Include(t => t.Tournament)
                .First(t => t.Id == id);

            if (result != null)
            {
                if (result.AgeGroup != null)
                {
                    result.AgeGroup.Teams = null;
                }

                if (result.State != null)
                {
                    //result.State= null;
                   result.State.Teams = null;

                }

                if(result.Tournament != null)
                {
                    result.Tournament.Teams = null;
                }
            }



            if (result.Players != null)
            {
                foreach (Player p in result.Players)
                {
                    p.Team = null;
                }
            }

            return result;
        }

        [HttpGet]
        public IEnumerable<Team> GetTeams(string state, int ageGroupId, int tournamentId, bool related = false)
        {
            IQueryable<Team> query = context.Teams; //.Where(t => t.TournamentId == context.Tournaments.First(tourney => tourney.IsCurrent).Id);

            if (!string.IsNullOrWhiteSpace(state))
            {
                query = query.Where(t => t.StateId.ToLower() == state.ToLower());
            }

            if (ageGroupId != 0)
            {
                query = query.Where(t => t.AgeGroupId == ageGroupId);
            }

            if(tournamentId != 0)
            {
                query = query.Where(t => t.TournamentId == tournamentId);
            }

            if (related)
            {
                query = query.Include(t => t.State).Include(t => t.AgeGroup).Include(t => t.Tournament);
                List<Team> data = query.ToList();
                data.ForEach(t =>
                {
                    if (t.AgeGroup != null)
                    {
                        t.AgeGroup.Teams = null;
                    }

                    if (t.State != null)
                    {
                        //result.State= null;
                        t.State.Teams = null;
                    }

                    if(t.Tournament != null)
                    {
                        t.Tournament.Teams = null;
                    }
                });

                return data;
            }
            else
            {
                return query;
            }
        }

        [HttpPost]
        public IActionResult CreateTeam([FromBody] TeamData teamData)
        {
            if (ModelState.IsValid)
            {
                Team t = teamData.Team;

                if (t.AgeGroup != null && t.AgeGroup.Id != 0)
                {
                    context.Attach(t.AgeGroup);
                }

                try
                {
                    context.Add(t);
                    context.SaveChanges();
                }
                catch (Exception ex)
                {
                    var a = ex.Message;
                }

                return Ok(t.Id);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceTeam(int id, [FromBody] TeamData teamData)
        {
            if (ModelState.IsValid)
            {
                Team t = teamData.Team;
                t.Id = teamData.Id;
                context.Update(t);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteTeam(int id)
        {
            context.Teams.Remove(new Team { Id = id });
            context.SaveChanges();
        }
    }
}