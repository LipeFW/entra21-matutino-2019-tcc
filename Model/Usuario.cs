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

        [Column("nome_completo")]
        public string NomeCompleto { get; set; }

        [Column("sobrenome")]
        public string Sobrenome { get; set; }

        [Column("url_imagem")]
        public string UrlImagem { get; set; }

        [Column("senha")]
        public string Senha { get; set; }

        [Column("admin")]
        public int Admin { get; set; }

        [Column("telefone")]
        public string Telefone { get; set; }

        [Column("cpf")]
        public string CPF { get; set; }

        [Column("rg")]
        public string RG { get; set; }

        [Column("cep")]
        public string CEP { get; set; }

        [Column("logradouro")]
        public string Logradouro { get; set; }

        [Column("numero_casa")]
        public int NumeroCasa { get; set; }

        [Column("estado")]
        public string Estado { get; set; }

        [Column("cidade")]
        public string Cidade { get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }

        [NotMapped]
        public string NomeESobrenome
        {
            get
            {
                return NomeCompleto + " " + Sobrenome;
            }
        }
    }
}
