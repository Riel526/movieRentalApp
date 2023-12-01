using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using movieRentalApp.Models;
using System.Runtime.Serialization;

namespace movieRentalApp
{
    public class customers
    {
        [Key]
        public int customerId { get; set; } // PRIMARY key
        public string customerFirstName { get; set; }
        public string customerLastName { get; set; }
        public int customerRentedMovies { get; set; }

        

        [IgnoreDataMember]
        public ICollection<movies> movies { get; set; }
        

    }
} 