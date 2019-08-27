 using System;
 using System.Collections.Generic;
 using System.ComponentModel.DataAnnotations;
 using System.ComponentModel.DataAnnotations.Schema;
 using System.Linq;
 using System.Text;
 using System.Threading.Tasks;
 
 namespace Model
 {
     [Table("rotas")]
     public class Rota
     {
         [Key, Column("id")]
         public int Id { get; set; }
 
         [Column("nome")]
         public string Nome { get; set; }
 
         [Column("id_vendedor")]
         public int IdVendedor { get; set; }
 
         [ForeignKey("IdVendedor")]
         public Vendedor Vendedor { get; set; }
 
         [Column("registro_ativo")]
         public bool RegistroAtivo { get; set; }
     }
 }
