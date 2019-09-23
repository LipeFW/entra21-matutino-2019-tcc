using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("modelo/")]
    public class ModeloController : BaseController
    {
        private ModeloRepository repository;
        private MarcaRepository repositoryMarca;

        public ModeloController()
        {
            repository = new ModeloRepository();
            repositoryMarca = new MarcaRepository();
        }

        public ActionResult Index()
        {
            List<Marca> marcas = repositoryMarca.ObterTodos();
            ViewBag.Marcas = marcas;
          
            return View();
        }

        public ActionResult Cadastro()
        {
            MarcaRepository marcaRepository = new MarcaRepository();
            List<Marca> marcas = marcaRepository.ObterTodos();
            ViewBag.Marcas = marcas;

            return View();
        }

        public ActionResult Editar(int id)
        {
            var modelo = repository.ObterPeloId(id);
            if (modelo == null)
            {
                return RedirectToAction("Index");
            }

            ViewBag.Modelo = modelo;
            return View();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var modelos = repository.ObterTodos();
            var resultado = new { data = modelos };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }


        [HttpPost, Route("inserir")]
        public ActionResult Inserir(Modelo modelo)
        {
            modelo.RegistroAtivo = true;
            var id = repository.Inserir(modelo);
            var resultado = new { id = id };
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

        [HttpPost, Route("update")]
        public JsonResult Update(Modelo modelo)
        {
            var alterou = repository.Alterar(modelo);
            var resultado = new { status = alterou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("obterpeloid")]
        public JsonResult ObterPeloId(int id)
        {
            return Json(repository.ObterPeloId(id), JsonRequestBehavior.AllowGet);
        }
    }
}