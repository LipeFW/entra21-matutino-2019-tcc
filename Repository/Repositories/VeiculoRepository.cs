using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;
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
            return context.Veiculos.FirstOrDefault(x => x.Id == id);

        }


        public List<Veiculo> ObterTodos()
        {
            return context.Veiculos.Where(x => x.RegistroAtivo == true).ToList();

        }
        public bool Alterar(Veiculo veiculo)
        {
            var veiculooriginal = context.Veiculos.FirstOrDefault(x => x.Id == veiculo.Id);

            if (veiculooriginal == null)
                return false;

            veiculooriginal.Id = veiculo.Id;
            veiculooriginal.Marca = veiculo.Marca;
            veiculooriginal.Modelo = veiculo.Modelo;
            veiculooriginal.NumeroCaminhao = veiculo.NumeroCaminhao;
            veiculooriginal.Placa = veiculo.Placa;
            veiculooriginal.RegistroAtivo = veiculo.RegistroAtivo;

            int quantidadeafetada = context.SaveChanges();
            return quantidadeafetada == 1;
        }

     



     
    }
}
