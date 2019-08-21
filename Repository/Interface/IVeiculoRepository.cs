using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;

namespace Repository.Interface
{
   public class IVeiculoRepository
    {
        int Inserir(Veiculo veiculo);
         bool Alterar(Veiculo veiculo);
        bool Apagar();
       Veiculo ObterPeloId(int id);
        public List<Veiculo> ObterProdutosPeloIdVenda;
        
    }
}
