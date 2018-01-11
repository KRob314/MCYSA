using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class State
    {
        public string StateId { get; set; }
        public string CountryId { get; set; }
        public string Name { get; set; }

        public virtual Country Country { get; set; }
        public virtual ICollection<Team> Teams { get; set; }
        public virtual ICollection<Waiver_Medical> Waiver_Medical { get; set; }
    }
}
