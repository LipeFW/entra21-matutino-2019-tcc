using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class EstadoRepository : IEstadoRepository
    {
        private SystemContext context;

        public EstadoRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Estado estado)
        {
            var estadoOriginal = context.Estados.FirstOrDefault(x => x.Id == estado.Id);

            if (estadoOriginal == null)
                return false;

            estadoOriginal.Id = estado.Id;
            estadoOriginal.Nome = estado.Nome;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var estado = context.Estados.FirstOrDefault(x => x.Id == id);
            
            if (estado == null)
            {
                return false;
            }

            estado.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public int Inserir(Estado estado)
        {
            context.Estados.Add(estado);
            context.SaveChanges();
            return estado.Id;
        }

        public Estado ObterPeloId(int id)
        {
            var estado = context.Estados.FirstOrDefault(x => x.Id == id);
            return estado;
        }

        public List<Estado> ObterTodosPeloIdPais(int idPais, string busca)
        {
            var consulta = context.Estados
                .Where(x => x.RegistroAtivo == true && x.IdPais == idPais);

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