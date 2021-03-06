﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MCYSA.Models.BindingTargets
{
    public class TeamData
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string TeamName { get; set; }

        [Required]
        public int AgeGroupId { get; set; }

        [Required]
        public int TournamentId { get; set; }

        [Required]
        public string StateId { get; set; }

        [Required]
        public string ManagerFirstName { get; set; }

        [Required]
        public string ManagerLastName { get; set; }

        public int Wins { get; set; }
        public int Losses { get; set; }
        public string Record
        {
            get { return Wins + "=" + Losses; }
            
        }
        

        public State State { get; set; }
        public AgeGroup AgeGroup { get; set; }
        public Tournament Tournament { get; set; }

        public Team Team => new Team
        {
            Id = Id,
            ManagerFirstName = ManagerFirstName,
            ManagerLastName = ManagerLastName,
            TeamName = TeamName,
            StateId = StateId,
            AgeGroupId = AgeGroupId,
            TournamentId = TournamentId
        };

        //State = State == "" ? null : new State { StateId = State},
        //    AgeGroup = AgeGroup == 0 ? null : new AgeGroup { Id = AgeGroup}
    }
}
