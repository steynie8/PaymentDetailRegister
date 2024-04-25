using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models
{
    // Represents a session with the database and can be used to query and save instances of your entities
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
