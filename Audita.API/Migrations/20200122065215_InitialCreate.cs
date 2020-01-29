using Microsoft.EntityFrameworkCore.Migrations;

namespace Audita.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblSITETABLE",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SiteName = table.Column<string>(nullable: true),
                    VendorID = table.Column<int>(nullable: false),
                    Lat = table.Column<string>(nullable: true),
                    Long = table.Column<string>(nullable: true),
                    MastHeight = table.Column<float>(nullable: false),
                    TowerTypeID = table.Column<int>(nullable: false),
                    EskomAcc = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblSITETABLE", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblSITETABLE");
        }
    }
}
