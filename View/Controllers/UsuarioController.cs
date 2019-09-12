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
        private PaisRepository repositoryPais;
        private EstadoRepository repositoryEstado;
        private CidadeRepository repositoryCidade;

        public UsuarioController()
        {
            repository = new UsuarioRepository();
            repositoryPais = new PaisRepository();
            repositoryEstado = new EstadoRepository();
            repositoryCidade = new CidadeRepository();
        }

        [HttpGet]
        public ActionResult Perfil()
        {
            List<Pais> paises = repositoryPais.ObterTodos();
            List<Estado> estados = repositoryEstado.ObterTodos();
            List<Cidade> cidades = repositoryCidade.ObterTodos();

            ViewBag.Paises = paises;
            ViewBag.Estados = estados;
            ViewBag.Cidades = cidades;
            return View();
        }

        [HttpGet]
        public ActionResult Config()
        {
            List<Pais> paises = repositoryPais.ObterTodos();
            List<Estado> estados = repositoryEstado.ObterTodos();
            List<Cidade> cidades = repositoryCidade.ObterTodos();

            ViewBag.Paises = paises;
            ViewBag.Estados = estados;
            ViewBag.Cidades = cidades;
            return View();
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet, Route("obtertodos")]
        public JsonResult ObterTodos()
        {
            var usuarios = repository.ObterTodos();
            var resultado = new { data = usuarios };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("inserir")]
        public JsonResult Inserir(Usuario usuario)
        {
            usuario.RegistroAtivo = true;
            var id = repository.Inserir(usuario);
            var resultado = new { id = id };
            return Json(resultado,JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("apagar")]
        public JsonResult Apagar(int id)
        {
            var apagou = repository.Apagar(id);
            var resultado = new { status = apagou };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, Route("update")]
        public JsonResult Update(Usuario usuario)
        {
            var alterou = repository.Alterar(usuario);
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
            var usuarios = repository.ObterTodos();

            List<object> usuariosSelect2 = new List<object>();
            foreach (Usuario usuario in usuarios)
            {
                usuariosSelect2.Add(new
                {
                    id = usuario.Id,
                    nome = usuario.Nome,
                    senha = usuario.Senha,
                    registro = usuario.RegistroAtivo

                });
            }
            var resultado = new { results = usuariosSelect2 };
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
    }
}