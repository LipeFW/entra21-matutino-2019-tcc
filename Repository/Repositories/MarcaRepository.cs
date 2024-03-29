﻿using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class MarcaRepository : IMarcaRepository
    {
        private SystemContext context;
        public MarcaRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Marca marca)
        {
            var marcaOriginal = context.Marcas.FirstOrDefault(x => x.Id == marca.Id);

            if (marcaOriginal == null)
                return false;

            marcaOriginal.Nome = marca.Nome;
            marcaOriginal.Id = marca.Id;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public bool Apagar(int id)
        {
            var marca = context.Marcas.FirstOrDefault(x => x.Id == id);
            
            if (marca == null)
            {
                return false;
            }

            marca.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public int Inserir(Marca marca)
        {
            context.Marcas.Add(marca);
            context.SaveChanges();
            return marca.Id;
        }

        public Marca ObterPeloId(int id)
        {
            var marca = context.Marcas.FirstOrDefault(x => x.Id == id);
            return marca;
        }

        public List<Marca> ObterTodos()
        {
            return context.Marcas.Where(x => x.RegistroAtivo == true).OrderBy(x => x.Id).ToList();
        }
    }
}