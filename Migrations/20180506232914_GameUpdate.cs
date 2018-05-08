using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MCYSA.Migrations
{
    public partial class GameUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HomeTeamsRuns",
                table: "Games",
                newName: "HomeTeamRuns");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HomeTeamRuns",
                table: "Games",
                newName: "HomeTeamsRuns");
        }
    }
}
