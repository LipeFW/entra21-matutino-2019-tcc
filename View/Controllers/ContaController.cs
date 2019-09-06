using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class ContaController : Controller
    {
        // GET: Conta
        public ActionResult Perfil()
        {
            return View();
        }

        public ActionResult Config()
        {
            return View();
        }

    }
}