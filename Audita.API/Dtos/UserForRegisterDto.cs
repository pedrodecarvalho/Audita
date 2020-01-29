using System.ComponentModel.DataAnnotations;

namespace Audita.API.Dtos
{
    public class UserForRegisterDto
    {

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4 and 8 characters")]
        public string Password { get; set; }

        [Required]
        public string Fname { get; set; }

        [Required]
        public string Sname { get; set; }

        public string EMail { get; set; }

        [Required]
        [StringLength(13, MinimumLength = 13, ErrorMessage = "ID number must be 13 characters long")]
        public string IDNumber { get; set; }

        public int CompanyID { get; set; }
    }
}