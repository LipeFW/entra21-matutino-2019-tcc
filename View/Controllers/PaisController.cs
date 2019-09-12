using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("pais/")]
    public class PaisController : Controller
    {
        PaisRepository repository;

        public PaisController()
        {
            repository = new PaisRepository();
        }

        [HttpGet, Route("obtertodosselect2")]
        public JsonResult ObterTodosSelect2()
        {
            var paises = repository.ObterTodos();
            var listaPaises = new List<object>();
            foreach (var pais in paises)
            {
                listaPaises.Add(new { id = pais.Id, text = pais.Nome });
            }

            var resultado = new { results =  listaPaises };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var paises = repository.ObterTodos();
            var resultado = new { data = paises };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("inserir")]
        public ActionResult Inserir(Pais pais)
        {
            pais.RegistroAtivo = true;
            var id = repository.Inserir(pais);
            var resultado = new { id = id };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Pais pais)
        {
            var alterou = repository.Alterar(pais);
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

        [HttpGet, Route("obterpeloid")]
        public JsonResult ObterPeloId(int id)
        {
            return Json(repository.ObterPeloId(id), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Cadastro()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var pais = repository.ObterPeloId(id);
            if (pais == null)
            {
                return RedirectToAction("Index");
            }

            ViewBag.Pais = pais;
            return View();
        }
    }
}