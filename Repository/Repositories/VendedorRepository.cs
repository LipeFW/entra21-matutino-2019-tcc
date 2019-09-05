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
    public class VendedorRepository: IVendedorRepository
    {
        public SystemContext context;
        public VendedorRepository()
        {
            context = new SystemContext();
        }
        public bool Alterar(Vendedor vendedor)
        {
            var vendedorOriginal = context.Vendedores.FirstOrDefault(x => x.Id == vendedor.Id);
            if (vendedor == null)
                return false;

            vendedorOriginal.Id = vendedor.Id;
            vendedorOriginal.Usuario = vendedor.Usuario;
            vendedorOriginal.IdUsuario = vendedor.IdUsuario;
            vendedorOriginal.Veiculo = vendedor.Veiculo;
            vendedorOriginal.IdVeiculo = vendedor.IdVeiculo;
            
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }
            public int Inserir(Vendedor vendedor)
        {
            vendedor.RegistroAtivo = true;
            context.Vendedores.Add(vendedor);
            context.SaveChanges();
            return vendedor.Id;
        }
        public Vendedor ObterPeloId( int id)
        {
            return context.Vendedores.Include("Venda").FirstOrDefault(x => x.Id == id);
        }
        public bool Apagar(int id)
        {
            var vendedor = context.Vendedores.FirstOrDefault(x => x.Id == id);
            if (vendedor == null)
                return false;
            vendedor.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }
        public List<Vendedor> ObterTodos()
        {
            return context.Vendedores.Where(x => x.RegistroAtivo).Include("Veiculo").Include("Usuario").ToList();
        }

    }
}