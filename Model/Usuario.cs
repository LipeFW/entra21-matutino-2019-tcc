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
        public string Nome { get; set; }

        [Column("nome_1")]
        public string Nome1 { get; set; }

        [Column("sobrenome")]
        public string Sobrenome { get; set; }

        [Column("url_imagem")]
        public string UrlImagem { get; set; }

        [Column("senha")]
        public string Senha { get; set; }

        [Column("admin")]
        public int Admin { get; set; }

        [Column("telefone")]
        public int Telefone { get; set; }

        [Column("cpf")]
        public int CPF { get; set; }

        [Column("rg")]
        public int RG { get; set; }

        [Column("logradouro")]
        public int logradouro { get; set; }

        [Column("numero_casa")]
        public int NumeroCasa { get; set; }

        [Column("id_pais")]
        public int IdPais { get; set; }

        [ForeignKey("IdPais")]
        public Pais Pais { get; set; }

        [Column("id_estado")]
        public int IdEstado { get; set; }

        [ForeignKey("IdEstado")]
        public Pais Estado { get; set; }

        [Column("id_cidade")]
        public int IdCidade { get; set; }

        [ForeignKey("IdCidade")]
        public Pais Cidade { get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }
    }
}
