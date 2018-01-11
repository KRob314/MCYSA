using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class AgeGroup
    {
        public int Id { get; set; }
        public int Age { get; set; }
        public string Name { get; set; }

     
        public virtual ICollection<Team> Teams { get; set; }

    }
}
