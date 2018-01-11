using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class RegistrationToken
    {
        public int Id { get; set; }
        public int PlayerId { get; set; }
        public System.DateTime DateCreated { get; set; }
        public string Token { get; set; }

        public virtual Player Player { get; set; }
    }
}
