using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace movieRentalApp.Controllers
{
    [EnableCors("*", "*", "*")]
    public class customerController : ApiController
    {


        myDbContext db = new myDbContext();


        // GET api/values
        [HttpGet]
        public IHttpActionResult getAll()
        {
            var customer = db.customers.ToList();
            if (customer.Count == 0)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        // GET api/values/5
        [HttpGet]

        public IHttpActionResult getById(int id)
        {
            var customer = db.customers.FirstOrDefault(c => c.customerId == id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        // POST api/values
        [HttpPost]

        public IHttpActionResult Add([FromBody] customers customer)
        {
            db.customers.Add(customer);
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok("customers has been saved");
            }   
            return BadRequest("Save failed");
        }


        // PUT api/values/5
        [HttpPut]

        public IHttpActionResult Update(customers customer)
        {
            if (customer.customerId <= 0)
            {
                return NotFound();
            }

            db.Entry(customer).State = System.Data.Entity.EntityState.Modified;
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok(customer);
            }
            return BadRequest("Update failed");
        }

        // DELETE api/values/5
        [HttpDelete]

        public IHttpActionResult Delete(int id)
        {
            var customer = db.customers.FirstOrDefault(c => c.customerId == id);
            if (customer == null)
            {
                return NotFound();
            }
            db.customers.Remove(customer);
            int rowCount = db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok("movie has been deleted");
            }
            return BadRequest("Delete failed");
        }
    }
}
