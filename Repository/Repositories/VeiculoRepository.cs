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


        public bool Apagar(int id)
        {
            var veiculo

        }


        public bool Alterar(Veiculo veiculo)
        {
             
        }

     

        public int Inserir(Veiculo veiculo)
        {
            
        }

        public Veiculo ObterPeloId(int id)
        {
           
        }

        public List<Veiculo> ObterTodos()
        {
           
        }
    }
}
