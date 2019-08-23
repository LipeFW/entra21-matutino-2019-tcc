using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{

    public interface INotaFiscalRepository

    {
        int Inserir(NotaFiscal notaFiscal);

        bool Alterar(NotaFiscal notaFiscal);

        List<NotaFiscal> ObterTodos();

        bool Apagar(int id);

        NotaFiscal ObterPeloId(int id);
    }
}
