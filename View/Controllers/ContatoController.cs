using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class ContatoController : Controller
    {
        private ContatoRepository repository;

        public ContatoController()
        {
            repository = new ContatoRepository();
        }

        [HttpPost, Route("inserir")]
        public ActionResult Inserir(Contato contato)
        {
            var id = repository.Inserir(contato);
            var resultado = new { id = id };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}