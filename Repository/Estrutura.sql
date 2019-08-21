CREATE TABLE usuarios( 
id_usuario INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE marcas (
id_marca INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45)
);

CREATE TABLE categorias( 
id_categoria INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45));

CREATE TABLE clientes(
id_cliente INT PRIMARY KEY IDENTITY(1,1),
nome  VARCHAR(45),
telefone VARCHAR(20),
cnpj VARCHAR (18),
cep  VARCHAR(9)
);

CREATE TABLE vendedores(
id_vendedor INT PRIMARY KEY IDENTITY(1,1),
id_usuario VARCHAR(1),
id_veiculo VARCHAR(1),
FOREIGN KEY(id_veiculo) REFERENCES veiculos(id_veiculo),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE veiculos(
id_veiculo INT PRIMARY KEY IDENTITY(1,1),
placa VARCHAR(10),
descrição VARCHAR(100),
id_modelo VARCHAR(1),
FOREIGN KEY (id_modelo) REFERENCES modelos(id_modelo)
);

CREATE TABLE modelos(
id_modelo INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_marca VARCHAR(1),
FOREIGN KEY (id_marca) REFERENCES marcas(id_marca)
);

CREATE TABLE produtos(
id_produto INT PRIMARY KEY IDENTITY(1,1),
id_categorias VARCHAR(1),
codigo_barra VARCHAR(12),
quantidade_produtos INT,
valor_unitario DECIMAL(8,2),
FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE vendas(
id_venda INT PRIMARY KEY IDENTITY(1,1),
quantidade int,
id_vendedor int,
id_cliente int,
id_produto int,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id_vendedor),
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);






