using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.AspNetCore.Mvc;

namespace MCYSA.Controllers
{
    [Route("api/states")]
    public class StateValuesController : Controller
    {
        private McysaContext context;

       public StateValuesController(McysaContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<State> GetStates()
        {
            return context.States;
        }

        

    }
}