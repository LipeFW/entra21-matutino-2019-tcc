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

        [HttpGet]
        public ActionResult Index()
        {
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

        [HttpGet, Route("obtertodosselect2")]
        public JsonResult ObterTodosSelect2(string term)
        {
            var clientes = repository.ObterTodos();

            List<object> clientesSelect2 = new List<object>();
            foreach (Cliente cliente in clientes)
            {
                clientesSelect2.Add(new
                {
                    id = cliente.Id,
                    nome = cliente.Nome,
                    telefone = cliente.Telefone,
                    cpf = cliente.CPF,
                    cep = cliente.CEP,
                    cnpj = cliente.CNPJ,
                    id_vendedor = cliente.IdVendedor,
                    registro = cliente.RegistroAtivo

                });
            }
            var resultado = new { results = clientesSelect2 };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
    }
}