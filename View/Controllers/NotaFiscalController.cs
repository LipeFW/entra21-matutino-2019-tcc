using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("notafiscal/")]
    public class NotaFiscalController : Controller
    {
        private NotaFiscalRepository repository;

        public NotaFiscalController()
        {
            repository = new NotaFiscalRepository();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var notasFiscais = repository.ObterTodos();
            var resultado = new { data = notasFiscais };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("cadastro")]
        public ActionResult Cadastro(NotaFiscal notaFiscal)
        {
            int id = repository.Inserir(notaFiscal);
            return RedirectToAction("Editar", new { id = id });
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(NotaFiscal notaFiscal)
        {
            var alterou = repository.Alterar(notaFiscal);
            var resultado = new { status = alterou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("apagar")]
        public JsonResult Aoagar(int id)
        {
            var apagou = repository.ObterPeloId(id);
            var resultado = new { status = apagou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
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
            var notaFiscal = repository.ObterPeloId(id);
            if (notaFiscal == null)
                return RedirectToAction("Index");

            ViewBag.NotaFiscal = notaFiscal;
            return View();
        }
    }
}