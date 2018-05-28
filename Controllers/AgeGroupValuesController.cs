using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MCYSA.Models;


namespace MCYSA.Controllers
{
    [Route("api/agegroups")]
    [ValidateAntiForgeryToken]
    public class AgeGroupValuesController : Controller
    {
        private McysaContext context;

        public AgeGroupValuesController(McysaContext context)
        {
            this.context = context;
        }

        
        public IEnumerable<AgeGroup> GetAgeGroups()
        {
            return context.AgeGroups;
        }
    }
}