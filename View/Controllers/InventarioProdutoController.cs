using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{

    [Route("inventarioproduto/")]
    public class InventarioProdutoController : BaseController
    {

        private InventarioProdutoRepository repository;

        public InventarioProdutoController()
        {
            repository = new InventarioProdutoRepository();
        }

        // GET: InventarioProduto
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet, Route("apagar")]
        public JsonResult Apagar(int id)
        {
            var apagou = repository.Apagar(id);
            var resultado = new { status = apagou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
    }
}