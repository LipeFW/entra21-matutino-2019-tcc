﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{

    public interface ILoginRepository

    {
        int inserir();
        bool alterar();
        bool apagar();
    }
}
