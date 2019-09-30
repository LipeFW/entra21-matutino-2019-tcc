using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class LoginController : Controller
    {
        private UsuarioRepository repository;

        public LoginController()
        {
            repository = new UsuarioRepository();
        }

        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return View();
        }

        [Route("logout")]
        public ActionResult Logout()
        {
            Session["Usuario"] = null;
            return RedirectToAction("Index");
        }

        [HttpPost, Route("login")]
        public ActionResult Login(string login, string senha)
        {
            var usuario = repository.Verificar(login, senha);

            if (usuario == null)
            {
                return RedirectToAction("Index");
            }

            Session.Add("Usuario", usuario);
            return RedirectToAction("Index", "Dashboard");
        }
    }
}