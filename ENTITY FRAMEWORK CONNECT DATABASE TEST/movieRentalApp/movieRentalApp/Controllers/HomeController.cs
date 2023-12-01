using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Data.SqlClient;
using System.Configuration;

namespace movieRentalApp.Controllers
{
    public class HomeController : Controller
    {

        [EnableCors(origins: "www.my-app1.com, www.my-app1.com", headers: "*", methods: "*")]
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
