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
            var marcaOriginal = context.Marcas.Where(x => x.Id == marca.Id).FirstOrDefault();

            if (marcaOriginal == null)
                return false;

            marcaOriginal.Nome = marca.Nome;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var marca = context.Marcas.FirstOrDefault(x => x.Id == id);
            if (marca == null)
                return false;

            marca.RegistroAtivo = false;

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
