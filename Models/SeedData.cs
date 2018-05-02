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

                if (context.Teams.Count() == 0)
                {
                    var age11 = new AgeGroup { Id = 11, Name = "11u" };
                    var age12 = new AgeGroup { Id = 12, Name = "12u" };

                    var t1 = new Team
                    {
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

                    context.Add(t1);
                    context.Add(t2);
                    context.SaveChanges();
                }

                if(context.Ballparks.Count() == 0)
                {
                    var b1 = new Ballpark()
                    {
                        Id = 1,
                        Name = "Falls Church High School",
                        City = "Falls Church",
                        Street = "1 FCHS Drive",
                        StateId = "VA",
                        Zip = "22204"
                    };

                    context.Add(b1);
                    context.SaveChanges();
                }
            }
        }
    }
}
