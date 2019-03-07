using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using MCYSA.Models.BindingTargets;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MCYSA.Services;

namespace MCYSA.Controllers
{
    [Produces("application/json")]
    [Route("api/ballparks")]
    [ValidateAntiForgeryToken]
    public class BallparkValuesController : Controller
    {
        private IBallparkRepository repo;
     

        public BallparkValuesController(IBallparkRepository repository)
        {
            this.repo = repository;
        }

        [HttpGet("{id}")]
        public Ballpark GetBallpark(int id)
        {
            Ballpark result = repo.GetWhere(b => b.Id == id).FirstOrDefault();            

            return result;
        }

        [HttpGet]
        public IEnumerable<Ballpark> GetBallparks(bool related = false)
        {
            var result = repo.GetAll();

            return result;
        }

        [HttpPost]
        public IActionResult CreateBallpark([FromBody] BallparkData ballparkData)
        {
            if(ModelState.IsValid)
            {
                Ballpark ballpark = ballparkData.ballpark;
                repo.Create(ballpark);
                repo.Save();

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
                repo.Update(ballpark);
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
            repo.Delete(new Ballpark { Id = id });
        }

    }
}