﻿using Model;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    [Route("venda/")]
    public class VendaController : Controller
    {
        VendaRepository repository;

        public VendaController()
        {
            repository = new VendaRepository();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var vendas = repository.ObterTodos();
            var resultado = new { data = vendas };
            return Json(resultado,
                JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("cadastro")]
        public ActionResult Cadastro(Venda venda)
        {
            int id = repository.Inserir(venda);
            return RedirectToAction("Editar",
                new { id = id });
        }

        [HttpPost, Route("editar")]
        public JsonResult Editar(Venda venda)
        {
            var alterou = repository.Alterar(venda);
            var resultado = new { status = alterou };
            return Json(resultado,
                JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("apagar")]
        public JsonResult Apagar(int id)
        {
            var apagou = repository.Apagar(id);
            var resultado = new { status = apagou };
            return Json(resultado,
                JsonRequestBehavior.AllowGet);
        }

        public ActionResult Index()
        {          
            return View();
        }

        public ActionResult Cadastro()
        {
            VendedorRepository vendedorRepository = new VendedorRepository();
            List<Vendedor> vendedores = vendedorRepository.ObterTodos();
            ViewBag.Vendedores = vendedores;

            ClienteRepository clienteRepository = new ClienteRepository();
            List<Cliente> clientes = clienteRepository.ObterTodos();
            ViewBag.Clientes = clientes;

            ProdutoRepository produtoRepository = new ProdutoRepository();
            List<Produto> produtos = produtoRepository.ObterTodos();
            ViewBag.Produtos = produtos;

            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            var venda = repository.ObterPeloId(id);
            if (venda == null)
                return RedirectToAction("Index");

            ViewBag.Venda = venda;
            return View();
        }
    }
}