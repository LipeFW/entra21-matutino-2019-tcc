using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("cliente/")]
    public class ClienteController : Controller
    {

        private ClienteRepository repository;

        public ClienteController()
        {
            repository = new ClienteRepository();
        }


        public ActionResult Cadastro()
        {
            return View();
        }

        public ActionResult Editar( int id)
        {
            var cliente = repository.ObterPeloId(id);
            if(cliente == null)
            {
                return RedirectToAction("Index");
            }

            ViewBag.Cliente = cliente;
            return View();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var clientes = repository.ObterTodos();
            var resultado = new { data = clientes };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost,Route("inserir")]
        public JsonResult Inserir(Cliente cliente)
        {
            cliente.RegistroAtivo = true;
            var id = repository.Inserir(cliente);
            var resultado = new { id = id };
            return Json(resultado);
        }

        [HttpGet, Route("apagar")]
        public JsonResult Apagar(int id)
        {
            var apagou = repository.Apagar(id);
            var resultado = new { status = apagou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("update")]
        public JsonResult Update(Cliente cliente)
        {
            var alterou = repository.Alterar(cliente);
            var resultado = new { status = alterou };
            return Json(resultado);
        }

        [HttpGet, Route("obterpeloid")]
        public JsonResult ObterPeloId(int id)
        {
            return Json(repository.ObterPeloId(id), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
    }
}