using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("marca/")]
    public class MarcaController : Controller
    {

        MarcaRepository repository;

        public MarcaController()
        {
            repository = new MarcaRepository();
        }

        [HttpPost, Route("cadastro")]
        public ActionResult Cadastro(Marca marca)
        {
            int id = repository.Inserir(marca);
            return RedirectToAction("Editar", new { id = id });
        }

        [HttpGet, Route("ObterTodos")]
        public JsonResult ObterTodos()
        {
            var marcas = repository.ObterTodos();
            var resultado = new { data = marcas };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("editar")]
        public JsonResult Editar(Marca marca)
        {
            var alterou = repository.Alterar(marca);
            var resultado = new { status = alterou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("apagar")]
        public JsonResult Apagar(int id)
        {
            var apagou = repository.Apagar(id);
            var resultado = new { status = apagou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Cadastro()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var marca = repository.ObterPeloId(id);
            if (marca == null)
                return RedirectToAction("Index");

            ViewBag.Marca = marca;
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}