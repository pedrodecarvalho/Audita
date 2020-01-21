using Microsoft.EntityFrameworkCore;
using Audita.API.Models;


namespace Audita.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> tblSITETABLE { get; set; }
    }
}