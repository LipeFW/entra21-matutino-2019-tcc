using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("usuario/")]
    public class UsuarioController : Controller
    {

        private UsuarioRepository repository;

        public UsuarioController()
        {
            repository = new UsuarioRepository();
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult ObterTodos()
        {
            var usuarios = repository.ObterTodos();
            var resultado = new { data = usuarios };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Inserir(Usuario usuario)
        {
            usuario.RegistroAtivo = true;
            var id = repository.Inserir(usuario);
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
        public JsonResult Update(Usuario usuario)
        {
            var alterou = repository.Alterar(usuario);
            var resultado = new { status = alterou };
            return Json(resultado);
        }

        [HttpGet, Route("usuario/obterpeloid")]
        public JsonResult ObterPeloId(int id)
        {
            return Json(repository.ObterPeloId(id), JsonRequestBehavior.AllowGet);
        }

    }
}