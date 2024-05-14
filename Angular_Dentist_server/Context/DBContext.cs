using System.Collections.Generic;
using System.Data;
using System.Security.Claims;
using System.Security;
using Microsoft.EntityFrameworkCore;
using Context;
using Context.Models;

namespace dentistServer
{
    public class DBContext : DbContext,IContext
    {
        public DbSet<Treatment> Treats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=AngularShani;Trusted_Connection=True;");
        }
    }
}
