using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class Ballpark
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string StateId { get; set; }
        public string Zip { get; set; }

        public virtual State State { get; set; }
    }
}
