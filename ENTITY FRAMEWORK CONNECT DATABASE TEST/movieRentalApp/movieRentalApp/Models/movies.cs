using movieRentalApp.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace movieRentalApp
{
    public class movies
    {
        [Key]
        public int movieId { get; set; } // PRIMARY key
        public string movieName { get; set; }
        public int movieStock {get; set; }
        public bool movieRentStatus { get; set; }

        

        [IgnoreDataMember]
        public ICollection<customers> customers { get; set; }
    }
}