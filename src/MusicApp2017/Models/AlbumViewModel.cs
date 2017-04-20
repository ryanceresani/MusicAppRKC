using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp2017.Models
{
    public class AlbumViewModel
    {
        public AlbumViewModel()
        { 
        }
        public AlbumViewModel(Album album)
        {
            AlbumID = album.AlbumID;
            Title = album.Title;
            ArtistID = album.ArtistID;
            Artist = album.Artist;
            GenreID = album.GenreID;
            Genre = album.Genre;
        }

        public int AlbumID { get; set; }

        public string Title { get; set; }

        public decimal Score { get; set; }

        public int Count { get; set; }

        // Foreign key
        public int ArtistID { get; set; }
        // Navigation property
        public Artist Artist { get; set; }
        // Foreign key
        public int GenreID { get; set; }
        // Navigation property
        public Genre Genre { get; set; }
    }
}
