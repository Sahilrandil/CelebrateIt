using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CelebrateIt.Migrations
{
    /// <inheritdoc />
    public partial class AddMobileNumberToContactUs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MobileNumber",
                table: "ContactUs",
                type: "varchar(15)",
                maxLength: 15,
                nullable: true,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MobileNumber",
                table: "ContactUs");
        }
    }
}
