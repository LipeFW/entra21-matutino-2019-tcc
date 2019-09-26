using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class CidadeRepository : ICidadeRepository
    {
        private SystemContext context;
        public CidadeRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Cidade cidade)
        {
            var cidadeOriginal = context.Cidades.FirstOrDefault(x => x.Id == cidade.Id);

            if (cidadeOriginal == null)
                return false;

            cidadeOriginal.Id = cidade.Id;
            cidadeOriginal.Nome = cidade.Nome;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var cidade = context.Cidades.FirstOrDefault(x => x.Id == id);
            
            if (cidade == null)
            {
                return false;
            }

            cidade.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public int Inserir(Cidade cidade)
        {
            context.Cidades.Add(cidade);
            context.SaveChanges();
            return cidade.Id;
        }

        public Cidade ObterPeloId(int id)
        {
            var cidade = context.Cidades.FirstOrDefault(x => x.Id == id);
            return cidade;
        }

        public List<Cidade> ObterTodosPeloIdEstado(int idEstado, string busca)
        {

            var consulta = context.Cidades
               .Where(x => x.RegistroAtivo == true && x.IdEstado == idEstado);

            if (!string.IsNullOrEmpty(busca))
            {
                consulta = consulta.Where(x => x.Nome.Contains(busca));
            }

            return consulta
                .OrderBy(x => x.Nome)
                .ToList();
        }
    }
}