using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("produto")]
    public class ProdutoController : Controller
    {
        ProdutoRepository repository;

        public ProdutoController()
        {
            repository = new ProdutoRepository();
        }

        [HttpPost, Route("cadastrar")]
        public ActionResult Cadastro(Produto produto)
        {
            int id = repository.Inserir(produto);
            return RedirectToAction("Editar", new { id = id });
        }

        [HttpGet, Route("Obtertodos")]
        public JsonResult ObterTodos()
        {
            var produto = repository.ObterTodos();
            var resultado = new { data = produto };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("apagar")]
        public JsonResult Apagar(int id)
        {
            var apagou = repository.Apagar(id);
            var resultado = new { status = apagou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Produto produto)
        {
            var alterou = repository.Alterar(produto);
            var resultado = new { status = alterou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Cadastro()
        {
            return View();
        }

        public ActionResult Editar(int id)
        {
            var produto = repository.ObterPeloId(id);
            if (produto == null)
                return RedirectToAction("Index");

            ViewBag.Produto = produto;
            return View();
        }
        
        public ActionResult Index()
        {
            return View();
        }
    }
}