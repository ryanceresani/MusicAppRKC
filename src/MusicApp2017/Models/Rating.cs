using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp2017.Models
{
    public class Rating
    {

        public int RatingID { get; set; }

        public decimal Score { get; set; }

        // Foreign Key
        public int AlbumID { get; set; }
        // Navigation Property
        public Album Album { get; set; }
    }
}