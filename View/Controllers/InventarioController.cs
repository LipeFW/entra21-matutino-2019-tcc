using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class InventarioController : BaseController
    {

        private InventarioRepository repository;

        public InventarioController()
        {
            repository = new InventarioRepository();
        }

        // GET: Inventario
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var inventarios = repository.ObterTodos();
            var resultado = new { data = inventarios };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

    }
}