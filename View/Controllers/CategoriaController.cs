using Model;
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

        [HttpPost, Route("cadastro")]
        public ActionResult Cadastro(Categoria categoria)
        {
            int id = repository.Inserir(categoria);
            return RedirectToAction("Editar", new { id = id });
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Categoria categoria)
        {
            var alterou = repository.Alterar(categoria);
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
            List<Categoria> categorias = repository.ObterTodos();
            ViewBag.Categorias = categorias;
            return View();
        }

        public ActionResult Cadastro()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var categoria = repository.ObterPeloId(id);
            if (categoria == null)
                return RedirectToAction("index");

            ViewBag.Categoria = categoria;
            return View();
        }
    }
}