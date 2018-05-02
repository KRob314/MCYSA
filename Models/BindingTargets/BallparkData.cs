using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models.BindingTargets
{
    public class BallparkData
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Street { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string StateId { get; set; }

        [Required]
        public string Zip { get; set; }

        public State State { get; set; }

        public Ballpark ballpark => new Ballpark
        {
            Id = Id,
            Name = Name,
            Street = Street,
            City = City,
            StateId = StateId,
            Zip = Zip
        };
    }
}
