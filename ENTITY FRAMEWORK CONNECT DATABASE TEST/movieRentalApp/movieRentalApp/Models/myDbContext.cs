using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using movieRentalApp.Models;

namespace movieRentalApp
{
    class myDbContext : DbContext
    {
        public myDbContext() : base("name=MyConnectionString")
        {
            
        }

        public virtual DbSet<movies> movies { get; set; }
        public virtual DbSet<customers> customers { get; set; }

        public virtual DbSet<rentalTransactions> rentalTransactions { get; set; }

        public virtual DbSet<rentalHistory> rentalHistory { get; set; }

        public virtual DbSet<masterDetail> masterDetails { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            
            // configure table name
            modelBuilder.Entity<movies>().ToTable("tbl_movies");
            modelBuilder.Entity<customers>().ToTable("tbl_customers");
            modelBuilder.Entity<rentalTransactions>().ToTable("tbl_rentalTransactionsTable");
            modelBuilder.Entity<rentalHistory>().ToTable("tbl_rentalHistory");
            modelBuilder.Entity<masterDetail>().ToTable("tbl_masterDetail");


            // defining primary key
            modelBuilder.Entity<movies>().HasKey(m=>m.movieId);
                                         
            modelBuilder.Entity<customers>().HasKey(c => c.customerId);

            modelBuilder.Entity<rentalTransactions>().HasKey(r => r.rentalId);

            modelBuilder.Entity<rentalHistory>().HasKey(r => r.historyId);


            modelBuilder.Entity<movies>().Property(m => m.movieId).HasColumnName("movieId");

            modelBuilder.Entity<movies>().Property(m => m.movieName).HasColumnName("movieName")
                                                                    .IsRequired()
                                                                    .HasMaxLength(50)
                                                                    .HasColumnType("varchar");

            modelBuilder.Entity<customers>().Property(c => c.customerFirstName).HasColumnName("customerFirstName")
                                                                    .IsRequired()
                                                                    .HasMaxLength(50)
                                                                    .HasColumnType("varchar");
            modelBuilder.Entity<customers>().Property(c => c.customerLastName).HasColumnName("customerLastName")
                                                                    .IsRequired()
                                                                    .HasMaxLength(50)
                                                                    .HasColumnType("varchar");
            modelBuilder.Entity<movies>().Property(m => m.movieStock).HasColumnName("movieStock");

            modelBuilder.Entity<customers>().Property(c => c.customerRentedMovies).HasColumnName("customerRentedMovies");


            // For many to many relationship

            modelBuilder.Entity<movies>().HasMany(m => m.customers)
                                         .WithMany(m => m.movies)
                                         .Map(mc =>
                                         {
                                             mc.MapLeftKey("movieId");
                                             mc.MapRightKey("customerId");
                                             mc.ToTable("tbl_rentalTransactions");
                                         });
            modelBuilder.Entity<customers>().HasMany(c => c.movies)
                                         .WithMany(c => c.customers)
                                         .Map(mc =>
                                         {
                                             mc.MapLeftKey("customerId");
                                             mc.MapRightKey("movieId");
                                             mc.ToTable("tbl_rentalTransactions");
                                         });
         
            

            base.OnModelCreating(modelBuilder);
        }
    }
}