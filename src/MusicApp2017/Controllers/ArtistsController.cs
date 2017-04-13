using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MusicApp2017.Models;
using Microsoft.AspNetCore.Authorization;

namespace MusicApp2017.Controllers
{
    public class ArtistsController : Controller
    {
        private readonly MusicDbContext _context;

        public ArtistsController(MusicDbContext context)
        {
            _context = context;
        }

        // GET: Artists
        public async Task<IActionResult> Index()
        {
            var musicDbContext = _context.Artists;
            return View(await musicDbContext.ToListAsync());
        }

        // GET: Artists/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var artistContext = _context.Artists;
            //.Include(g => g.Name); 
            var artist = await artistContext
                .SingleOrDefaultAsync(m => m.ArtistID == id);
            ViewData["Albums"] = _context.Albums.Where(a => a.ArtistID == id).ToList();
            if (artist == null)
            {
                return NotFound();
            }

            return View(artist);
        }

        // GET: Albums/Create
        [Authorize]
        public IActionResult Create()
        {
            return View();
        }

        // POST: Albums/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> Create([Bind("ArtistID,Name,Bio,Likes")] Artist artist)
        {
            if (!_context.Artists.Any(a => a.Name == artist.Name))
            {
                if (ModelState.IsValid)
                {
                    _context.Add(artist);
                    await _context.SaveChangesAsync();
                    return RedirectToAction("Index");
                }
            }
            else
            {
                ViewData["Error"] = "Duplicate value not added";
            }
            return View(artist);
        }

        // GET: Albums/Edit/5
        [Authorize]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var artist = await _context.Artists.SingleOrDefaultAsync(m => m.ArtistID == id);
            if (artist == null)
            {
                return NotFound();
            }
            return View(artist);
        }

        // POST: Albums/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> Edit(int id, [Bind("ArtistID,Name,Bio,Likes")] Artist artist)
        {
            if (id != artist.ArtistID)
            {
                return NotFound();
            }
            if (!_context.Artists.Any(a => a.Name == artist.Name && a.ArtistID != id))
            {
                if (ModelState.IsValid)
                {
                    try
                    {
                        _context.Update(artist);
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!ArtistExists(artist.ArtistID))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }
                    return RedirectToAction("Index");
                }
            }
            else
            {
                ViewData["Error"] = "Cannot edit Artist name to that of another artist.";
            }
                return View(artist);
        }
        private bool ArtistExists(int id)
        {
            return _context.Artists.Any(e => e.ArtistID == id);
        }
    }
}
