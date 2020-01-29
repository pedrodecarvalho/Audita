using Microsoft.EntityFrameworkCore.Migrations;

namespace Audita.API.Migrations
{
    public partial class AddedUserEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "tblUSERS",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Fname",
                table: "tblUSERS",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Sname",
                table: "tblUSERS",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fname",
                table: "tblUSERS");

            migrationBuilder.DropColumn(
                name: "Sname",
                table: "tblUSERS");

            migrationBuilder.DropColumn(
                name: "Username",
                table: "tblUSERS");
        }
    }
}
