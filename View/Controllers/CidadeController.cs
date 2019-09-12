using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("cidade/")]
    public class CidadeController : Controller
    {
        CidadeRepository repository;

        public CidadeController()
        {
            repository = new CidadeRepository();
        }

        [HttpGet, Route("obtertodosselect2peloiddoestado")]
        public JsonResult ObterTodosSelect2PeloIdDoEstado(int idEstado)
        {
            var cidades = repository.ObterTodosPeloIdEstado(idEstado);
            var listaCidades = new List<object>();
            foreach (var cidade in cidades)
            {
                listaCidades.Add(new { id = cidade.Id, text = cidade.Nome });
            }

            var resultado = new { results = listaCidades };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost, Route("inserir")]
        public ActionResult Inserir(Cidade cidade)
        {
            cidade.RegistroAtivo = true;
            var id = repository.Inserir(cidade);
            var resultado = new { id = id };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Cidade cidade)
        {
            var alterou = repository.Alterar(cidade);
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
            var cidade = repository.ObterPeloId(id);
            if (cidade == null)
            {
                return RedirectToAction("Index");
            }

            ViewBag.Cidade = cidade;
            return View();
        }
    }
}