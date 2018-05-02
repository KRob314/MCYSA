using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MCYSA.Controllers
{
    [Produces("application/json")]
    [Route("api/ballparks")]
    public class BallparkValuesController : Controller
    {
        private McysaContext context;

        public BallparkValuesController(McysaContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]
        public Ballpark GetBallpark(int id)
        {
            Ballpark result = context.Ballparks.First(b => b.Id == id);

            return result;
        }

        [HttpGet]
        public IEnumerable<Ballpark> GetBallparks(bool related = false)
        {
            IQueryable<Ballpark> query = context.Ballparks;

            return query;
        }
    }
}