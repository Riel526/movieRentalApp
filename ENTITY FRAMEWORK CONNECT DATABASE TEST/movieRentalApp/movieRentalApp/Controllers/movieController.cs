
using System.Data.SqlClient;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace movieRentalApp.Controllers
{


    [EnableCors("*", "*", "*")]
    public class movieController : ApiController
    {



        myDbContext db = new myDbContext();

        

        // GET api/values
        [HttpGet]
        [Route("api/movie")]
        public IHttpActionResult getAll()
            {
            var movie = db.movies.ToList();
            if(movie.Count==0)
            {
                return NotFound();
            }
            return Ok(movie); 
        }


        // GET api/values/5
        [HttpGet]
        [Route("api/movie/{id}")]
        public IHttpActionResult getById(int id)
        {
            var movie = db.movies.FirstOrDefault(m => m.movieId == id);
            if (movie==null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        // POST api/values
        [HttpPost]
        [Route("api/movie/add")]
        public IHttpActionResult Add([FromBody] movies movie)
        {
            db.movies.Add(movie);
            int rowCount = db.SaveChanges();
            if(rowCount>0)
            {
                return Ok("movies has been saved");
            }
            return BadRequest("Save failed");
        }

        // PUT api/values/5
        [HttpPut]
        [Route("api/movie/update")]
        public IHttpActionResult Update(movies movie)
        {
            if(movie.movieId<=0)
            {
                return NotFound();
            }

            db.Entry(movie).State = System.Data.Entity.EntityState.Modified;
            int rowCount = db.SaveChanges();
            if(rowCount>0)
            {
                return Ok(movie);
            }
            return BadRequest("Update failed");
        }

        // DELETE api/values/5
        [HttpDelete]
        [Route("api/movie/delete")]
        public IHttpActionResult Delete(int id)
                {
            var movie = db.movies.FirstOrDefault(m => m.movieId == id);
            if(movie ==null)
            {
                return NotFound();
            }
            db.movies.Remove(movie);
            int rowCount = db.SaveChanges();
            if(rowCount>0)
            {
                return Ok("movie has been deleted");
            }
            return BadRequest("Delete failed");
        }
    }
}
