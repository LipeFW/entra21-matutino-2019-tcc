DROP TABLE IF EXISTS notas_fiscais, rotas, vendas, produtos, vendedores, veiculos, modelos, clientes, categorias, marcas, usuarios;
CREATE TABLE usuarios( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE marcas (
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45)
);

CREATE TABLE categorias( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45));

CREATE TABLE clientes(
id INT PRIMARY KEY IDENTITY(1,1),
nome  VARCHAR(45),
telefone VARCHAR(20),
cnpj VARCHAR (18),
cep  VARCHAR(9)
);

CREATE TABLE modelos(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_marca INT,
FOREIGN KEY (id_marca) REFERENCES marcas(id)
);

CREATE TABLE veiculos(
id INT PRIMARY KEY IDENTITY(1,1),
placa VARCHAR(10),
descrição VARCHAR(100),
id_modelo iNT,
FOREIGN KEY (id_modelo) REFERENCES modelos(id)
);

CREATE TABLE vendedores(
id INT PRIMARY KEY IDENTITY(1,1),
id_usuario INT,
id_veiculo INT,
FOREIGN KEY(id_veiculo) REFERENCES veiculos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id));

CREATE TABLE produtos(
id INT PRIMARY KEY IDENTITY(1,1),
id_categoria INT,
codigo_barra VARCHAR(12),
quantidade_produto INT,
valor_unitario DECIMAL(8,2),
FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);

CREATE TABLE vendas(
id INT PRIMARY KEY IDENTITY(1,1),
quantidade INT,
id_vendedor INT,
id_cliente INT,
id_produto INT,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
FOREIGN KEY (id_cliente) REFERENCES clientes(id),
FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

CREATE TABLE rotas(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
istancia DECIMAL(5,2),
id_vendedor INT,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id)
);

CREATE TABLE notas_fiscais(
id INT PRIMARY KEY IDENTITY(1,1),
valorfinal DECIMAL(7,2),
id_vendas INT,
FOREIGN KEY (id_vendas) REFERENCES vendas(id)
);








