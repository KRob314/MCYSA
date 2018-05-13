using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class Game
    {
        public int Id { get; set; }
        public int? HomeTeamId { get; set; }
        public int? AwayTeamId { get; set; }
        public int BallparkId { get; set; }
        public int SeasonId { get; set; }
        public int HomeTeamRuns { get; set; }
        public int AwayTeamRuns { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime GameDate { get; set; }

        public virtual Team HomeTeam { get; set; }
        public virtual Team AwayTeam { get; set; }
        public virtual Ballpark Ballpark { get; set; }
       

    }
}
