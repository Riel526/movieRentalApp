using movieRentalApp.Models;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;



namespace movieRentalApp.Controllers
{
    [EnableCors("*", "*", "*")]
    public class rentalTransactionController : ApiController
    {
        myDbContext db = new myDbContext();


        [HttpGet]
        [Route("api/rentalTransaction")]
        public IHttpActionResult getAll()
        {
            var rentalTransaction = db.rentalTransactions.ToList();
            if (rentalTransaction.Count == 0)
            {
                return NotFound();
            }
            return Ok(rentalTransaction);
        }

        [HttpGet]
        [Route("api/rentalTransaction/{id}")]
        public IHttpActionResult getById(int id)
        {
            var rentalTransaction = db.rentalTransactions.FirstOrDefault(m => m.rentalId == id);
            if (rentalTransaction == null)
            {
                return NotFound();
            }
            return Ok(rentalTransaction);
        }

        [HttpPost]
        [Route("api/rentalTranscation/add")]
        public IHttpActionResult Add([FromBody] rentalTransactions rentalTransaction)
        {
            db.rentalTransactions.Add(rentalTransaction);
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok("rental information has been saved");
            }
            return BadRequest("Save failed");
        }

        [HttpPut]
        [Route("api/rentalTransaction/update")]
        public IHttpActionResult Update(rentalTransactions rentalTransaction)
        {
            if (rentalTransaction.rentalId <= 0)
            {
                return NotFound();
            }

            db.Entry(rentalTransaction).State = System.Data.Entity.EntityState.Modified;
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok(rentalTransaction);
            }
            return BadRequest("Update failed");
        }

        [HttpDelete]
        [Route("api/rentalTransaction/delete")]
        public IHttpActionResult Delete(int id)
        {
            var rentalTransaction = db.rentalTransactions.FirstOrDefault(m => m.rentalId == id);
            if (rentalTransaction == null)
            {
                return NotFound();
            }
            db.rentalTransactions.Remove(rentalTransaction);
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok("Transaction data has been deleted");
            }
            return BadRequest("Delete failed");
        }
    }
}





    

