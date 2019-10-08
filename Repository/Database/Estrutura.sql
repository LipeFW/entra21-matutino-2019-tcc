
DROP TABLE IF EXISTS rotas, vendas_produtos, vendas, inventarios_produtos, produtos, clientes, vendedores, inventarios, veiculos, contatos, modelos, marcas, categorias, usuarios;

CREATE TABLE usuarios( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
url_imagem VARCHAR(100),
nome_completo VARCHAR(100),
sobrenome VARCHAR(100),
senha VARCHAR(100),
admin INT,
telefone VARCHAR(15),
cpf VARCHAR (14),
rg VARCHAR(12),
cep  VARCHAR(9),
logradouro VARCHAR(100),
numero_casa INT,
estado VARCHAR(45),
cidade VARCHAR(45),
registro_ativo BIT
);

INSERT INTO usuarios(nome, nome_completo, sobrenome, url_imagem, admin, senha, cidade, estado, telefone, cpf, rg, cep, logradouro ,numero_casa, registro_ativo)
VALUES   ( 'lipefw'   , 'Felipe'   , 'Weber'      ,'felipe.jpg'   , 1 , '123' ,'Blumenau','Santa Catarina', '(47) 98196-8153' ,'655.856.830-63', '48.444.250-8', '89012-496', 'Rua Professor Luiz Schwartz',486, 1),
	     ( 'illan'    , 'Illan'    , 'Dickmann'   ,'illan.jpg'    , 1 , '123' ,'Blumenau','Santa Catarina', '(47) 98483-1535' ,'060.065.250-54', '14.537.793-3', '89010-345', 'Rua Bonifácio da Cunha',52,1),
	     ( 'eduardo'  , 'Eduardo'  , 'Hausmann'   ,'eduardo.jpg'  , 1 , '123' ,'Blumenau','Santa Catarina', '(47) 96345-4634' ,'753.576.280-84', '34.213.818-2', '89052-273', 'Rua Oscar Rolow',834, 1),
	     ( 'henrique' , 'Henrique' , 'Montibeller','henrique.jpg' , 1 , '123' ,'Blumenau','Santa Catarina', '(47) 96721-5135' ,'221.362.240-00', '24.650.600-3', '89060-315', 'Rua Ella Hofmann',285, 1),
	     ( 'pablo'    , 'Pablo'    , 'Luz'        ,'pabloluz.jpg' , 1 , '123' ,'Blumenau','Santa Catarina', '(47) 99641-8624' ,'513.342.770-01', '21.229.201-8','89056-107', 'Rua Zilmar Rubens França',123, 1),
	     ( 'nathan'   , 'Nathan'   , 'Theiss'     ,'nathan.jpg'   , 1 , '123' ,'Blumenau','Santa Catarina', '(47) 96236-7542' ,'486.754.660-72', '38.053.801-5', '89057-260', 'Rua Emma Schuhart',72, 1),
	     ( 'usuario'  , 'Usuário'  , 'Cleiton'    ,'default'      , 0 , '123' ,'Blumenau','Santa Catarina', '(47) 92345-7234' ,'554.092.050-30', '24.925.367-7', '89035-340', 'Rua Promotor Ribeiro de Carvalho',213, 1);

CREATE TABLE categorias( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
registro_ativo BIT
);
 
INSERT INTO categorias(nome,registro_ativo)
VALUES	('Bebidas', 1),	
		('Doces', 1),		 
		('Salgados', 1);

CREATE TABLE marcas( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
registro_ativo BIT);
 
INSERT INTO marcas(nome,registro_ativo)
VALUES	('Ford', 1),
		('Iveco', 1),
		('Volkswagen', 1),
		('Volvo', 1),
		('Scania', 1);

CREATE TABLE modelos(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
id_marca INT,
FOREIGN KEY (id_marca) REFERENCES marcas(id),
registro_ativo BIT);

INSERT INTO modelos(id_marca, nome, registro_ativo)
VALUES	(1,'Cargo', 1),
		(2,'Stralis', 1),
		(3,'Contellation', 1),
		(4,'FH16', 1),
		(5,'G420', 1);

			   
CREATE TABLE contatos(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
sobrenome VARCHAR(100),
telefone VARCHAR(15),
email VARCHAR(100),
titulo_mensagem VARCHAR(100),
mensagem TEXT
);

 CREATE TABLE veiculos(
id INT PRIMARY KEY IDENTITY(1,1),
id_marca INT,
id_modelo INT,
ano_fabricacao INT,
numero_caminhao INT,
placa VARCHAR(8),
registro_ativo BIT,
FOREIGN KEY(id_marca) REFERENCES marcas (id),
FOREIGN KEY(id_modelo) REFERENCES modelos (id)
);

INSERT INTO veiculos(id_marca,id_modelo, ano_fabricacao, numero_caminhao, placa, registro_ativo)
VALUES	(1, 1, '2011', 001, 'MJX-0585', 1 ),
		(2, 2, '2003', 002, 'ABC-1548', 1 ),
		(3, 3, '2007', 003, 'JCF-1957', 1 ),
		(4, 4, '2014', 004, 'MUW-0423', 1 ),
		(5, 5, '2004', 005, 'PAI-9785', 1 );

 CREATE TABLE inventarios(
id INT PRIMARY KEY IDENTITY(1,1),
id_veiculo INT,
FOREIGN KEY (id_veiculo) REFERENCES veiculos(id),
registro_ativo BIT,
);

INSERT INTO inventarios(id_veiculo, registro_ativo)
VALUES	(1, 1 ),
		(2, 1 ),
		(3, 1 ),
		(4, 1 ),
		(5, 1 );

CREATE TABLE vendedores(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_veiculo INT,
id_usuario INT,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
FOREIGN KEY (id_veiculo) REFERENCES veiculos(id),
registro_ativo BIT);

INSERT INTO vendedores(nome, id_veiculo, id_usuario, registro_ativo)
VALUES	('Felipe' , 1, 1, 1),
		('Illan' , 2, 2, 1);

CREATE TABLE clientes(
id INT PRIMARY KEY IDENTITY(1,1),
nome  VARCHAR(100),
telefone VARCHAR(15),
cnpj VARCHAR (18),
cpf VARCHAR (14),
cep  VARCHAR(9),
registro_ativo BIT,
id_vendedor INT,
FOREIGN KEY(id_vendedor) REFERENCES vendedores(id)
);

INSERT INTO clientes(nome, telefone, cnpj, cpf, cep, registro_ativo, id_vendedor)
VALUES ('Pedro', '(47) 99158-1254', '08.371.556/0001-04', '241.586.758-63', '89085-578', 1, 1);

CREATE TABLE produtos(
id INT PRIMARY KEY IDENTITY(1,1),
id_categoria INT,
nome VARCHAR(50),
valor DECIMAL(8,2),
FOREIGN KEY (id_categoria) REFERENCES categorias(id),
registro_ativo BIT);

INSERT INTO produtos(id_categoria,nome, valor, registro_ativo)
VALUES 
(1,'Toddynho', 1, 1),
(1,'Xbox', 1, 1),
(1,'PS4', 1, 1);

CREATE TABLE inventarios_produtos(
	id INT PRIMARY KEY IDENTITY(1,1),
	id_produto INT,
	id_inventario INT,
	FOREIGN KEY (id_produto) REFERENCES produtos(id),
	FOREIGN KEY (id_inventario) REFERENCES inventarios(id),
	registro_ativo BIT
);

INSERT INTO inventarios_produtos(id_produto, id_inventario, registro_ativo)
VALUES	(1, 1, 1),
		(2, 1, 1),
		(2, 2, 1),
		(3, 1, 1);



CREATE TABLE vendas(
id INT PRIMARY KEY IDENTITY(1,1),
quantidade INT,
id_cliente INT,
id_vendedor INT,
FOREIGN KEY (id_cliente) REFERENCES clientes(id),
total DECIMAL(8,2),
desconto DECIMAL(8,2),
descricao TEXT,
registro_ativo BIT);

INSERT INTO vendas(quantidade, id_cliente,id_vendedor, registro_ativo, total, desconto, descricao)
VALUES (1, 1, 1, 1, 100, 10, 'teste');

CREATE TABLE vendas_produtos(
	id INT PRIMARY KEY IDENTITY(1,1),
	id_produto INT,
	id_venda INT,
	FOREIGN KEY (id_produto) REFERENCES produtos(id),
	FOREIGN KEY (id_venda) REFERENCES vendas(id),
	registro_ativo BIT
);

INSERT INTO vendas_produtos(id_produto, id_venda, registro_ativo)
VALUES	(1, 1, 1),
		(2, 1, 1),
		(3, 1, 1);

CREATE TABLE rotas(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
id_vendedor INT,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
registro_ativo BIT
);

INSERT INTO rotas(nome,id_vendedor, registro_ativo)
VALUES ('Gaspar', 1, 1),
	   ('Blumenau',1,1);