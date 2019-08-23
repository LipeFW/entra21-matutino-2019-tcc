using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class VeiculoRepository : IVeiculoRepository

    {

        private SystemContext context;

        public VeiculoRepository()
        {
            context = new SystemContext();
        }





        public bool Alterar(Veiculo veiculo)
        {
            throw new NotImplementedException();
        }

        public bool Apagar(int id)
        {

            var veiculo = context.Veiculos
                .FirstOrDefault(x => x.Id == id);

            if (veiculo == null)
                return false;

            veiculo.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public int Inserir(Veiculo veiculo)
        {
            veiculo.RegistroAtivo = true;
            context.Veiculos.Add(veiculo);
            context.SaveChanges();
            return veiculo.Id;
        }

        public Veiculo ObterPeloId(int id)
        {
            return context.Veiculos
          .FirstOrDefault(x => x.Id == id);
        }

        public List<Veiculo> ObterTodos()
        {
            return context.Veiculos.Where(x => x.RegistroAtivo == true).ToList();
        }

    }
}