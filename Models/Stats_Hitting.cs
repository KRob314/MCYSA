using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class Stats_Hitting
    {
        [Key]
        [Column(Order = 1)]
        public int GameId { get; set; }
        [Key]
        [Column(Order = 2)]
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

        public virtual Game Game { get; set; }
        public virtual Player Player {get; set; }
    }
}
