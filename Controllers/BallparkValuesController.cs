using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using MCYSA.Models.BindingTargets;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MCYSA.Controllers
{
    [Produces("application/json")]
    [Route("api/ballparks")]
    [ValidateAntiForgeryToken]
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
            Ballpark result = context.Ballparks
                .Include(b => b.State).First(b => b.Id == id);
                
                

            return result;
        }

        [HttpGet]
        public IEnumerable<Ballpark> GetBallparks(bool related = false)
        {
            IQueryable<Ballpark> query = context.Ballparks;

            return query;
        }

        [HttpPost]
        public IActionResult CreateBallpark([FromBody] BallparkData ballparkData)
        {
            if(ModelState.IsValid)
            {
                Ballpark ballpark = ballparkData.ballpark;

                context.Add(ballpark);
                context.SaveChanges();

                return Ok(ballpark.Id);
            }
            else
            {
                return BadRequest(ModelState);
            }

            
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceBallpark(int id, [FromBody] BallparkData ballparkData)
        {
            if(ModelState.IsValid)
            {
                Ballpark ballpark = ballparkData.ballpark;
                ballpark.Id = ballparkData.Id;
                context.Update(ballpark);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteBallpark(int id)
        {
            context.Ballparks.Remove(new Ballpark { Id = id });
            context.SaveChanges();
        }

    }
}