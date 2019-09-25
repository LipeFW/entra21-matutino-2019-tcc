using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class VendaRepository : IVendaRepository
    {
        public SystemContext context;

        public VendaRepository()
        {
            context = new SystemContext();
        }


        public bool Alterar(Venda venda)
        {
            var vendaOriginal = context.Vendas.FirstOrDefault(x => x.Id == venda.Id);
            if (venda == null)
                return false;

            vendaOriginal.Vendedor = venda.Vendedor;
            vendaOriginal.IdVendedor = venda.IdVendedor;
            vendaOriginal.Cliente = venda.Cliente;
            vendaOriginal.IdCliente = venda.IdCliente;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var venda = context.Vendas.FirstOrDefault(x => x.Id == id);
            if (venda == null)
                return false;
            venda.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public int Inserir(Venda venda)
        {
            venda.RegistroAtivo = true;
            context.Vendas.Add(venda);
            context.SaveChanges();
            return venda.Id;
        }

        public Venda ObterPeloId(int id)
        {
            return context.Vendas.Include("Cliente").Include("Vendedor").FirstOrDefault(x => x.Id == id);
        }

        public List<Venda> ObterTodos()
        {
            return context
                .Vendas
                .Where(x => x.RegistroAtivo)
                .ToList();
        }
    }
}
