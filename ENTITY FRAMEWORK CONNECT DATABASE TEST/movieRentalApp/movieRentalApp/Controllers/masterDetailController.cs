
using movieRentalApp.Models;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace movieRentalApp.Controllers
{


    [EnableCors("*", "*", "*")]
    public class masterDetailController : ApiController
    {



        myDbContext db = new myDbContext();



        // GET api/values
        [HttpGet]
        [Route("api/masterDetail")]
        public IHttpActionResult getAll()
        {
            var masterDetail = db.masterDetails.ToList();
            if (masterDetail.Count == 0)
            {
                return NotFound();
            }
            return Ok(masterDetail);
        }


        // GET api/values/5
        [HttpGet]
        [Route("api/masterDetail/{id}")]
        public IHttpActionResult getById(int id)
        {
            var masterDetail = db.masterDetails.FirstOrDefault(m => m.masterDetailId == id);
            if (masterDetail == null)
            {
                return NotFound();
            }
            return Ok(masterDetail);
        }

        // POST api/values
        [HttpPost]
        [Route("api/masterDetail/add")]
        public IHttpActionResult Add([FromBody] masterDetail masterDetail)
        {
            db.masterDetails.Add(masterDetail);
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok("masterDetail has been saved");
            }
            return BadRequest("Save failed");
        }

        // PUT api/values/5
        [HttpPut]
        [Route("api/masterDetail/update")]
        public IHttpActionResult Update(masterDetail masterDetail)
        {
            if (masterDetail.masterDetailId <= 0)
            {
                return NotFound();
            }

            db.Entry(masterDetail).State = System.Data.Entity.EntityState.Modified;
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok(masterDetail);
            }
            return BadRequest("Update failed");
        }

        // DELETE api/values/5
        [HttpDelete]
        [Route("api/masterDetail/delete")]
        public IHttpActionResult Delete(int id)
        {
            var masterDetail = db.masterDetails.FirstOrDefault(m => m.masterDetailId == id);
            if (masterDetail == null)
            {
                return NotFound();
            }
            db.masterDetails.Remove(masterDetail);
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok("master Detail has been deleted");
            }
            return BadRequest("Delete failed");
        }
    }
}
