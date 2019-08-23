using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class RotaRepository : IRotaRepository

    {


        private SystemContext context;
        public RotaRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Rota rota)
        {
            var rotaOriginal = context.Rotas.FirstOrDefault(x => x.Id == rota.Id);

            if (rotaOriginal == null)
                return false;

            rotaOriginal.Nome = rota.Nome;
            rotaOriginal.Id = rota.Id;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var rota = context.Rotas.FirstOrDefault(x => x.Id == id);


            if (rota == null)
            {
                return false;
            }

            rota.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;

        }

        public int Inserir(Rota rota)
        {
            context.Rotas.Add(rota);
            context.SaveChanges();
            return rota.Id;
        }

        public Rota ObterPeloId(int id)
        {
            var rota = context.Rotas.FirstOrDefault(x => x.Id == id);
            return rota;
        }

        public List<Rota> ObterTodos()
        {
            return context.Rotas.Where(x => x.RegistroAtivo == true).OrderBy(x => x.Id).ToList();
        }
    }

}
