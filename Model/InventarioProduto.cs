﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("inventarios_produtos")]
    public class InventarioProduto
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("id_inventario")]
        public int IdInventario { get; set; }



        [Column("id_produto")]
        public int IdProduto { get; set; }


    }
}
