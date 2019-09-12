﻿using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    interface ICidadeRepository
    {
        int Inserir(Cidade cidade);

        bool Alterar(Cidade cidade);

        List<Cidade> ObterTodos();

        bool Apagar(int id);

        Cidade ObterPeloId(int id);
    }
}