
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;
using Repository;
using Repository.Interface;


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

            var veiculoOriginal = context
                .Veiculos.FirstOrDefault(
                x => x.Id == veiculo.Id);
            if (veiculoOriginal == null)
                return false;

            veiculoOriginal.Placa = veiculo.Placa;
            veiculoOriginal.Modelo = veiculo.Modelo;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var veiculo = context.Veiculos.FirstOrDefault(x => x.Id == id);
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
            return context.Veiculos.FirstOrDefault(x => x.Id == id);

        }





    }
}

