using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Remoting.Contexts;

namespace Repository
{
   public class SystemContext:DbContext
    {
        public SystemContext() : base ("SqlServerConnection")
        {

        }
        public DbSet<Categoria> Categorias  { get; set; }
        public DbSet<Cliente> Clientes  { get; set; }
        
        public DbSet<NotaFiscal> NotasFiscais  { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Rota> Rotas { get; set; }
        public DbSet<Usuario> Usuarios  { get; set; }
        public DbSet<Veiculo> Veiculos { get; set; }
        public DbSet<Venda> Vendas  { get; set; }
        public DbSet<Vendedor> Vendedores { get; set; }
    }
}
