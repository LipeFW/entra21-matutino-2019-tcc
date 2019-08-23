using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class NotaFiscalRepository : INotaFiscalRepository
    {
        private SystemContext context;

        public NotaFiscalRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(NotaFiscal notaFiscal)
        {
            var notaFiscalOriginal = context.NotasFiscais.Where(x => x.Id == notaFiscal.Id).FirstOrDefault();

            if (notaFiscalOriginal == null)
                return false;

            notaFiscalOriginal.Id = notaFiscal.Id;
            notaFiscalOriginal.IdVenda = notaFiscal.IdVenda;
            notaFiscalOriginal.Venda = notaFiscal.Venda;
            notaFiscalOriginal.ValorFinal = notaFiscal.ValorFinal;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var notaFiscal = context.NotasFiscais.FirstOrDefault(x => x.Id == id);
            if (notaFiscal == null)
                return false;

            notaFiscal.RegistroAtivo = false;

            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public int Inserir(NotaFiscal notaFiscal)
        {
            context.NotasFiscais.Add(notaFiscal);
            context.SaveChanges();

            return notaFiscal.Id;
        }

        public NotaFiscal ObterPeloId(int id)
        {
            var notaFiscal = context.NotasFiscais.FirstOrDefault(x => x.Id == id);
            return notaFiscal;
        }

        public List<NotaFiscal> ObterTodos()
        {
            return context.NotasFiscais.Where(x => x.RegistroAtivo == true).ToList();
        }
    }
}
