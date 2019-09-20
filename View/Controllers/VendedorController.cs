using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("vendedor/")]
    public class VendedorController : BaseController
    {
        private VendedorRepository repository;

        private VeiculoRepository repositoryVeiculo;

        private UsuarioRepository repositoryUsuario;

        public VendedorController()
        {
            repository = new VendedorRepository();
            repositoryUsuario = new UsuarioRepository();

            repositoryVeiculo = new VeiculoRepository();

        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var vendedores = repository.ObterTodos();
            var resultado = new { data = vendedores };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("inserir")]
        public ActionResult Inserir(Vendedor vendedor)
        {
            vendedor.RegistroAtivo = true;
            var id = repository.Inserir(vendedor);
            var resultado = new { id = id };
            return Json(resultado,
              JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("update")]
        public JsonResult Update(Vendedor vendedor)
        {
            var alterou = repository.Alterar(vendedor);
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

            List<Veiculo> veiculos = repositoryVeiculo.ObterTodos();
            ViewBag.Veiculos = veiculos;

            List<Usuario> usuarios = repositoryUsuario.ObterTodos();
            ViewBag.Usuarios = usuarios;

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
            var vendedores = repository.ObterTodos();

            List<object> vendedoresSelect2 =
                new List<object>();
            foreach (Vendedor vendedor in vendedores)
            {
                vendedoresSelect2.Add(new
                {
                    id = vendedor.Id,
                    text = vendedor.Nome
                });
            }
            var resultado = new
            {
                results = vendedoresSelect2
            };
            return Json(resultado,
                JsonRequestBehavior.AllowGet);
        }
    }
}