using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;
using System.Data.Entity;

namespace Repository.Repositories
{
    public class VeiculoRepository : IVeiculoRepository
    {
        private SystemContext context;

        public VeiculoRepository()
        {
            context = new SystemContext();

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
            return context.Veiculos.Include("Marca").Include("Modelo").FirstOrDefault(x => x.Id == id);

        }

        public List<Veiculo> ObterTodos()
        {
            return context.Veiculos.Where(x => x.RegistroAtivo == true).Include("Marca").Include("Modelo").ToList();

        }

        public bool Alterar(Veiculo veiculo)
        {
            var veiculoOriginal = context.Veiculos.FirstOrDefault(x => x.Id == veiculo.Id);

            if (veiculoOriginal == null)
                return false;

            veiculoOriginal.Id = veiculo.Id;
            veiculoOriginal.Marca = veiculo.Marca;
            veiculoOriginal.Modelo = veiculo.Modelo;
            veiculoOriginal.AnoFabricacao = veiculo.AnoFabricacao;
            veiculoOriginal.NumeroCaminhao = veiculo.NumeroCaminhao;
            veiculoOriginal.Placa = veiculo.Placa;

            int quantidadeafetada = context.SaveChanges();
            return quantidadeafetada == 1;
        }
    }
}
