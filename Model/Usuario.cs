using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("usuarios")]
    public class Usuario
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("nome")]
        public string Login { get; set; }

        [Column("senha")]
        public string Senha { get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }
    }
}
