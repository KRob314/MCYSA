using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class Team
    {
        [Key]
        public int Id { get; set; }
        public int AgeGroupId { get; set; }
        public string StateId { get; set; }
        public string CountryId { get; set; }
        public int TournamentId { get; set; }
        public string UserId { get; set; }
        public string TeamName { get; set; }
        public string ManagerFirstName { get; set; }
        public string ManagerLastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string PocFirstName { get; set; }
        public string PocLastName { get; set; }
        public string PocPhone { get; set; }
        public string PocEmail { get; set; }
        public System.DateTime RegisteredDate { get; set; }
        public bool IsVetted { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public string Record
        {
            get { return Wins + "-" + Losses; }
        }

        public virtual AgeGroup AgeGroup { get; set; }
       // public virtual AspNetUser AspNetUser { get; set; }
        public virtual Country Country { get; set; }

        public virtual ICollection<Player> Players { get; set; }
        public virtual State State { get; set; }
        public virtual Tournament Tournament { get; set; }

    }
}
