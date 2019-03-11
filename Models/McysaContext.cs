using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace MCYSA.Models
{
    public class McysaContext : DbContext
    {
        //public McysaContext() { }


    public McysaContext(DbContextOptions<McysaContext> opts) : base(opts) { }

    public virtual DbSet<AgeGroup> AgeGroups { get; set; }
    //public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
    //public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
    //public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
    //public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
    public virtual DbSet<Country> Countries { get; set; }
    // public virtual DbSet<EmailArchive> EmailArchives { get; set; }
    // public virtual DbSet<Log_Errors> Log_Errors { get; set; }
    // public virtual DbSet<Log_History> Log_History { get; set; }
    // public virtual DbSet<Log_SignIn> Log_SignIn { get; set; }
    public virtual DbSet<Player> Players { get; set; }
    public virtual DbSet<RegistrationToken> RegistrationTokens { get; set; }
    //public virtual DbSet<RosterFile> RosterFiles { get; set; }
    public virtual DbSet<State> States { get; set; }
    public virtual DbSet<Team> Teams { get; set; }
    public virtual DbSet<Tournament> Tournaments { get; set; }
    public virtual DbSet<Ballpark> Ballparks { get; set; }
    public virtual DbSet<Game> Games { get; set; }
    //public virtual DbSet<VerificationEmail> VerificationEmails { get; set; }
    public virtual DbSet<Waiver_Medical> Waiver_Medical { get; set; }


    }
}
