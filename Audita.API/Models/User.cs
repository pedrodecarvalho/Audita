namespace Audita.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Fname { get; set; }
        public string Sname { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public string EMail { get; set; }

        public string IDNumber { get; set; }

        public int CompanyID { get; set; }
    }
}