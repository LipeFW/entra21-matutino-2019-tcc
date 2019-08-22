using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class ModeloController : Controller
    {
        private ModeloRepository repository;

        public ModeloController()
        {
            repository = new ModeloRepository();
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}