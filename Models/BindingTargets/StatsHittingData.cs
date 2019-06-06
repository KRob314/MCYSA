using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models.BindingTargets
{
    public class StatsHittingData
    {
        [Required]
        public int GameId { get; set; }
        [Required]
        public int PlayerId { get; set; }
        public int PA { get; set; }
        public int AB { get; set; }
        public int Singles { get; set; }
        public int Doubles { get; set; }
        public int Triples { get; set; }
        public int Homeruns { get; set; }
        public int BB { get; set; }
        public int HBP { get; set; }
        public decimal BattingAverage { get; set; }


        public Stats_Hitting statsHitting => new Stats_Hitting
        {
            PlayerId = PlayerId,
            GameId = GameId,
            PA = PA,
            AB = AB,
            Singles = Singles,
            Doubles = Doubles,
            Triples = Triples,
            Homeruns = Homeruns,
            HBP = HBP,
            BB = BB,
            BattingAverage = BattingAverage
        };

    }
}
