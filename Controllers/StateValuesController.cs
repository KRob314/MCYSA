using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.AspNetCore.Mvc;

namespace MCYSA.Controllers
{
    [Route("api/states")]
    [ValidateAntiForgeryToken]
    public class StateValuesController : Controller
    {
        private McysaContext context;

       public StateValuesController(McysaContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<State> GetStates(bool getTeamStatesOnly =false)
        {
           if(getTeamStatesOnly == false)
                return context.States;

            var teams = context.Teams.ToList();
            List<State> states = new List<State>();

            foreach (var t in teams)
            {
                var state = t.State;

                if (states.Contains(state) == false)
                {
                    states.Add(state);
                }
            }

            IEnumerable<State> s = states;

            return s.OrderBy(st => st.StateId);

        }

        //[HttpGet]
        //public IEnumerable<State> GetTeamStates()
        //{
        //    var teams = context.Teams.ToList();
        //    List<State> states = new List<State>();

        //    foreach(var t in teams)
        //    {
        //        var state = t.State;
               
        //        if(states.Contains(state) == false)
        //        {
        //            states.Add(state);
        //        }
        //    }

        //    return states.OrderBy(s => s.StateId);
        //}
        

    }
}