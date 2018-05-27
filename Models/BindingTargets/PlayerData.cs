using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models.BindingTargets
{
    public class PlayerData
    {
        [Required]
        public int Id { get; set; }

        //[Required]
        public int TeamId { get; set; }

        [Required]
        public DateTime DOB { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        //[Required]
        public string StateId { get; set; }


        public State State { get; set; }
        public Team Team { get; set; }

        public Player player => new Player
        {
            Id = Id,
            TeamId = TeamId,
            FirstName = FirstName,
            LastName = LastName,
            DOB = DOB
        };
    }
}
