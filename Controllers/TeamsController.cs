using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MCYSA.Models;

namespace MCYSA.Controllers
{
  
    public class TeamsController : Controller
    {
        private readonly McysaContext _context;

        public TeamsController(McysaContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var vm = _context.Teams.Find(2);
            return View(vm);
        }



       
    }
}
