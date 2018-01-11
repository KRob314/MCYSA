using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class Country
    {
        public string CountryId { get; set; }
        public string Name { get; set; }


        public virtual ICollection<State> States { get; set; }
        public virtual ICollection<Team> Teams { get; set; }
        public virtual ICollection<Waiver_Medical> Waiver_Medical { get; set; }
    }
}
