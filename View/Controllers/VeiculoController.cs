using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("veiculo/")]
    public class VeiculoController : Controller
    {
        private VeiculoRepository repository;

        public VeiculoController()
        {
            repository = new VeiculoRepository();
        }
        
        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var veiculos = repository.ObterTodos();
            var resultado = new { dara = veiculos };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("cadastro")]
        public ActionResult Cadastro(Veiculo veiculo)
        {
            int id = repository.Inserir(veiculo);
            return RedirectToAction("Editar", new { id = id });
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Veiculo veiculo)
        {
            var alterou = repository.Alterar(veiculo);
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
            return View();
        }

        public ActionResult Cadastro()
        {
            return View();
        }

        public ActionResult Editar(int id)
        {
            var veiculo = repository.ObterPeloId();
            if (veiculo == null)
                return RedirectToAction("Index");

            ViewBag.Veiculo = veiculo;
            return View();
        }
    }
}