using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MCYSA.Models;
using MCYSA.Models.BindingTargets;

namespace MCYSA.Controllers
{
    [Route("api/tournaments")]
    [ValidateAntiForgeryToken]
    public class TournamentValuesController : Controller
    {
        private McysaContext context;

        public TournamentValuesController(McysaContext context)
        {
            this.context = context;
        }

        public IEnumerable<Tournament> GetTournaments()
        {
            return context.Tournaments;
        }

        [HttpGet("{id}")]
        public Tournament GetTournament(int id)
        {
            return context.Tournaments.Where(t => t.Id == id).FirstOrDefault();
        }

        [HttpPost]
        public IActionResult CreateTournament([FromBody] TournamentData tournamentData)
        {
            if (ModelState.IsValid)
            {
  
                Tournament t = tournamentData.tournament;

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
        public IActionResult ReplaceTeam(int id, [FromBody] TournamentData tournamentData)
        {
            if (ModelState.IsValid)
            {

                Tournament t = tournamentData.tournament;
                t.Id = tournamentData.Id;

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
            context.Tournaments.Remove(new Tournament { Id = id });
            context.SaveChanges();
        }
    }
}