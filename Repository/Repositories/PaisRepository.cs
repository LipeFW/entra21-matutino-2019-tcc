using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class PaisRepository : IPaisRepository
    {
        private SystemContext context;
        public PaisRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Pais pais)
        {
            var paisOriginal = context.Paises.FirstOrDefault(x => x.Id == pais.Id);

            if (paisOriginal == null)
                return false;

            paisOriginal.Id = pais.Id;
            paisOriginal.Nome = pais.Nome;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var pais = context.Paises.FirstOrDefault(x => x.Id == id);
            
            if (pais == null)
            {
                return false;
            }

            pais.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public int Inserir(Pais pais)
        {
            context.Paises.Add(pais);
            context.SaveChanges();
            return pais.Id;
        }

        public Pais ObterPeloId(int id)
        {
            var pais = context.Paises.FirstOrDefault(x => x.Id == id);
            return pais;
        }

        public List<Pais> ObterTodos()
        {
            return context.Paises.Where(x => x.RegistroAtivo == true).OrderBy(x => x.Id).ToList();
        }
    }
}
