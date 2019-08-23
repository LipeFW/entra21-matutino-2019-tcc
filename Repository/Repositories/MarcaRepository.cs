using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class MarcaRepository : IMarcaRepository
    {
        private SystemContext context;

        public bool Alterar(Marca marca)
        {
            var usuarioOriginal = context.Usuarios.Where(x => x.Id == usuario.Id).FirstOrDefault();

            if (usuarioOriginal == null)
                return false;

            usuarioOriginal.Login = usuario.Login;
            usuarioOriginal.Senha = usuario.Senha;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var usuario = context.Usuarios.FirstOrDefault(x => x.Id == id);
            if (usuario == null)
                return false;

            usuario.RegistroAtivo = false;

            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public int Inserir(Marca marca)
        {
            context.Usuarios.Add(usuario);
            context.SaveChanges();

            return usuario.Id;
        }

        public Marca ObterPeloId(int id)
        {
            var usuario = context.Usuarios.FirstOrDefault(x => x.Id == id);
            return usuario;
        }

        public List<Marca> ObterTodos()
        {
            return context.Usuarios.Where(x => x.RegistroAtivo == true).ToList();
        }
    }
}
