using Model;
using Repository.Interface;
using System;
using System.Linq;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Repository.Repositories
{
    public class ContatoRepository : IContatoRepository
    {
        private SystemContext context;
        public ContatoRepository()
        {
            context = new SystemContext();
        }

        public int Inserir(Contato contato)
        {
            context.Contatos.Add(contato);
            context.SaveChanges();
            return contato.Id;
        }
    }
}