using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Model;
using Repository.Repositories;

namespace View.Controllers
{
    public class CidadeController : Controller
    {
        [Route("")]
        
        public ActionResult Index()
        {
            return View();
        }
    }
}