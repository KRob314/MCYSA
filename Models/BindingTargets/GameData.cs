using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models.BindingTargets
{
    public class GameData
    {
        [Required]
        public int Id { get; set; }

        public int? HomeTeamId { get; set; }

        public int? AwayTeamId { get; set; }

        [Required]
        public int BallparkId { get; set; }

        [Required]
        public int TournamentId { get; set; }
     
        //public int SeasonId { get; set; }
  
        public int HomeTeamRuns { get; set; }

        public int AwayTeamRuns { get; set; }

        [Required]
        public DateTime GameDate { get; set; }

        [ForeignKey("HomeTeamId")]
        public Team HomeTeam { get; set; }
        [ForeignKey("AwayTeamId")]
        public Team AwayTeam { get; set; }
        public  Ballpark Ballpark { get; set; }

        public Game game => new Game
        {
            Id = Id,
            HomeTeamId = HomeTeamId.Value,
            AwayTeamId = AwayTeamId.Value,
            HomeTeamRuns = HomeTeamRuns,
            AwayTeamRuns = AwayTeamRuns,
            BallparkId = BallparkId,
            GameDate = GameDate,
            TournamentId = TournamentId
        };
    }

}
