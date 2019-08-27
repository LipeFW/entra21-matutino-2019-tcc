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
        ClienteRepository repository;

        public ClienteController()
        {
            repository = new ClienteRepository();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var clientes = repository.ObterTodos();
            var resultado = new { data = clientes };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("cadastro")]
        public ActionResult Cadastro(Cliente cliente)
        {
            int id = repository.Inserir(cliente);
            return RedirectToAction("Editar", new { id = id });
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Cliente cliente)
        {
            var alterou = repository.Alterar(cliente);
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
            List<Cliente> clientes=repository.ObterTodos();
            ViewBag.Clientes = clientes;
            return View();
        }

        public ActionResult Cadastro()
        {
            ClienteRepository clienterepository = new ClienteRepository();
            List<Cliente> clientes = clienterepository.ObterTodos();
            ViewBag.Clientes = clientes;
           return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var cliente = repository.ObterPeloId(id);
            if (cliente == null)
                return RedirectToAction("Index");

            ViewBag.Cliente = cliente;
            return View();
        }
    }
}