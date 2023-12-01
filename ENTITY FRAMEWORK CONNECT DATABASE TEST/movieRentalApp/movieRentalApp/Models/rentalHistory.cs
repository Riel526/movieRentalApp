using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
namespace movieRentalApp.Models

{
    public class rentalHistory
    {
        [Key]
        public int historyId { get; set; }

        public int rentalId { get; set; }

        public int movieId { get; set; }

        public int customerId { get; set; }

        public DateTime rentalBorrow { get; set; }
        public DateTime? rentalReturn { get; set; }


    }
}