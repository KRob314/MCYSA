using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MCYSA.Models;

namespace MCYSA.Controllers
{
    public class HomeController : Controller
    {
        private readonly McysaContext _context;

        public HomeController(McysaContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {

            //var mcysaContext = _context.Teams.FirstOrDefault();
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
