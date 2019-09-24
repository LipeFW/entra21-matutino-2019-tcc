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
    public class RotaController : BaseController
    {
        private RotaRepository repository;
        private VendedorRepository repositoryVendedor;

        public RotaController()
        {
            repository = new RotaRepository();
            repositoryVendedor = new VendedorRepository();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var rotas = repository.ObterTodos();
            var resultado = new { data = rotas };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("inserir")]
        public ActionResult Inserir(Rota rota)
        {
            rota.RegistroAtivo = true;
            var id = repository.Inserir(rota);
            var resultado = new { id = id };
            return Json(resultado,
                 JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("update")]
        public JsonResult Update(Rota rota)
        {
            var alterou = repository.Alterar(rota);
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
            List<Vendedor> vendedores = repositoryVendedor.ObterTodos();
            ViewBag.Vendedores = vendedores;
            return View();
        }

        [HttpGet, Route("obterpeloid")]
        public JsonResult ObterPeloId(int id)
        {
            return Json(repository.ObterPeloId(id), JsonRequestBehavior.AllowGet);
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

        public ActionResult Cadastro()
        {
            return View();
        }
    }
}