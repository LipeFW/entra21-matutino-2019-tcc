using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("venda/")]
    public class VendaController : Controller
    {

        private VendaRepository repository;

        public VendaController()
        {
            repository = new VendaRepository();
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var vendas = repository.ObterTodos();
            var resultado = new { data = vendas };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Inserir(Venda venda)
        {
            venda.RegistroAtivo = true;
            var id = repository.Inserir(venda);
            var resultado = new { id = id };
            return Json(resultado);
        }

        [HttpGet]
        public JsonResult Apagar(int id)
        {
            var apagou = repository.Apagar(id);
            var resultado = new { status = apagou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(Venda venda)
        {
            var alterou = repository.Alterar(venda);
            var resultado = new { status = alterou };
            return Json(resultado);
        }

        [HttpGet, Route("obterpeloid")]
        public JsonResult ObterPeloId(int id)
        {
            return Json(repository.ObterPeloId(id), JsonRequestBehavior.AllowGet);
        }
        [HttpGet, Route("obtertodosselect2")]
        public JsonResult ObterTodosSelect2(string term)
        {
            var vendas = repository.ObterTodos();

            List<object> vendasSelect2 = new List<object>();
            foreach (Venda venda in vendas)
            {
                vendasSelect2.Add(new
                {
                    id = venda.Id,
                    registro = venda.RegistroAtivo,
                    total = venda.Total

                });
            }
            var resultado = new { results = vendasSelect2 };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
    }
}