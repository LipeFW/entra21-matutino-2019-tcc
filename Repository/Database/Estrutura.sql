DROP TABLE IF EXISTS notas_fiscais, rotas, vendas, clientes,vendedores, rotas, produtos, veiculos, modelos, categorias, marcas, usuarios, cidades, estados, paises;

CREATE TABLE paises(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
registro_ativo BIT
);
INSERT INTO paises(nome, registro_ativo) VALUES 
/*<--Países da América do Norte (ID 1 - 3)-->*/
/*ID 1*/('Canadá', 1),
/*ID 2*/('Estados Unidos da América', 1),
/*ID 3*/('México', 1),
/*<--/Países da América do Norte-->*/
/*<--Países da América Central   (ID 4 - 23)-->*/
/*ID 4*/('Antígua e Barbuda', 1),
/*ID 5*/('Bahamas', 1),
/*ID 6*/('Barbados', 1),
/*ID 7*/('Belize', 1),
/*ID 8*/('Costa Rica', 1),
/*ID 9*/('Cuba', 1),
/*ID 10*/('Dominica', 1),
/*ID 11*/('El Salvador', 1),
/*ID 12*/('Granada', 1),
/*ID 13*/('Guatemala', 1),
/*ID 14*/('Haiti', 1),
/*ID 15*/('Honduras', 1),
/*ID 16*/('Jamaica', 1),
/*ID 17*/('Nicarágua', 1),
/*ID 18*/('Panamá', 1),
/*ID 19*/('República Dominicana', 1),
/*ID 20*/('Santa Lúcia', 1),
/*ID 21*/('São Cristóvão e Nevis', 1),
/*ID 22*/('São Vicente e Granadinas', 1),
/*ID 23*/('Trinidad e Tobago', 1),
/*<--/Países da América Central-->*/
/*<--Países da América do Sul (ID 24 - 35)-->*/
/*ID 24*/('Argentina', 1),
/*ID 25*/('Bolívia', 1),
/*ID 26*/('Brasil', 1),
/*ID 27*/('Chile', 1),
/*ID 28*/('Colômbia', 1),
/*ID 29*/('Equador', 1),
/*ID 30*/('Guiana', 1),
/*ID 31*/('Paraguai', 1),
/*ID 32*/('Peru', 1),
/*ID 33*/('Suriname', 1),
/*ID 34*/('Uruguai', 1),
/*ID 35*/('Venezuela', 1);
/*<--/Países da América do Sul-->*/
CREATE TABLE estados(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
id_pais INT,
registro_ativo BIT,
FOREIGN KEY(id_pais) REFERENCES paises (id)
);

 INSERT INTO estados(id_pais, nome, registro_ativo) VALUES
/*<--Canadá (1 - 13)-->*/
/*ID 1*/(1, 'Alberta', 1),
/*ID 2*/(1, 'Colúmbia Britânica', 1),
/*ID 3*/(1, 'Ilha do Príncipe Eduardo', 1),
/*ID 4*/(1, 'Manitoba', 1),
/*ID 5*/(1, 'Nova Brunswick', 1),
/*ID 6*/(1, 'Nova Escócia', 1),
/*ID 7*/(1, 'Ontário', 1),
/*ID 8*/(1, 'Québec', 1),
/*ID 9*/(1, 'Saskatchewan', 1),
/*ID 10*/(1, 'Terra Nova e Labrador', 1),
/*ID 11*/(1, 'Nunavut', 1),
/*ID 12*/(1, 'Territórios do Noroeste', 1),
/*ID 13*/(1, 'Yukon', 1),
/*<--/Canadá-->*/
/*<--Estados Unidos da América-->*/
(2, 'Alabama', 1),
(2, 'Alasca', 1),
(2, 'Arizona', 1),
(2, 'Arkansas', 1),
(2, 'Califórnia', 1),
(2, 'Carolina do Norte', 1),
(2, 'Carolina do Sul', 1),
(2, 'Colorado', 1),
(2, 'Connecticut', 1),
(2, 'Dacota do Norte', 1),
(2, 'Dacota do Sul', 1),
(2, 'Delaware', 1),
(2, 'Flórida', 1),
(2, 'Geórgia', 1),
(2, 'Havaí', 1),
(2, 'Idaho', 1),
(2, 'Illinois', 1),
(2, 'Indiana', 1),
(2, 'Iowa', 1),
(2, 'Kansas', 1),
(2, 'Kentucky', 1),
(2, 'Louisiana', 1),
(2, 'Maine', 1),
(2, 'Maryland', 1),
(2, 'Massachusetts', 1),
(2, 'Michigan', 1),
(2, 'Minnesota', 1),
(2, 'Mississípi', 1),
(2, 'Missouri', 1),
(2, 'Montana', 1),
(2, 'Nebrasca', 1),
(2, 'Nevada', 1),
(2, 'Nova Hamphsire', 1),
(2, 'Nova Iorque', 1),
(2, 'Nova Jérsei', 1),
(2, 'Novo México', 1),
(2, 'Ohio', 1),
(2, 'Oklahoma', 1),
(2, 'Oregon', 1),
(2, 'Pensilvânia', 1),
(2, 'Rhode Island', 1),
(2, 'Tennessee', 1),
(2, 'Texas', 1),
(2, 'Utah', 1),
(2, 'Vermont', 1),
(2, 'Virgínia', 1),
(2, 'Virgínia Ocidental', 1),
(2, 'Washington', 1),
(2, 'Wisconsin', 1),
(2, 'Wyoming', 1);
/*<--/Estados Unidos da América-->*/
CREATE TABLE cidades(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
id_estado INT,
registro_ativo BIT,
FOREIGN KEY(id_estado) REFERENCES estados (id)
);

INSERT INTO cidades(id_estado, nome, registro_ativo) VALUES	(1, 'Blumenau', 1),
															(2, 'Miami', 1);

CREATE TABLE usuarios( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
usuario VARCHAR(100),
senha VARCHAR(100),
telefone VARCHAR(15),
cpf VARCHAR(14),
rg VARCHAR(12),
cnh VARCHAR(11),
cep VARCHAR(9),
logradouro VARCHAR(100),
id_pais INT,
id_estado INT,
id_cidade INT,
registro_ativo BIT,
FOREIGN KEY(id_pais) REFERENCES paises (id),
FOREIGN KEY(id_estado) REFERENCES estados (id),
FOREIGN KEY(id_cidade) REFERENCES cidades (id)
);

INSERT INTO usuarios(nome, usuario, senha, telefone, cpf, rg, cnh, cep, logradouro, id_pais, id_estado, id_cidade, registro_ativo)
VALUES  ('Felipe', 'lipefw', 'anaumsei', '(47) 98867-7732' , '680.528.620-43' , '45.938.864-2', '34093485793', '89030-065', 'Rua Pedro João da Luz', 1, 1, 1, 1),
	    ('Illan', 'illan', 'illanzoka', '(47) 99423-5223', '001.739.090-16', '12.722.088-4', '11096125008', '89056-130', 'Rua Albert Einstein', 1, 1, 1, 1),
	    ('Eduardo', 'eduardo', '123456', '(47) 96312-5231', '421.612.231-22', '56.274.823-9', '98687993934', '89046-629', 'Rua Coréia', 1, 1, 1, 1),
	    ('Henrique', 'henrique', 'pimbinha6000', '(47) 94512-5761', '854.895.663-89', '87.359.478-3', '24742714184', '89053-070', 'Rua Augusto Schoenau', 1, 1, 1, 1);

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
VALUES ('Ford', 1);

CREATE TABLE modelos(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(50),
id_marca INT,
FOREIGN KEY (id_marca) REFERENCES marcas(id),
registro_ativo BIT);

INSERT INTO modelos(id_marca, nome, registro_ativo)
VALUES (1,'Cargo', 1);

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

INSERT INTO veiculos(id_marca, id_modelo, ano_fabricacao, numero_caminhao, placa, registro_ativo)
VALUES (1, 1, '2005', 002, 'MJX-0585', 1 );

CREATE TABLE vendedores(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_veiculo INT,
id_usuario INT,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
FOREIGN KEY (id_veiculo) REFERENCES veiculos(id),
registro_ativo BIT);

INSERT INTO vendedores(nome, id_veiculo, id_usuario, registro_ativo)
VALUES ('Felipe' , 1, 1, 1);

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
nome VARCHAR(50),
id_categoria INT,
codigo_barra VARCHAR(30),
quantidade_produto INT,
valor_unitario DECIMAL(8,2),
FOREIGN KEY (id_categoria) REFERENCES categorias(id),
registro_ativo BIT);

INSERT INTO produtos(id_categoria,nome, codigo_barra, quantidade_produto, valor_unitario, registro_ativo)
VALUES (1,'Toddynho', '173937229417429475205792634916', 1, 1, 1);

CREATE TABLE vendas(
id INT PRIMARY KEY IDENTITY(1,1),
quantidade INT,
id_vendedor INT,
id_cliente INT,
id_produto INT,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
FOREIGN KEY (id_cliente) REFERENCES clientes(id),
FOREIGN KEY (id_produto) REFERENCES produtos(id),
total DECIMAL(8,2),
desconto DECIMAL(8,2),
registro_ativo BIT);

INSERT INTO vendas(quantidade,id_vendedor,id_cliente,id_produto, registro_ativo, total, desconto)
VALUES (1, 1, 1, 1, 1, 100, 10);

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

CREATE TABLE notas_fiscais(
id INT PRIMARY KEY IDENTITY(1,1),
valor_final DECIMAL(7,2),
id_venda INT,
FOREIGN KEY (id_venda) REFERENCES vendas(id),
registro_ativo BIT
);

INSERT INTO notas_fiscais(valor_final ,id_venda, registro_ativo)
VALUES (100, 1, 1);