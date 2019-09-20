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
    public class VeiculoController : BaseController
    {
        private VeiculoRepository repository;
        private MarcaRepository repositoryMarca;
        private ModeloRepository repositoryModelo;

        public VeiculoController()
        {
            repository = new VeiculoRepository();
            repositoryMarca = new MarcaRepository();
            repositoryModelo = new ModeloRepository();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var veiculos = repository.ObterTodos();
            var resultado = new { data = veiculos };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("inserir")]
        public ActionResult Inserir(Veiculo veiculo)
        {
            veiculo.RegistroAtivo = true;
            var id = repository.Inserir(veiculo);
            var resultado = new { id = id };
            return Json(resultado,
              JsonRequestBehavior.AllowGet);
        }


        [HttpPost, Route("update")]
        public JsonResult Update(Veiculo veiculo)
        {
            var alterou = repository.Alterar(veiculo);
            var resultado = new { status = alterou };
            return Json(resultado);
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
            List<Marca> marcas = repositoryMarca.ObterTodos();
            ViewBag.Marcas = marcas;

            List<Modelo> modelos = repositoryModelo.ObterTodos();
            ViewBag.Modelos = modelos;
            return View();

        }

        public ActionResult Cadastro()
        {
            return View();
        }

      
    }
}