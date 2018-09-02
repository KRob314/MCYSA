﻿// <auto-generated />
using MCYSA.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace MCYSA.Migrations
{
    [DbContext(typeof(McysaContext))]
    partial class McysaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MCYSA.Models.AgeGroup", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Age");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("AgeGroups");
                });

            modelBuilder.Entity("MCYSA.Models.Ballpark", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<string>("Name");

                    b.Property<string>("StateId");

                    b.Property<string>("Street");

                    b.Property<string>("Zip");

                    b.HasKey("Id");

                    b.HasIndex("StateId");

                    b.ToTable("Ballparks");
                });

            modelBuilder.Entity("MCYSA.Models.Country", b =>
                {
                    b.Property<string>("CountryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("CountryId");

                    b.ToTable("Countries");
                });

            modelBuilder.Entity("MCYSA.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AwayTeamId");

                    b.Property<int>("AwayTeamRuns");

                    b.Property<int>("BallparkId");

                    b.Property<DateTime>("GameDate");

                    b.Property<int?>("HomeTeamId");

                    b.Property<int>("HomeTeamRuns");

                    b.Property<int>("SeasonId");

                    b.HasKey("Id");

                    b.HasIndex("AwayTeamId");

                    b.HasIndex("BallparkId");

                    b.HasIndex("HomeTeamId");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("MCYSA.Models.Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DOB");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Number");

                    b.Property<string>("ParentEmail");

                    b.Property<string>("Positions");

                    b.Property<bool>("SignedWaiver");

                    b.Property<int>("TeamId");

                    b.HasKey("Id");

                    b.HasIndex("TeamId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("MCYSA.Models.RegistrationToken", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateCreated");

                    b.Property<int>("PlayerId");

                    b.Property<string>("Token");

                    b.HasKey("Id");

                    b.HasIndex("PlayerId");

                    b.ToTable("RegistrationTokens");
                });

            modelBuilder.Entity("MCYSA.Models.State", b =>
                {
                    b.Property<string>("StateId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CountryId");

                    b.Property<string>("Name");

                    b.HasKey("StateId");

                    b.HasIndex("CountryId");

                    b.ToTable("States");
                });

            modelBuilder.Entity("MCYSA.Models.Team", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AgeGroupId");

                    b.Property<string>("City");

                    b.Property<string>("CountryId");

                    b.Property<string>("Email");

                    b.Property<bool>("IsVetted");

                    b.Property<int>("Losses");

                    b.Property<string>("ManagerFirstName");

                    b.Property<string>("ManagerLastName");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("PocEmail");

                    b.Property<string>("PocFirstName");

                    b.Property<string>("PocLastName");

                    b.Property<string>("PocPhone");

                    b.Property<DateTime>("RegisteredDate");

                    b.Property<string>("StateId");

                    b.Property<string>("Street");

                    b.Property<string>("TeamName");

                    b.Property<int>("TournamentId");

                    b.Property<string>("UserId");

                    b.Property<int>("Wins");

                    b.Property<string>("Zip");

                    b.HasKey("Id");

                    b.HasIndex("AgeGroupId");

                    b.HasIndex("CountryId");

                    b.HasIndex("StateId");

                    b.HasIndex("TournamentId");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("MCYSA.Models.Tournament", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("EndDate");

                    b.Property<bool>("IsCurrent");

                    b.Property<string>("Name");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("Id");

                    b.ToTable("Tournaments");
                });

            modelBuilder.Entity("MCYSA.Models.Waiver_Medical", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Allergies");

                    b.Property<string>("City");

                    b.Property<string>("CountryId");

                    b.Property<DateTime>("DateCompleted");

                    b.Property<string>("DoctorPhone");

                    b.Property<string>("EmergencyPocName");

                    b.Property<string>("EmergencyPocName2");

                    b.Property<string>("EmergencyPocPhone");

                    b.Property<string>("EmergencyPocPhone2");

                    b.Property<string>("FamilyDoctor");

                    b.Property<string>("HealthHistory");

                    b.Property<DateTime?>("LastTetanus");

                    b.Property<string>("ParentEmail");

                    b.Property<string>("ParentFirstName");

                    b.Property<string>("ParentLastName");

                    b.Property<string>("ParentPhone");

                    b.Property<string>("ParentPhone2");

                    b.Property<int>("PlayerId");

                    b.Property<string>("StateId");

                    b.Property<string>("Street");

                    b.Property<string>("Zip");

                    b.HasKey("Id");

                    b.HasIndex("CountryId");

                    b.HasIndex("PlayerId");

                    b.HasIndex("StateId");

                    b.ToTable("Waiver_Medical");
                });

            modelBuilder.Entity("MCYSA.Models.Ballpark", b =>
                {
                    b.HasOne("MCYSA.Models.State", "State")
                        .WithMany()
                        .HasForeignKey("StateId");
                });

            modelBuilder.Entity("MCYSA.Models.Game", b =>
                {
                    b.HasOne("MCYSA.Models.Team", "AwayTeam")
                        .WithMany()
                        .HasForeignKey("AwayTeamId");

                    b.HasOne("MCYSA.Models.Ballpark", "Ballpark")
                        .WithMany()
                        .HasForeignKey("BallparkId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("MCYSA.Models.Team", "HomeTeam")
                        .WithMany()
                        .HasForeignKey("HomeTeamId");
                });

            modelBuilder.Entity("MCYSA.Models.Player", b =>
                {
                    b.HasOne("MCYSA.Models.Team", "Team")
                        .WithMany("Players")
                        .HasForeignKey("TeamId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("MCYSA.Models.RegistrationToken", b =>
                {
                    b.HasOne("MCYSA.Models.Player", "Player")
                        .WithMany("RegistrationTokens")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("MCYSA.Models.State", b =>
                {
                    b.HasOne("MCYSA.Models.Country", "Country")
                        .WithMany("States")
                        .HasForeignKey("CountryId");
                });

            modelBuilder.Entity("MCYSA.Models.Team", b =>
                {
                    b.HasOne("MCYSA.Models.AgeGroup", "AgeGroup")
                        .WithMany("Teams")
                        .HasForeignKey("AgeGroupId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("MCYSA.Models.Country", "Country")
                        .WithMany("Teams")
                        .HasForeignKey("CountryId");

                    b.HasOne("MCYSA.Models.State", "State")
                        .WithMany("Teams")
                        .HasForeignKey("StateId");

                    b.HasOne("MCYSA.Models.Tournament", "Tournament")
                        .WithMany("Teams")
                        .HasForeignKey("TournamentId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("MCYSA.Models.Waiver_Medical", b =>
                {
                    b.HasOne("MCYSA.Models.Country", "Country")
                        .WithMany("Waiver_Medical")
                        .HasForeignKey("CountryId");

                    b.HasOne("MCYSA.Models.Player", "Player")
                        .WithMany("Waiver_Medical")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("MCYSA.Models.State", "State")
                        .WithMany("Waiver_Medical")
                        .HasForeignKey("StateId");
                });
#pragma warning restore 612, 618
        }
    }
}
