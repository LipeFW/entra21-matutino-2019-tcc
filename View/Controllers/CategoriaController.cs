using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("categoria/")]
    public class CategoriaController : Controller
    {
        CategoriaRepository repository;

        public CategoriaController()
        {
            repository = new CategoriaRepository();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var categorias = repository.ObterTodos();
            var resultado = new { data = categorias };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
            
        public ActionResult Index()
        {
            return View();
        }
    }
}