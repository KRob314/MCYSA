using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class SeedData
    {
        public static void SeedDatabase(IServiceProvider serviceProvider)
        {
            using (var context = new McysaContext(serviceProvider.GetRequiredService<DbContextOptions<McysaContext>>()))
            {
              //  context.Database.Migrate();

                if(context.Teams.Any())
                {
                    return;
                }

                if (context.Tournaments.Count() == 0)
                {
                    var tourney1 = new Tournament { StartDate = DateTime.Parse("6-6-2018"), EndDate = DateTime.Parse("7-6-2018"), Name = "MCYSA 2018", IsCurrent = false };
                    var tourney2 = new Tournament { StartDate = DateTime.Parse("6-6-2019"), EndDate = DateTime.Parse("7-6-2019"), Name = "MCYSA 2019", IsCurrent = true };

                    context.Add(tourney1);
                    context.SaveChanges();
                }

                if (context.Teams.Count() == 0)
                {
                    var age11 = new AgeGroup { Id = 11, Name = "11u" };
                    var age12 = new AgeGroup { Id = 12, Name = "12u" };

                    var t1 = new Team
                    {
                         TournamentId = 1,
                        TeamName = "Crystal Lake Bombers",
                        AgeGroup = age11,
                        City = "Crystal Lake",
                        Email = "fakeemail@email.com",
                        IsVetted = true,
                        PocEmail = "fakeemail@email.com",
                        ManagerFirstName = "Kyle",
                        ManagerLastName = "Robins",
                        PhoneNumber = "314.651.9805",
                        Zip = "63039",
                        RegisteredDate = DateTime.Now.AddDays(-30),
                        PocFirstName = "Kyle",
                        PocLastName = "Robins",
                        PocPhone = "314.651.9805",
                        Street = "4301 Columbia Pike",
                    };
                    var t2 = new Team
                    {
                        TournamentId = 1,
                        TeamName = "Washington Cardinals",
                        AgeGroup = age11,
                        City = "Crystal Lake",
                        Email = "fakeemail@email.com",
                        IsVetted = true,
                        PocEmail = "fakeemail@email.com",
                        ManagerFirstName = "Kyle",
                        ManagerLastName = "Robins",
                        PhoneNumber = "314.651.9805",
                        Zip = "63039",
                        RegisteredDate = DateTime.Now.AddDays(-30),
                        PocFirstName = "Kyle",
                        PocLastName = "Robins",
                        PocPhone = "314.651.9805",
                        Street = "4301 Columbia Pike",
                    };

                    context.Add(age11);
                    context.Add(age12);
                    context.Add(t1);
                    context.Add(t2);
                    context.SaveChanges();
                }

                if(context.Ballparks.Count() == 0)
                {
                    var b1 = new Ballpark()
                    {
                        Name = "Annandale High School",
                        City = "Annandale",
                        Street = "4700 Medford Drive",
                        StateId = "VA",
                        Zip = "22003"
                    };

                    var b2 = new Ballpark()
                    {
                        Name = "Washington High School",
                        City = "Washington",
                        StateId = "MO",
                        Zip = "63090"
                    };

                    var b3 = new Ballpark()
                    {
                        Name = "Atholton HS",
                        City = "Atholton",
                        StateId = "MD", 
                        Zip = "20814"
                    };

                    context.Add(b1);
                    context.Add(b2);
                    context.Add(b3);
                    context.SaveChanges();
                }

                if(context.Games.Count() == 0)
                {
                    var g1 = new Game()
                    {
                        AwayTeamId = 1,
                        HomeTeamId = 2,
                        AwayTeamRuns = 3,
                        HomeTeamRuns = 1,
                        GameDate = DateTime.Parse("6/17/2018"),
                        BallparkId = 1,
                        TournamentId = 1
                    };

                    var g2 = new Game()
                    {
                        AwayTeamId = 1,
                        HomeTeamId = 2,
                        AwayTeamRuns = 5,
                        HomeTeamRuns = 0,
                        GameDate = DateTime.Parse("6/20/2018"),
                        BallparkId = 1,
                        TournamentId = 1
                    };

                    var g3 = new Game()
                    {
                        AwayTeamId = 1,
                        HomeTeamId = 2,
                        AwayTeamRuns = 0,
                        HomeTeamRuns = 0,
                        GameDate = DateTime.Parse("6/30/2019"),
                        BallparkId = 1,
                        TournamentId = 1
                    };

                    context.Add(g1);
                    context.SaveChanges();
                }


            }
        }
    }
}
