using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("modelo/")]
    public class ModeloController : Controller
    {
        private ModeloRepository repository;

        public ModeloController()
        {
            repository = new ModeloRepository();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var modelos = repository.ObterTodos();
            var resultado = new { data = modelos };
            return Json(resultado, JsonRequestBehavior.AllowGet);

        }

        [HttpPost, Route("cadastro")]
        public ActionResult Cadastro(Modelo modelo)
        {
            int id = repository.Inserir(modelo);
            return RedirectToAction("Editar", new { id = id });
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Modelo modelo)
        {
            var alterou = repository.Alterar(modelo);
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

        public ActionResult Index()
        {
            List<Modelo> modelos = repository.ObterTodos();
            Viewbag.Modelos = modelos;
            return View();
        }

        public ActionResult Cadastro()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var modelo = repository.ObterPeloId(id);
            if (modelo == null)
                return RedirectToAction("Index");

            ViewBag.Modelo = modelo;
            return View();
        }
    }
}