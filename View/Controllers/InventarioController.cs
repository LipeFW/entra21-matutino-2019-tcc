using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class InventarioController : BaseController
    {
        private InventarioRepository repository;
        private ProdutoRepository repositoryProdutos;
        private CategoriaRepository repositoryCategorias;

        public InventarioController()
        {
            repository = new InventarioRepository();
            repositoryProdutos = new ProdutoRepository();
            repositoryCategorias = new CategoriaRepository();
        }

        // GET: Inventario
        public ActionResult Index()
        {
            List<Produto> produtos = repositoryProdutos.ObterTodos();
            ViewBag.Produtos = produtos;

            List<Categoria> categorias = repositoryCategorias.ObterTodos();
            ViewBag.Categorias = categorias;

            return View();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var inventarios = repository.ObterTodos();
            var resultado = new { data = inventarios };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
    }
}