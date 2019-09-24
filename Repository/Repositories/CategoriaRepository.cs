
using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class CategoriaRepository : ICategoriaRepository
    {

        private SystemContext context;
        public CategoriaRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Categoria categoria)
        {
            var categoriaOriginal = context.Categorias.FirstOrDefault(x => x.Id == categoria.Id);

            if (categoriaOriginal == null)
                return false;

            categoriaOriginal.Nome = categoria.Nome;
            categoriaOriginal.Id = categoria.Id;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var categoria = context.Categorias.FirstOrDefault(x => x.Id == id);


            if (categoria == null)
            {
                return false;
            }

            categoria.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;

        }

        public int Inserir(Categoria categoria)
        {
            context.Categorias.Add(categoria);
            context.SaveChanges();
            return categoria.Id;
        }

        public Categoria ObterPeloId(int id)
        {
            var categoria = context.Categorias.FirstOrDefault(x => x.Id == id);
            return categoria;
        }

        public List<Categoria> ObterTodos()
        {
            return context.Categorias.Where(x => x.RegistroAtivo == true).OrderBy(x => x.Id).ToList();
        }
    }

}
