using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("produto/")]
    public class ProdutoController : Controller
    {
        private ProdutoRepository repository;

        public ProdutoController()
        {
            repository = new ProdutoRepository();
        }

        [HttpGet, Route("obterpeloid")]
        public JsonResult ObterPeloId(int id)
        {
            return Json(repository.ObterPeloId(id), JsonRequestBehavior.AllowGet);
        }
        [HttpGet, Route("obtertodosselect2")]
        public JsonResult ObterTodosSelect2(string term)
        {
            var produtos = repository.ObterTodos();

            List<object> produtosSelect2 = new List<object>();
            foreach (Produto produto in produtos)
            {
                produtosSelect2.Add(new
                {
                    id = produto.Id,
                    categoria = produto.IdCategoria,
                    quantidade = produto.QuantidadeProdutos,
                    valor = produto.ValorUnitario,
                    codigo_barra = produto.CodigoBarra,
                    registro = produto.RegistroAtivo

                });
            }
            var resultado = new { results = produtosSelect2 };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("cadastrar")]
        public ActionResult Cadastro(Produto produto)
        {
            int id = repository.Inserir(produto);
            return RedirectToAction("Editar", new { id = id });
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var produtos = repository.ObterTodos();
            var resultado = new { data = produtos };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("apagar")]
        public JsonResult Apagar(int id)
        {
            var apagou = repository.Apagar(id);
            var resultado = new { status = apagou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("update")]
        public JsonResult Update(Produto produto)
        {
            var alterou = repository.Alterar(produto);
            var resultado = new { status = alterou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Inserir(Produto produto)
        {
            produto.RegistroAtivo = true;
            var id = repository.Inserir(produto);
            var resultado = new { id = id };
            return Json(resultado);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Cadastro()
        {
            CategoriaRepository categoriaRepository = new CategoriaRepository();
            List<Categoria> categorias = categoriaRepository.ObterTodos();
            ViewBag.Categorias = categorias;

            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var produto = repository.ObterPeloId(id);
            if (produto == null)
                return RedirectToAction("index");

            ViewBag.Produto = produto;
            return View();
        }
    }
}