using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace movieRentalApp
{
    public class WebApiApplication : System.Web.HttpApplication
    {



        protected void Application_Start()
        {

        /* test for adding data into database
            try
            {
                myDbContext db = new myDbContext();
                movies m = new movies();
                customers c = new customers();

                m.movieId = 6;
                m.movieName = "Extraction 2";
                m.movieStock = 4;
                m.movieRentStatus = true;
                db.movies.Add(m);
                db.SaveChanges();
            }

            catch (Exception ex)
            {
                Console.WriteLine("Error" + ex.ToString());
            }
        */
           

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
