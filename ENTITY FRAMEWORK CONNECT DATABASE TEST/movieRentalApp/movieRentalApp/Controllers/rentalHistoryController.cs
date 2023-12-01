using movieRentalApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace movieRentalApp.Controllers
{
    [EnableCors("*", "*", "*")]
    public class rentalHistoryController : ApiController
    {

            myDbContext db = new myDbContext();


            [HttpGet]
            [Route("api/rentalHistory")]
            public IHttpActionResult getAll()
            {
                var rentalHistory = db.rentalHistory.ToList();
                if (rentalHistory.Count == 0)
                {
                    return NotFound();
                }
                return Ok(rentalHistory);
            }

            [HttpGet]
            [Route("api/rentalHistory/{id}")]
            public IHttpActionResult getById(int id)
            {
                var rentalHistory = db.rentalHistory.FirstOrDefault(m => m.historyId == id);
                if (rentalHistory == null)
                {
                    return NotFound();
                }
                return Ok(rentalHistory);
            }

            [HttpPost]
            [Route("api/rentalHistory/add")]
            public IHttpActionResult Add([FromBody] rentalHistory rentalHistory)
            {
                db.rentalHistory.Add(rentalHistory);
                int rowCount = db.SaveChanges();
                if (rowCount > 0)
                {
                    return Ok("rental information has been saved");
                }
                return BadRequest("Save failed");
            }

            [HttpPut]
            [Route("api/rentalHistory/update")]
            public IHttpActionResult Update(rentalHistory rentalHistory)
            {
                if (rentalHistory.historyId <= 0)
                {
                    return NotFound();
                }

                db.Entry(rentalHistory).State = System.Data.Entity.EntityState.Modified;
                int rowCount = db.SaveChanges();
                if (rowCount > 0)
                {
                    return Ok(rentalHistory);
                }
                return BadRequest("Update failed");
            }

            [HttpDelete]
            [Route("api/rentalHistory/delete")]
            public IHttpActionResult Delete(int id)
            {
                var rentalHistory = db.rentalHistory.FirstOrDefault(m => m.historyId == id);
                if (rentalHistory == null)
                {
                    return NotFound();
                }
                db.rentalHistory.Remove(rentalHistory);
                int rowCount = db.SaveChanges();
                if (rowCount > 0)
                {
                    return Ok("Transaction data has been deleted");
                }
                return BadRequest("Delete failed");
            }
    }
    
}
