using Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class InventarioProdutoRepository
    {
        private SystemContext context;

        public InventarioProdutoRepository()
        {
            context = new SystemContext();

        }

        public bool Apagar(int id)
        {
            var inventarioProduto = context.InventariosProdutos.FirstOrDefault(x => x.Id == id);
            if (inventarioProduto == null)
                return false;

            inventarioProduto.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;

        }

        public int Inserir(InventarioProduto inventarioProduto)
        {
            inventarioProduto.RegistroAtivo = true;
            context.InventariosProdutos.Add(inventarioProduto);
            context.SaveChanges();
            return inventarioProduto.Id;

        }

        public InventarioProduto ObterPeloId(int id)
        {
            return context.InventariosProdutos.Include("Categoria").Include("Inventario").FirstOrDefault(x => x.Id == id);

        }

        public List<InventarioProduto> ObterTodos()
        {
            return context.InventariosProdutos.Where(x => x.RegistroAtivo == true).Include("Marca").Include("Modelo").ToList();

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
