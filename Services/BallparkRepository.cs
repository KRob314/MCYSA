using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCYSA.Models;
using Microsoft.EntityFrameworkCore;

namespace MCYSA.Services
{
    public class BallparkRepository : RepositoryBase<Ballpark>, IBallparkRepository
    {
        public BallparkRepository(McysaContext context) : base(context) { }


    }
}
