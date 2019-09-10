using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("rota/")]
    public class RotaController : Controller
    {
        private RotaRepository repository;

        public RotaController()
        {
            repository = new RotaRepository();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var rotas = repository.ObterTodos();
            var resultado = new { data = rotas };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("cadastro")]
        public JsonResult Cadastro(Rota rota)
        {
            var id = repository.Inserir(rota);
            var resultado = new { id = id };
            return Json(resultado,
                 JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("alterar")]
        public JsonResult Alterar(Rota rota)
        {
            var alterou = repository.Alterar(rota);
            var resultado = new { status = alterou };
            return Json(resultado,
              JsonRequestBehavior.AllowGet);
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
            List<Rota> rotas = repository.ObterTodos();
            ViewBag.Rotas = rotas;
            return View();
        }

        [HttpGet, Route("obterpeloid")]
        public ActionResult ObterPeloId(int id)
        {
            var rota = repository.ObterPeloId(id);
            if (rota == null)
                return HttpNotFound();

            return Json(rota,
                JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var rota = repository.ObterPeloId(id);
            if (rota == null)
                return RedirectToAction("Index");

            ViewBag.Rota = rota;
            return View();
        }

        [HttpGet, Route("obtertodosselect2")]
        public JsonResult ObterTodosSelect2(string term)
        {
            var rotas = repository.ObterTodos();

            List<object> rotasSelect2 = new List<object>();
            foreach (Rota rota in rotas)
            {
                rotasSelect2.Add(new
                {
                    id = rota.Id,
                    vendedor = rota.Vendedor.Nome,
                    nome = rota.Nome,
                    registro = rota.RegistroAtivo

                });
            }
            var resultado = new { results = rotasSelect2 };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
    }
}