using Microsoft.EntityFrameworkCore;
using Audita.API.Models;


namespace Audita.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Site> tblSITETABLE { get; set; }

        public DbSet<User> tblUSERS { get; set; }

        public DbSet<Tower> tblTOWERTYPE { get; set; }

        public DbSet<Vendor> tblVENDORS { get; set; }

    }
}