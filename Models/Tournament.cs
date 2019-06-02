using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class Tournament
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsCurrent { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }

        public virtual ICollection<Team> Teams { get; set; }
    }
}
