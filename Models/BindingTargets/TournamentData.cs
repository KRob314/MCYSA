using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models.BindingTargets
{
    public class TournamentData
    {
        [Required]
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public bool IsCurrent { get; set; }

        public Tournament tournament => new Tournament
        {
            Id = Id,
            Name = Name,
            StartDate = StartDate,
            EndDate = EndDate,
            IsCurrent = IsCurrent
        };
    }
}
