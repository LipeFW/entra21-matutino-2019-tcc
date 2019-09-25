using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class SistemaInitalizer : DropCreateDatabaseAlways<SystemContext>
    {

        protected override void Seed(SystemContext context)
        {
            base.Seed(context);
        }
    }
}
