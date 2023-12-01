using movieRentalApp.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
namespace movieRentalApp.Models
{
    public class rentalTransactions
    {
        [Key]
        public int rentalId { get; set; }
        public int? movieId { get; set; }
        public int customerId { get; set; }

        public DateTime? rentalDate { get; set; }

        public DateTime? returnDate { get; set; }

        public string referenceNumber { get; set; }

        [IgnoreDataMember]
        public movies movies{ get; set; }

        [IgnoreDataMember]
        public customers customers{ get; set; }
    }

}