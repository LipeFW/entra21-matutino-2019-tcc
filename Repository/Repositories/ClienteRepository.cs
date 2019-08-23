﻿using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        private SystemContext context;

        public ClienteRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Cliente cliente)
        {
            var clienteOriginal = context.Clientes.Where(x => x.Id == cliente.Id).FirstOrDefault();

            if (clienteOriginal == null)
                return false;

            clienteOriginal.Nome = cliente.Nome;
            clienteOriginal.Id = cliente.Id;
            clienteOriginal.Telefone= cliente.Telefone;
            clienteOriginal.CPF = cliente.CPF;
            clienteOriginal.CNPJ = cliente.CNPJ;
            clienteOriginal.IdVendedor = cliente.IdVendedor;
            clienteOriginal.Vendedor = cliente.Vendedor;
          
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;

        }

        public bool Apagar(int id)
        {
            var cliente = context.Clientes.FirstOrDefault(x => x.Id == id);

            if (cliente == null)
                return false;

            cliente.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public int Inserir(Modelo modelo)
        {
            context.Clientes.Add(cliente);
            context.SaveChanges();
            return cliente.Id;
        }

        public Cliente ObterPeloId(int id)
        {
            var cliente = context.Clientes.FirstOrDefault(x => x.Id == id);
            return cliente;
        }

        public List<Cliente> ObterTodos()
        {
            return context.Clientes.Where(x => x.RegistroAtivo == true).ToList();
        }
    }
}
