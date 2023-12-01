using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace movieRentalApp.Models
{
    public class masterDetail
    {
        [Key]
        public int masterDetailId { get; set; } // PRIMARY key
        public int customerId { get; set; }
        public DateTime rentalDate { get; set; }
        public string referenceNumber { get; set; }

    }
}