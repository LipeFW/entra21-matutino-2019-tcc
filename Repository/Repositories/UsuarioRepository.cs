﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;
using Repository.Interface;

namespace Repository.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        private SystemContext context;

        public UsuarioRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Usuario usuario)
        {
            var usuarioOriginal = context.Usuarios.Where(x => x.Id == usuario.Id).FirstOrDefault();

            if (usuarioOriginal == null)
                return false;

            usuarioOriginal.NomeCompleto = usuario.NomeCompleto;
            usuarioOriginal.Sobrenome = usuario.Sobrenome;
            usuarioOriginal.Nome = usuario.Nome;
            usuarioOriginal.Senha = usuario.Senha;
            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;
        }

        public bool AlterarSenha(Usuario usuario)
        {
            var usuarioOriginal = context.Usuarios.Where(x => x.Id == usuario.Id).FirstOrDefault();

            if (usuarioOriginal == null)
                return false;

            usuarioOriginal.Senha = usuario.Senha;

            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;


        }

        public bool AlterarInfo(Usuario usuario)
        {
            var usuarioOriginal = context.Usuarios.Where(x => x.Id == usuario.Id).FirstOrDefault();

            if (usuarioOriginal == null)
                return false;

            usuarioOriginal.Nome = usuario.Nome;
            usuarioOriginal.NomeCompleto = usuario.NomeCompleto;
            usuarioOriginal.Sobrenome = usuario.Sobrenome;
            usuarioOriginal.CEP = usuario.CEP;
            usuarioOriginal.CPF = usuario.CPF;
            usuarioOriginal.RG = usuario.RG;
            usuarioOriginal.Telefone = usuario.Telefone;
            usuarioOriginal.NumeroCasa = usuario.NumeroCasa;

            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;


        }

        public bool Apagar(int id)
        {
            var usuario = context.Usuarios.FirstOrDefault(x => x.Id == id);
            if (usuario == null)
                return false;

            usuario.RegistroAtivo = false;

            int quantidadeAfetada = context.SaveChanges();

            return quantidadeAfetada == 1;

        }

        public int Inserir(Usuario usuario)
        {
            context.Usuarios.Add(usuario);
            context.SaveChanges();

            return usuario.Id;
        }

        public Usuario ObterPeloId(int id)
        {
            var usuario = context.Usuarios.FirstOrDefault(x => x.Id == id);
            return usuario;
        }

        public Usuario Verificar(string nome, string senha)
        {
            var usuario = context.Usuarios.FirstOrDefault(x => x.Nome == nome && x.Senha == senha && x.RegistroAtivo == true);
            return usuario;
        }

        public List<Usuario> ObterTodos()
        {
            return context.Usuarios.Where(x => x.RegistroAtivo == true).ToList();
        }
    }
}
