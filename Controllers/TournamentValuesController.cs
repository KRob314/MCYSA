using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MCYSA.Models;

namespace MCYSA.Controllers
{
    [Route("api/tournaments")]
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
    }
}