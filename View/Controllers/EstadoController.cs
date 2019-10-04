using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("estado/")]
    public class EstadoController : Controller
    {
        private EstadoRepository repository;
        private PaisRepository repositoryPais;
        public EstadoController()
        {
            repository = new EstadoRepository();
            repositoryPais = new PaisRepository();
        }

        [HttpGet, Route("obtertodosselect2peloiddopais")]
        public JsonResult ObterTodosSelect2PeloIdDoPais(int idPais, string q)
        {
            var estados = repository.ObterTodosPeloIdPais(idPais, q);
            var listaEstados = new List<object>();
            foreach (var estado in estados)
            {
                listaEstados.Add(new { id = estado.Id, text = estado.Nome });
            }

            var resultado = new { results = listaEstados };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("inserir")]
        public ActionResult Inserir(Estado estado)
        {
            estado.RegistroAtivo = true;
            var id = repository.Inserir(estado);
            var resultado = new { id = id };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Estado estado)
        {
            var alterou = repository.Alterar(estado);
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
            List<Pais> paises = repositoryPais.ObterTodos();
            ViewBag.Paises = paises;
            return View();
        }

        public ActionResult Cadastro()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var estado = repository.ObterPeloId(id);
            if (estado == null)
            {
                return RedirectToAction("Index");
            }

            ViewBag.Estado = estado;
            return View();
        }
    }
}