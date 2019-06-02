using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MCYSA.Migrations
{
    public partial class Initail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Stats_Hitting",
                columns: table => new
                {
                    GameId = table.Column<int>(nullable: false),
                    PlayerId = table.Column<int>(nullable: false),
                    AB = table.Column<int>(nullable: false),
                    BB = table.Column<int>(nullable: false),
                    BattingAverage = table.Column<decimal>(nullable: false),
                    Doubles = table.Column<int>(nullable: false),
                    HBP = table.Column<int>(nullable: false),
                    Homeruns = table.Column<int>(nullable: false),
                    PA = table.Column<int>(nullable: false),
                    Singles = table.Column<int>(nullable: false),
                    Triples = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stats_Hitting", x => new { x.GameId, x.PlayerId });
                    table.ForeignKey(
                        name: "FK_Stats_Hitting_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Stats_Hitting_Players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "Players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Stats_Hitting_PlayerId",
                table: "Stats_Hitting",
                column: "PlayerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stats_Hitting");
        }
    }
}
