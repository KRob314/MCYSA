using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class Player
    {
        [Key]
        public int Id { get; set; }
        public int TeamId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ParentEmail { get; set; }
        public string Number { get; set; }
        public System.DateTime DOB { get; set; }
        public bool SignedWaiver { get; set; }
        public string Positions { get; set; }

        public virtual Team Team { get; set; }
        public virtual ICollection<RegistrationToken> RegistrationTokens { get; set; }
        public virtual ICollection<Waiver_Medical> Waiver_Medical { get; set; }
        public virtual ICollection<Stats_Hitting> Stats_Hitting { get; set; }
    }
}
