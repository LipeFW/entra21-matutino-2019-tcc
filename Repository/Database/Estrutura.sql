﻿DROP TABLE IF EXISTS notas_fiscais, rotas, vendas, clientes,vendedores, rotas, produtos,inventarios, veiculos, modelos, categorias, marcas, usuarios, cidades, estados, paises;

CREATE TABLE paises(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
registro_ativo BIT
);
INSERT INTO paises(nome, registro_ativo) VALUES 
/*<--Países da América do Norte (ID:1 - 3)-->*/
/*ID 01*/('Canada', 1),
/*ID 02*/('United States', 1),
/*ID 03*/('Mexico', 1),
/*<--/Países da América do Norte-->*/
/*<--Países da América Central (ID:4 - 23)-->*/
/*ID 04*/('Antigua & Barbuda', 1),
/*ID 05*/('Bahamas', 1),
/*ID 06*/('Barbados', 1),
/*ID 07*/('Belize', 1),
/*ID 08*/('Costa Rica', 1),
/*ID 09*/('Cuba', 1),
/*ID 10*/('Dominica', 1),
/*ID 11*/('El Salvador', 1),
/*ID 12*/('Grenada', 1),
/*ID 13*/('Guatemala', 1),
/*ID 14*/('Haiti', 1),
/*ID 15*/('Honduras', 1),
/*ID 16*/('Jamaica', 1),
/*ID 17*/('Nicaragua', 1),
/*ID 18*/('Panama', 1),
/*ID 19*/('Dominican Republic', 1),
/*ID 20*/('Saint Lucia', 1),
/*ID 21*/('St. Kitts & Nevis', 1),
/*ID 22*/('St. Vincent & the Grenadines', 1),
/*ID 23*/('Trinidad & Tobago', 1),
/*<--/Países da América Central-->*/
/*<--Países da América do Sul (ID:24 - 35)-->*/
/*ID 24*/('Argentina', 1),
/*ID 25*/('Bolivia', 1),
/*ID 26*/('Brasil', 1),
/*ID 27*/('Chile', 1),
/*ID 28*/('Colombia', 1),
/*ID 29*/('Ecuador', 1),
/*ID 30*/('Guyana', 1),
/*ID 31*/('Paraguay', 1),
/*ID 32*/('Peru', 1),
/*ID 33*/('Suriname', 1),
/*ID 34*/('Uruguay', 1),
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
/*<--América do Norte (ID: 1-3)-->*/
/*<--Canada (ID: 1-13)-->*/
/*ID 001*/(1, 'Alberta', 1),
/*ID 002*/(1, 'Colúmbia Britânica', 1),
/*ID 003*/(1, 'Ilha do Príncipe Eduardo', 1),
/*ID 004*/(1, 'Manitoba', 1),
/*ID 005*/(1, 'Nova Brunswick', 1),
/*ID 006*/(1, 'Nova Escócia', 1),
/*ID 007*/(1, 'Ontário', 1),
/*ID 008*/(1, 'Québec', 1),
/*ID 009*/(1, 'Saskatchewan', 1),
/*ID 010*/(1, 'Terra Nova e Labrador', 1),
/*ID 011*/(1, 'Nunavut', 1),
/*ID 012*/(1, 'Territórios do Noroeste', 1),
/*ID 013*/(1, 'Yukon', 1),
/*<--/Canada-->*/
/*<--United States (ID: 14-63)-->*/
/*ID 014*/(2, 'Alabama', 1),
/*ID 015*/(2, 'Alasca', 1),
/*ID 016*/(2, 'Arizona', 1),
/*ID 017*/(2, 'Arkansas', 1),
/*ID 018*/(2, 'Califórnia', 1),
/*ID 019*/(2, 'Carolina do Norte', 1),
/*ID 020*/(2, 'Carolina do Sul', 1),
/*ID 021*/(2, 'Colorado', 1),
/*ID 022*/(2, 'Connecticut', 1),
/*ID 023*/(2, 'Dacota do Norte', 1),
/*ID 024*/(2, 'Dacota do Sul', 1),
/*ID 025*/(2, 'Delaware', 1),
/*ID 026*/(2, 'Flórida', 1),
/*ID 027*/(2, 'Geórgia', 1),
/*ID 028*/(2, 'Havaí', 1),
/*ID 029*/(2, 'Idaho', 1),
/*ID 030*/(2, 'Illinois', 1),
/*ID 031*/(2, 'Indiana', 1),
/*ID 032*/(2, 'Iowa', 1),
/*ID 033*/(2, 'Kansas', 1),
/*ID 034*/(2, 'Kentucky', 1),
/*ID 035*/(2, 'Louisiana', 1),
/*ID 036*/(2, 'Maine', 1),
/*ID 037*/(2, 'Maryland', 1),
/*ID 038*/(2, 'Massachusetts', 1),
/*ID 039*/(2, 'Michigan', 1),
/*ID 040*/(2, 'Minnesota', 1),
/*ID 041*/(2, 'Mississípi', 1),
/*ID 042*/(2, 'Missouri', 1),
/*ID 043*/(2, 'Montana', 1),
/*ID 044*/(2, 'Nebrasca', 1),
/*ID 045*/(2, 'Nevada', 1),
/*ID 046*/(2, 'Nova Hamphsire', 1),
/*ID 047*/(2, 'Nova Iorque', 1),
/*ID 048*/(2, 'Nova Jérsei', 1),
/*ID 049*/(2, 'Novo México', 1),
/*ID 050*/(2, 'Ohio', 1),
/*ID 051*/(2, 'Oklahoma', 1),
/*ID 052*/(2, 'Oregon', 1),
/*ID 053*/(2, 'Pensilvânia', 1),
/*ID 054*/(2, 'Rhode Island', 1),
/*ID 055*/(2, 'Tennessee', 1),
/*ID 056*/(2, 'Texas', 1),
/*ID 057*/(2, 'Utah', 1),
/*ID 058*/(2, 'Vermont', 1),
/*ID 059*/(2, 'Virgínia', 1),
/*ID 060*/(2, 'Virgínia Ocidental', 1),
/*ID 061*/(2, 'Washington', 1),
/*ID 062*/(2, 'Wisconsin', 1),
/*ID 063*/(2, 'Wyoming', 1),
/*<--/Estados Unidos da América-->*/
/*<--Mexico (ID: 64-94-->*/
/*ID 064*/(3, 'Aguascalientes', 1),
/*ID 065*/(3, 'Baixa Califórnia', 1),
/*ID 066*/(3, 'Baixa Califórnia do Sul', 1),
/*ID 067*/(3, 'Campeche', 1),
/*ID 068*/(3, 'Chiapas', 1), 
/*ID 069*/(3, 'Chihuahua', 1),
/*ID 070*/(3, 'Coahuila de Zaragoza', 1),
/*ID 071*/(3, 'Colima', 1),
/*ID 072*/(3, 'Durango', 1),
/*ID 073*/(3, 'Estado do México', 1),
/*ID 074*/(3, 'Guanajuato', 1),
/*ID 075*/(3, 'Guerrero', 1),
/*ID 076*/(3, 'Hidalgo', 1),
/*ID 077*/(3, 'Jalisco', 1),
/*ID 078*/(3, 'Michoacán', 1),
/*ID 079*/(3, 'Morelos', 1),
/*ID 080*/(3, 'Nayarit', 1),
/*ID 081*/(3, 'Novo Leão', 1),
/*ID 082*/(3, 'Oaxaca', 1),
/*ID 083*/(3, 'Póvoa', 1),
/*ID 084*/(3, 'Querétaro', 1),
/*ID 085*/(3, 'Quintana Roo', 1),
/*ID 086*/(3, 'São Luis Potosi', 1),
/*ID 087*/(3, 'Sinaloa', 1),
/*ID 088*/(3, 'Sonora', 1),
/*ID 089*/(3, 'Tabasco', 1),
/*ID 090*/(3, 'Tamaulipas', 1), 
/*ID 091*/(3, 'Tlaxcala', 1),
/*ID 092*/(3, 'Veracruz', 1),
/*ID 093*/(3, 'Iucatán', 1),
/*ID 094*/(3, 'Zaratecas', 1),
/*<--/Mexico-->*/
/*<--/América do Norte-->*/
/*<--América Central (ID:4 - 23)-->*/
/*<--Antígua & Barbuda (ID: 95 - 101-->*/
/*ID 095*/(4, 'Barbuda', 1),
/*ID 096*/(4, 'Saint George', 1),
/*ID 097*/(4, 'Saint John', 1),
/*ID 098*/(4, 'Saint Mary', 1),
/*ID 099*/(4, 'Saint Paul', 1),
/*ID 100*/(4, 'Saint Peter', 1),
/*ID 101*/(4, 'Saint Philip', 1),
/*<--/Antígua e Barbuda-->*/
/*<--Bahamas (ID:101 - 121-->*/
/*ID 101*/(5, 'Bimini', 1),
/*ID 102*/(5, 'Cat Island', 1),
/*ID 103*/(5, 'Exuma', 1),
/*ID 104*/(5, 'Inagua', 1),
/*ID 105*/(5, 'Long Island', 1),
/*ID 106*/(5, 'Mayaguana', 1),
/*ID 107*/(5, 'Ragged Island', 1),
/*ID 108*/(5, 'Harbour Island', 1),
/*ID 109*/(5, 'New Providence', 1),
/*ID 110*/(5, 'Acklins and Crooked Island', 1),
/*ID 111*/(5, 'Freeport', 1),
/*ID 112*/(5, 'Fresh Creek', 1),
/*ID 113*/(5, 'Governor''s Harbour', 1),
/*ID 114*/(5, 'Green Turtle Cay', 1),
/*ID 115*/(5, 'High Rock', 1),
/*ID 116*/(5, 'Kemps Bay', 1),
/*ID 117*/(5, 'Marsh Harbour', 1),
/*ID 118*/(5, 'Nichollstown and Berry Island', 1),
/*ID 119*/(5, 'Rock Sound', 1),
/*ID 120*/(5, 'Sandy Point', 1),
/*ID 121*/(5, ' Salvador and Rum Cay', 1),
/*<--/Bahamas-->*/
/*<--Barbados (ID:122 - 132)-->*/
/*ID 122*/(6, 'Christ Church', 1),
/*ID 123*/(6, 'Saint Andrew', 1),
/*ID 124*/(6, 'Saint George', 1),
/*ID 125*/(6, 'Saint James', 1),
/*ID 126*/(6, 'Saint John', 1),
/*ID 127*/(6, 'Saint Joseph', 1),
/*ID 128*/(6, 'Saint Lucy', 1),
/*ID 129*/(6, 'Saint Michael', 1),
/*ID 130*/(6, 'Saint Peter', 1),
/*ID 131*/(6, 'Saint Philip', 1),
/*ID 132*/(6, 'Saint Thomas', 1),
/*<--/Barbados-->*/
/*<--Belize (ID:133 - 138)-->*/
/*ID 133*/(7, 'Belize', 1),
/*ID 134*/(7, 'Cayo', 1),
/*ID 135*/(7, 'Corozal', 1),
/*ID 136*/(7, 'Orange Walk', 1),
/*ID 137*/(7, 'Stann Creek', 1),
/*ID 138*/(7, 'Toledo', 1),
/*/<--Belize-->*/
/*<--Costa Rica (ID:139 - 145)-->*/
/*ID 139*/(8, 'Alajuela', 1),
/*ID 140*/(8, 'Cartago', 1),
/*ID 141*/(8, 'Guanacaste', 1),
/*ID 142*/(8, 'Heredia', 1),
/*ID 143*/(8, 'Limon', 1),
/*ID 144*/(8, 'Puntarenas', 1),
/*ID 145*/(8, 'San Jose', 1),
/*<--/Costa Rica-->*/
/*<--Cuba (ID:146 - 160)-->*/
/*ID 146*/(9, 'Pinar del Rio', 1),
/*ID 147*/(9, 'Ciudad de la Habana', 1),
/*ID 148*/(9, 'Matanzas', 1),
/*ID 149*/(9, 'Isla de la Juventud', 1),
/*ID 150*/(9, 'Camaguey', 1),
/*ID 151*/(9, 'Ciego de Avila', 1),
/*ID 152*/(9, 'Cienfuegos', 1),
/*ID 153*/(9, 'Granma', 1),
/*ID 154*/(9, 'Guantanamo', 1),
/*ID 155*/(9, 'La Habana', 1),
/*ID 156*/(9, 'Holguin', 1),
/*ID 157*/(9, 'Las Tunas', 1),
/*ID 158*/(9, 'Sancti Spiritus', 1),
/*ID 159*/(9, 'Santiago de Cuba', 1),
/*ID 160*/(9, 'Villa Clara', 1),
/*<--/Cuba-->*/
/*<--Dominica (ID:160 - 170)-->*/
/*ID 161*/(10, 'Saint Andrew', 1),
/*ID 162*/(10, 'Saint David', 1),
/*ID 163*/(10, 'Sanit George', 1),
/*ID 164*/(10, 'Saint John', 1),
/*ID 165*/(10, 'Saint Joseph', 1),
/*ID 166*/(10, 'Saint Luke', 1),
/*ID 167*/(10, 'Saint Mark', 1),
/*ID 168*/(10, 'Saint Patrick', 1),
/*ID 169*/(10, 'Saint Paul', 1),
/*ID 170*/(10, 'Saint Peter', 1),
/*<--/Dominica-->*/
/*<--El Salvador (ID:171 - 184)-->*/
/*ID 171*/(11, 'Ahuachapan', 1),
/*ID 172*/(11, 'Cabanas', 1),
/*ID 173*/(11, 'Chalatenango', 1),
/*ID 174*/(11, 'Cuscatlan', 1),
/*ID 175*/(11, 'La Libertad', 1),
/*ID 176*/(11, 'La Paz', 1),
/*ID 177*/(11, 'La Union', 1),
/*ID 178*/(11, 'Morazan', 1),
/*ID 179*/(11, 'San Miguel', 1),
/*ID 180*/(11, 'San Salvador', 1),
/*ID 181*/(11, 'Santa Ana', 1),
/*ID 182*/(11, 'San Vicente', 1),
/*ID 183*/(11, 'Sonsonate', 1),
/*ID 184*/(11, 'Usulutan', 1),
/*<--/El Salvador-->*/
/*<--Grenada (ID:185 - 190)-->*/
/*ID 185*/(12, 'Saint Andrew', 1),
/*ID 186*/(12, 'Saint David', 1),
/*ID 187*/(12, 'Saint George', 1),
/*ID 188*/(12, 'Saint John', 1),
/*ID 189*/(12, 'Saint Mark', 1),
/*ID 190*/(12, 'Saint Patrick', 1),
/*<--/Grenada-->*/
/*<--Guatemala (ID:190 - 221)-->*/
/*ID 191*/(13, 'Alta Verapaz', 1),
/*ID 192*/(13, 'Baja Verapaz', 1),
/*ID 193*/(13, 'Chimaltenango', 1),
/*ID 194*/(13, 'Chiquimula', 1),
/*ID 195*/(13, 'El Progreso', 1),
/*ID 196*/(13, 'Escuintla', 1),
/*ID 197*/(13, 'Guatemala', 1),
/*ID 198*/(13, 'Huehuetenango', 1),
/*ID 199*/(13, 'Izabal', 1),
/*ID 200*/(13, 'Jabala', 1),
/*ID 201*/(13, 'Jutiapa', 1),
/*ID 202*/(13, 'Peten', 1),
/*ID 203*/(13, 'Quetzaltenango', 1),
/*ID 204*/(13, 'Quiche', 1),
/*ID 205*/(13, 'Retalhuleu', 1),
/*ID 206*/(13, 'Sacatepequez', 1),
/*ID 207*/(13, 'San Marcos', 1),
/*ID 208*/(13, 'Santa Rosa', 1),
/*ID 209*/(13, 'Solola', 1),
/*ID 210*/(13, 'Suchitepequez', 1),
/*ID 211*/(13, 'Totonicapan', 1),
/*ID 212*/(13, 'Zacapa', 1),
/*<--/Guatemala-->*/
/*<--Haiti (ID:213 - 221)-->*/
/*ID 212*/(14, 'Nord-Ouest', 1),
/*ID 213*/(14, 'Artibonite', 1),
/*ID 214*/(14, 'Centre', 1),
/*ID 215*/(14, 'Grand''Anse', 1),
/*ID 216*/(14, 'Nord', 1),
/*ID 217*/(14, 'Nord-Est', 1),
/*ID 218*/(14, 'Ouest', 1),
/*ID 219*/(14, 'Sud', 1),
/*ID 220*/(14, 'Sud-Est', 1),
/*<--/Haiti-->*/
/*<--Honduras (ID:221 - 238)-->*/
/*ID 221*/(15, 'Atlantida', 1),
/*ID 222*/(15, 'Choluteca', 1),
/*ID 223*/(15, 'Colon', 1),
/*ID 224*/(15, 'Comayagua', 1),
/*ID 225*/(15, 'Copan', 1),
/*ID 226*/(15, 'Cortes', 1),
/*ID 227*/(15, 'El Paraiso', 1),
/*ID 228*/(15, 'Franciso Morazan', 1),
/*ID 229*/(15, 'Gracias a Dios', 1),
/*ID 230*/(15, 'Intibuca', 1),
/*ID 231*/(15, 'Islas de la Bahia', 1),
/*ID 232*/(15, 'La Paz', 1),
/*ID 233*/(15, 'Lempira', 1),
/*ID 234*/(15, 'Ocotepaque', 1),
/*ID 235*/(15, 'Olancho', 1),
/*ID 236*/(15, 'Santa Barbara', 1),
/*ID 237*/(15, 'Valle', 1),
/*ID 238*/(15, 'Yoro', 1),
/*<--/Honduras-->*/
/*<--Jamaica (ID:238 - 251)-->*/
/*ID 238*/(16, 'Clarendon', 1),
/*ID 239*/(16, 'Hanover', 1),
/*ID 240*/(16, 'Manchester', 1),
/*ID 241*/(16, 'Portland', 1),
/*ID 242*/(16, 'Saint ', 1),
/*ID 243*/(16, 'Saint ', 1),
/*ID 244*/(16, 'Saint ', 1),
/*ID 245*/(16, 'Saint ', 1),
/*ID 246*/(16, 'Saint ', 1),
/*ID 247*/(16, 'Saint ', 1),
/*ID 248*/(16, 'Saint ', 1),
/*ID 249*/(16, 'Trelawny', 1),
/*ID 250*/(16, 'Westmoreland', 1),
/*ID 251*/(16, 'Kingston', 1),
/*<--/Jamaica-->*/
/*<--Nicaragua (ID:252 - 267)-->*/
/*ID 252*/(17, 'Boaco', 1),
/*ID 253*/(17, 'Carazo', 1),
/*ID 254*/(17, 'Chinandega', 1),
/*ID 255*/(17, 'Chontales', 1),
/*ID 256*/(17, 'Esteli', 1),
/*ID 257*/(17, 'Granada', 1),
/*ID 258*/(17, 'Jinotega', 1),
/*ID 259*/(17, 'Leon', 1),
/*ID 260*/(17, 'Madriz', 1),
/*ID 261*/(17, 'Managua', 1),
/*ID 262*/(17, 'Masaya', 1),
/*ID 263*/(17, 'Matagalpa', 1),
/*ID 264*/(17, 'Nueva Segovia', 1),
/*ID 265*/(17, 'Rio San Juan', 1),
/*ID 266*/(17, 'Rivas', 1),
/*ID 267*/(17, 'Zelaya', 1),
/*<--/Nicaragua-->*/
/*<--Panama (ID:268 - 277)-->*/
/*ID 268*/(18, 'Bocas del Toro', 1),
/*ID 269*/(18, 'Chiriqui', 1),
/*ID 270*/(18, 'Cocle', 1),
/*ID 271*/(18, 'Colon', 1),
/*ID 272*/(18, 'Darien', 1),
/*ID 273*/(18, 'Herrera', 1),
/*ID 274*/(18, 'Los Santos', 1),
/*ID 275*/(18, 'Panama', 1),
/*ID 276*/(18, 'San Blas', 1),
/*ID 277*/(18, 'Veraguas', 1),
/*<--/Panama-->*/
/*<--Dominican Republic (ID:278 - 307)-->*/
/*ID 278*/(19, 'Azua', 1),
/*ID 279*/(19, 'Baoruco', 1),
/*ID 280*/(19, 'Barahona', 1),
/*ID 281*/(19, 'Dajabon', 1),
/*ID 282*/(19, 'Distrito Nacional', 1),
/*ID 283*/(19, 'Duarte', 1),
/*ID 284*/(19, 'Espaillat', 1),
/*ID 285*/(19, 'Independencia', 1),
/*ID 286*/(19, 'La Altagracia', 1),
/*ID 287*/(19, 'Elias Pina', 1),
/*ID 288*/(19, 'La Romana', 1),
/*ID 289*/(19, 'Maria Trinidad Sanchez', 1),
/*ID 290*/(19, 'Monte Cristi', 1),
/*ID 291*/(19, 'Pedernales', 1),
/*ID 292*/(19, 'Peravia', 1),
/*ID 293*/(19, 'Puerto Plata', 1),
/*ID 294*/(19, 'Salcedo', 1),
/*ID 295*/(19, 'Samana', 1),
/*ID 296*/(19, 'Sanchez Ramirez', 1),
/*ID 297*/(19, 'San Juan', 1),
/*ID 298*/(19, 'San Pedro De Macoris', 1),
/*ID 299*/(19, 'Santiago', 1),
/*ID 300*/(19, 'Santiago Rodriguez', 1),
/*ID 301*/(19, 'Valverde', 1),
/*ID 302*/(19, 'El Seibo', 1),
/*ID 303*/(19, 'Hato Mayor', 1),
/*ID 304*/(19, 'La Vega', 1),
/*ID 305*/(19, 'Monsenor Nouel', 1),
/*ID 306*/(19, 'Monte Plata', 1),
/*ID 307*/(19, 'San Cristobal', 1),
/*<--/Dominican Republic-->*/
/*<--Saint Lucia (ID:308 - 318)-->*/
/*ID 308*/(20, 'Anse-la-Raye', 1),
/*ID 309*/(20, 'Dauphin', 1),
/*ID 310*/(20, 'Castries', 1),
/*ID 311*/(20, 'Choiseul', 1),
/*ID 312*/(20, 'Dennery', 1),
/*ID 313*/(20, 'Gros-Islet', 1),
/*ID 314*/(20, 'Laborie', 1),
/*ID 315*/(20, 'Micoud', 1),
/*ID 316*/(20, 'Soufriere', 1),
/*ID 317*/(20, 'Vieux-Fort', 1),
/*ID 318*/(20, 'Praslin', 1),
/*<--/Saint Lucia-->*/
/*<--St. Kitts & Nevis (ID:319 - 332)'-->*/
/*ID 319*/(21, 'Christ Church Nichola Town', 1),
/*ID 320*/(21, 'Saint Anne Sandy Point', 1),
/*ID 321*/(21, 'Saint George Basseterre', 1),
/*ID 322*/(21, 'Saint George Gingerland', 1),
/*ID 323*/(21, 'Saint James Windward', 1),
/*ID 324*/(21, 'Saint John Capisterre', 1),
/*ID 325*/(21, 'Saint John Figtree', 1),
/*ID 326*/(21, 'Saint Mary Cayon', 1),
/*ID 327*/(21, 'Saint Paul Capisterre', 1),
/*ID 328*/(21, 'Saint Paul Charlestown', 1),
/*ID 329*/(21, 'Saint Peter Basseterre', 1),
/*ID 330*/(21, 'Saint Thomas Lowland', 1),
/*ID 331*/(21, 'Saint Thomas Middle Island', 1),
/*ID 332*/(21, 'Trinity Palmetto Point', 1),
/*<--/St. Kitts & Nevis'-->*/
/*<--St. Vincent & the Grenadines (ID:333 - 338)'-->*/
/*ID 333*/(22, 'Charlotte', 1),
/*ID 334*/(22, 'Saint Andrew', 1),
/*ID 335*/(22, 'Saint David', 1),
/*ID 336*/(22, 'Saint George', 1),
/*ID 337*/(22, 'Saint Patrick', 1),
/*ID 338*/(22, 'Grenadines', 1),
/*<--/St. Vincent & the Grenadines'-->*/
/*<--Trinidad & Tobago (ID:339 - 350)-->*/
/*ID 339*/(23, 'Arima', 1),
/*ID 340*/(23, 'Caroni', 1),
/*ID 341*/(23, 'Mayaro', 1),
/*ID 342*/(23, 'Nariva', 1),
/*ID 343*/(23, 'Port-of-Spain', 1),
/*ID 344*/(23, 'Saint Andrew', 1),
/*ID 345*/(23, 'Saint David', 1),
/*ID 346*/(23, 'Saint George', 1),
/*ID 347*/(23, 'Saint Patrick', 1),
/*ID 348*/(23, 'San Fernando', 1),
/*ID 349*/(23, 'Tobago', 1),
/*ID 350*/(23, 'Victoria', 1);
/*<--/Trinidad & Tobago-->*/
/*<--/América Central (ID:4 - 23)-->*/
CREATE TABLE cidades(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
id_estado INT,
registro_ativo BIT,
FOREIGN KEY(id_estado) REFERENCES estados (id)
);

INSERT INTO cidades(id_estado, nome, registro_ativo) VALUES	
/*<--Cidades do Alberta-->*/
(1,'Airdrie',1),
(1,'Athabasca',1),
(1,'Banff',1),
(1,'Barrhead',1),
(1,'Bassano',1),
(1,'Beaverlodge',1),
(1,'Black Diamond',1),
(1,'Blackfalds',1),
(1,'Blairmore',1),
(1,'Bon Accord',1),
(1,'Bonnyville',1),
(1,'Bow Island',1),
(1,'Brooks',1),
(1,'Calgary',1),
(1,'Calmar',1),
(1,'Camrose',1),
(1,'Canmore',1),
(1,'Cardston',1),
(1,'Carstairs',1),
(1,'Clairmont',1),
(1,'Claresholm',1),
(1,'Coaldale',1),
(1,'Cochrane',1),
(1,'Crossfield',1),
(1,'Devon',1),
(1,'Didsbury',1),
(1,'Drayton Valley',1),
(1,'Drumheller',1),
(1,'Edmonton',1),
(1,'Edson',1),
(1,'Elk Point',1),
(1,'Fairview',1),
(1,'Grand Center',1),
(1,'Grande Prairie',1),
(1,'Grimshaw',1),
(1,'Hanna',1),
(1,'High Level',1),
(1,'High Prairie',1),
(1,'High River',1),
(1,'Hinton',1),
(1,'Irricana',1),
(1,'Jasper',1),
(1,'Killan',1),
(1,'Lacombe',1),
(1,'Lamont',1),
(1,'Leduc',1),
(1,'Lethbridge',1),
(1,'Magrath',1),
(1,'Medicine Hat',1),
(1,'Millet',1),
(1,'Morinville',1),
(1,'Nanton',1),
(1,'Okotoks',1),
(1,'Olds',1),
(1,'Peace River',1),
(1,'Penhold',1),
(1,'Pincher Creek',1),
(1,'Ponoka',1),
(1,'Provost',1),
(1,'Raymont',1),
(1,'Red Deer',1),
(1,'Rimbey',1),
(1,'Rocky Mountai House',1),
(1,'Saint Paul',1),
(1,'Sexsmith',1),
(1,'Slave Lake',1),
(1,'Smoky Lake',1),
(1,'Spirit River',1),
(1,'Spruce Grove',1),
(1,'Stettler',1),
(1,'Stony Plain',1),
(1,'Sylvan Lake',1),
(1,'Taber',1),
(1,'Three Hills',1),
(1,'Tofield',1),
(1,'Two Hills',1),
(1,'Valleyview',1),
(1,'Vegreville',1),
(1,'Vermilion',1),
(1,'Viking',1),
(1,'Vulcan',1),
(1,'Wainwright',1),
(1,'Wembley',1),
(1,'Westlock',1),
(1,'Wetaskiwin',1),
(1,'Valleyview',1),
(1,'Whitecourt',1),
/*<--/Cidades do Alberta-->*/
/*<--Cidades do Colúmbia Britânica-->*/
(2, 'Abbotsford', 1),
(2, 'Armstrong', 1),
(2, 'Ashcroft', 1),
(2, 'Burns Lake', 1),
(2, 'Cache Creek', 1),
(2, 'Campbell River', 1),
(2, 'Castlegar', 1),
(2, 'Chase', 1),
(2, 'Chemainus', 1),
(2, 'Chilliwack', 1),
(2, 'Courtenay', 1),
(2, 'Cranbrook', 1),
(2, 'Creston', 1),
(2, 'Cumberland', 1),
(2, 'Dawson Creek', 1),
(2, 'Duncan', 1),
(2, 'Enderby', 1),
(2, 'Fernie', 1),
(2, 'Fort Nelson', 1),
(2, 'Fort Saint James', 1),
(2, 'Fort Saint John', 1),
(2, 'Fruitvale', 1),
(2, 'Gibsons', 1),
(2, 'Golden', 1),
(2, 'Grand Forks', 1),
(2, 'Hope', 1),
(2, 'Houston', 1),
(2, 'Invermere', 1),
(2, 'Kamloops', 1),
(2, 'Kelowna', 1),
(2, 'Kimberley', 1),
(2, 'Kitimat', 1),
(2, 'Ladysmith', 1),
(2, 'Lake Cowichan', 1),
(2, 'Lillooet', 1),
(2, 'Lumby', 1),
(2, 'Merritt', 1),
(2, 'Nakusp', 1),
(2, 'Nanaimo', 1),
(2, 'Nelson', 1),
(2, 'Oliver', 1),
(2, 'One Hundred Mile House', 1),
(2, 'Osoyoos',1),
(2, 'Parksville',1),
(2, 'Peachland',1),
(2, 'Pemberton',1),
(2, 'Penticton',1),
(2, 'Port Alberni',1),
(2, 'Port Hardy',1),
(2, 'Powell River',1),
(2, 'Prince George',1),
(2, 'Prince Rupert',1),
(2, 'Princeton',1),
(2, 'Quesnel',1),
(2, 'Revelstoke',1),
(2, 'Rossland',1),
(2, 'Salmo',1),
(2, 'Salmon Arm',1),
(2, 'Sechelt',1),
(2, 'Sicamous',1),
(2, 'Smithers',1),
(2, 'Sooke',1),
(2, 'Summerland',1),
(2, 'Terrace',1),
(2, 'Trail',1),
(2, 'Ucluelet',1),
(2, 'Vancouver',1),
(2, 'Vanderhoof',1),
(2, 'Vernon',1),
(2, 'Victoria',1),
(2, 'White Rock',1),
(2, 'Williams Lake',1),
/*<--/Cidades do Colúmbia Britânica-->*/
/*<--Cidades do Ilha do Principe Eduardo-->*/
(3, 'Alberton', 1),
(3, 'Charlottetown', 1),
(3, 'Kensington', 1),
(3, 'Montague', 1),
(3, 'Souris', 1),
(3, 'Summerside', 1),
/*<--/Cidades do Ilha do Principe Eduardo-->*/
/*<--Cidades do Monitoba-->*/
(4, 'Altona', 1),
(4, 'Beausejour', 1),
(4, 'Boissevain', 1),
(4, 'Brandon', 1),
(4, 'Carberry', 1),
(4, 'Carman', 1),
(4, 'Dauphin', 1),
(4, 'Deloraine', 1),
(4, 'Flin Flon', 1),
(4, 'Gimli', 1),
(4, 'Killarney', 1),
(4, 'Lac Du Bonnet', 1),
(4, 'Melita', 1),
(4, 'Minnedosa', 1),
(4, 'Morden', 1),
(4, 'Morris', 1),
(4, 'Neepawa', 1),
(4, 'Pinawa', 1),
(4, 'Rivers', 1),
(4, 'Roblin', 1),
(4, 'Selkirk', 1),
(4, 'Souris', 1),
(4, 'Steinbach', 1),
(4, 'Stonewall', 1),
(4, 'Stony Mountain', 1),
(4, 'Swan River', 1),
(4, 'The Pas', 1),
(4, 'Thompson', 1),
(4, 'Virden', 1),
(4, 'Winkler', 1),
(4, 'Winnipeg', 1),
/*<--/Cidades do Monitoba-->*/
/*<--Cidades do Nova Brunswick-->*/
(5, 'Bathurst', 1),
(5, 'Campbellton', 1),
(5, 'Caraquet', 1),
(5, 'Dalhousie', 1),
(5, 'Edmundston', 1),
(5, 'Fredericton', 1),
(5, 'Grand Falls', 1),
(5, 'Hampton', 1),
(5, 'Kedgwick', 1),
(5, 'Moncton', 1),
(5, 'Oromocto', 1),
(5, 'Plaster Rock', 1),
(5, 'Sackville', 1),
(5, 'Saint Andrews', 1),
(5, 'Saint John', 1),
(5, 'Saint Leonard', 1),
(5, 'Saint Quentin', 1),
(5, 'Saint Stephen', 1),
(5, 'Salisbury', 1),
(5, 'Shediac', 1),
(5, 'Sussex', 1),
(5, 'Woodstock', 1),
/*<--/Cidades do Nova Brunswick-->*/
/*<--Cidades do Nova Escócia-->*/
(6, 'Amherst', 1),
(6, 'Antigonish', 1),
(6, 'Berwick', 1),
(6, 'Bridgetown', 1),
(6, 'Bridgewater', 1),
(6, 'Chester', 1),
(6, 'Digby', 1),
(6, 'Glace Bay', 1),
(6, 'Halifax', 1),
(6, 'Hantsport', 1),
(6, 'Inverness', 1),
(6, 'Kentville', 1),
(6, 'Liverpool', 1),
(6, 'Louisbourg', 1),
(6, 'Lunenburg', 1),
(6, 'Middleton', 1),
(6, 'New Glasgow', 1),
(6, 'New Waterford', 1),
(6, 'Oxford', 1),
(6, 'Parrsboro', 1),
(6, 'Pictou', 1),
(6, 'Port Hawkesbury', 1),
(6, 'Shelburne', 1),
(6, 'Springhill', 1),
(6, 'Sydney', 1),
(6, 'Sydney Mines', 1),
(6, 'Truro', 1),
(6, 'Windsor', 1),
(6, 'Wolfville', 1),
(6, 'Yarmouth', 1),
/*<--/Cidades do Nova Escócia-->*/
/*<--Cidades do Ontário-->*/
(7, 'Acton', 1),
(7, 'Alexandria', 1),
(7, 'Alfred', 1),
(7, 'Alliston', 1),
(7, 'Almonte', 1),
(7, 'Amherstburg', 1),
(7, 'Arnprior', 1),
(7, 'Arthur', 1),
(7, 'Atikokan', 1),
(7, 'Attawapiskat', 1),
(7, 'Aylmer', 1),
(7, 'Ayr', 1),
(7, 'Barrie', 1),
(7, 'Beamsville', 1),
(7, 'Beaverton', 1),
(7, 'Belleville', 1),
(7, 'Blenheim', 1),
(7, 'Blind River', 1),
(7, 'Bobcaygeon', 1),
(7, 'Bolton', 1),
(7, 'Bracebridge', 1),
(7, 'Bradford', 1),
(7, 'Brantford', 1),
(7, 'Brighton', 1),
(7, 'Brockville', 1),
(7, 'Caledon East', 1),
(7, 'Caledonia', 1),
(7, 'Campbellford', 1),
(7, 'Cannington', 1),
(7, 'Capreol', 1),
(7, 'Cardinal', 1),
(7, 'Carleton Place', 1),
(7, 'Casselman', 1),
(7, 'Chapleau', 1),
(7, 'Chatham', 1),
(7, 'Chesley', 1),
(7, 'Chesterville', 1),
(7, 'Clinton', 1),
(7, 'Cobourg', 1),
(7, 'Cochrane', 1),
(7, 'Colborne', 1),
(7, 'Colchester', 1),
(7, 'Collingwood', 1),
(7, 'Cornwall', 1),
(7, 'Creemore', 1),
(7, 'Crystal Beach', 1),
(7, 'Deep River', 1),
(7, 'Delhi', 1),
(7, 'Deseronto', 1),
(7, 'Dresden', 1),
(7, 'Dryden', 1),
(7, 'Dunnville', 1),
(7, 'Durham', 1),
(7, 'Eganville', 1),
(7, 'Elliot Lake', 1),
(7, 'Elmira', 1),
(7, 'Elmvale', 1),
(7, 'Englehart', 1),
(7, 'Erin', 1),
(7, 'Espanola', 1),
(7, 'Essex', 1),
(7, 'Exeter', 1),
(7, 'Fenelon Falls', 1),
(7, 'Fergus', 1),
(7, 'Forest', 1),
(7, 'Fort Erie', 1),
(7, 'Fort Frances', 1),
(7, 'Gananoque', 1),
(7, 'Georgetown', 1),
(7, 'Geraldton', 1),
(7, 'Glencoe', 1),
(7, 'Goderich', 1),
(7, 'Grand Bend', 1),
(7, 'Grand Valley', 1),
(7, 'Gravenhurst', 1),
(7, 'Guelph', 1),
(7, 'Hagersville', 1),
(7, 'Haileybury', 1),
(7, 'Hamilton', 1),
(7, 'Hanover', 1),
(7, 'Harriston', 1),
(7, 'Harrow', 1),
(7, 'Hastings', 1),
(7, 'Havelock', 1),
(7, 'Hawkesbury', 1),
(7, 'Hearst', 1),
(7, 'Hensall', 1),
(7, 'Hornepayne', 1),
(7, 'Huntsville', 1),
(7, 'Ingersoll', 1),
(7, 'Iroquois', 1),
(7, 'Iroquois Falls', 1),
(7, 'Kanata', 1),
(7, 'Kapuskasing', 1),
(7, 'Kemptville', 1),
(7, 'Kenora', 1),
(7, 'Kincardine', 1),
(7, 'Kingston', 1),
(7, 'Kirkland Lake', 1),
(7, 'Kitchener', 1),
(7, 'Lakefield', 1),
(7, 'Leamington', 1),
(7, 'Lindsay', 1),
(7, 'Listowel', 1),
(7, 'Little Current', 1),
(7, 'Lively', 1),
(7, 'London', 1),
(7, 'Longlac', 1),
(7, 'Lucan', 1),
(7, 'Lucknow', 1),
(7, 'Madoc', 1),
(7, 'Manitouwadge', 1),
(7, 'Marathon', 1),
(7, 'Markdale', 1),
(7, 'Marmora', 1),
(7, 'Mattawa', 1),
(7, 'Meaford', 1),
(7, 'Midland', 1),
(7, 'Mildmay', 1),
(7, 'Millbrook', 1),
(7, 'Milton', 1),
(7, 'Milverton', 1),
(7, 'Mitchell', 1),
(7, 'Moose Factory', 1),
(7, 'Morrisburg', 1),
(7, 'Mount Forest', 1),
(7, 'Nanticoke', 1),
(7, 'Napanee', 1),
(7, 'North Bay', 1),
(7, 'Norwich', 1),
(7, 'Norwood', 1),
(7, 'Omemee', 1),
(7, 'Orangeville', 1),
(7, 'Orillia', 1),
(7, 'Oshawa', 1),
(7, 'Ottawa', 1),
(7, 'Owen Sound', 1),
(7, 'Paisley', 1),
(7, 'Palmerston', 1),
(7, 'Paris', 1),
(7, 'Parkhill', 1),
(7, 'Parry Sound', 1),
(7, 'Pembroke', 1),
(7, 'Perth', 1),
(7, 'Petawawa', 1),
(7, 'Peterborough', 1),
(7, 'Petrolia', 1),
(7, 'Picton', 1),
(7, 'Port Dover', 1),
(7, 'Port Elgin', 1),
(7, 'Port Hope', 1),
(7, 'Port Perry', 1),
(7, 'Port Stanley', 1),
(7, 'Powassan', 1),
(7, 'Prescott', 1),
(7, 'Redwater', 1),
(7, 'Renfrew', 1),
(7, 'Richmond', 1),
(7, 'Ridgetown', 1),
(7, 'Rockland', 1),
(7, 'Rodney', 1),
(7, 'Saint Marys', 1),
(7, 'Saint Thomas', 1),
(7, 'Sarnia', 1),
(7, 'Sault Sainte Marie', 1),
(7, 'Seaforth', 1),
(7, 'Shelburne', 1),
(7, 'Simcoe', 1),
(7, 'Sioux Lookout', 1),
(7, 'Smiths Falls', 1),
(7, 'Smithville', 1),
(7, 'South River', 1),
(7, 'Southampton', 1),
(7, 'Stayner', 1),
(7, 'Stirling', 1),
(7, 'Stratford', 1),
(7, 'Strathroy', 1),
(7, 'Sturgeon Falls', 1),
(7, 'Sudbury', 1),
(7, 'Sutton', 1),
(7, 'Tavistock', 1),
(7, 'Teeswater', 1),
(7, 'Terrace Bay', 1),
(7, 'Thessalon', 1),
(7, 'Thornbury', 1),
(7, 'Thunder Bay', 1),
(7, 'Tilbury', 1),
(7, 'Tilsonburg', 1),
(7, 'Timmins', 1),
(7, 'Toronto', 1),
(7, 'Tottenham', 1),
(7, 'Tweed', 1),
(7, 'Uxbridge', 1),
(7, 'Vankleek Hill', 1),
(7, 'Walkerton', 1),
(7, 'Wallaceburg', 1),
(7, 'Waterford', 1),
(7, 'Waterloo', 1),
(7, 'Watford', 1),
(7, 'Wawa', 1),
(7, 'Wellington', 1),
(7, 'West Lorne', 1),
(7, 'Wheatley', 1),
(7, 'Whitchurch-stouffville', 1),
(7, 'Wiarton', 1),
(7, 'Winchester', 1),
(7, 'Windsor', 1),
(7, 'Wingham', 1),
/*<--/Cidades do Ontário-->*/
/*<--Cidades do Québec-->*/

(8, 'Acton Vale' , 1),
(8, 'Albanel' , 1),
(8, 'Alma', 1),
(8, 'Amos' , 1),
(8, 'Amqui' , 1),
(8, 'Asbestos' , 1),
(8, 'Bagotville' , 1),
(8, 'Baie-comeau' , 1),
(8, 'Baie-saint-paul' , 1),
(8, 'Barraute' , 1),
(8, 'Beauceville' , 1),
(8, 'Beaupre' , 1),
(8, 'Bedford' , 1),
(8, 'Beloeil' , 1),
(8, 'Berthierville' , 1),
(8, 'Betsiamites' , 1),
(8, 'Bonaventure' , 1),
(8, 'Brownsburg' , 1),
(8, 'Buckingham' , 1),
(8, 'Cabano' , 1),
(8, 'Cap-aux-meules' , 1),
(8, 'Cap-chat' , 1),
(8, 'Causapscal' , 1),
(8, 'Chandler' , 1),
(8, 'Chapais' , 1),
(8, 'Chute-aux-outardes' , 1),
(8, 'Clermont' , 1),
(8, 'Coaticook' , 1),
(8, 'Contrecoeur' , 1),
(8, 'Cookshire' , 1),
(8, 'Cowansville' , 1),
(8, 'Crabtree' , 1),
(8, 'Danville' , 1),
(8, 'Desbiens' , 1),
(8, 'Disraeli' , 1),
(8, 'Dolbeau' , 1),
(8, 'Donnacona' , 1),
(8, 'Drummondville' , 1),
(8, 'East Angus' , 1),
(8, 'Farnham' , 1),
(8, 'Ferme-neuve' , 1),
(8, 'Forestville' , 1),
(8, 'Gaspe', 1),
(8, 'Granby' , 1),
(8, 'Grande-riviere' , 1),
(8, 'Hauterive' , 1),
(8, 'Havre-saint-pierre' , 1),
(8, 'Hebertville' , 1),
(8, 'Huntingdon' , 1),
(8, 'Joliette' , 1),
(8, 'La Malbaie' , 1),
(8, 'La Sarre' , 1),
(8, 'La Tuque' , 1),
(8, 'Labelle' , 1),
(8, 'Lac-au-saumon' , 1),
(8, 'Lac-megantic' , 1),
(8, 'Lachute' , 1),
(8, 'Lacolle' , 1),
(8, 'Laurentides' ,1),
(8, 'Lavaltrie' , 1),
(8, 'Les Escoumins' , 1),
(8, 'Liniere' , 1),
(8, 'Louiseville' , 1),
(8, 'Luceville' , 1),
(8, 'Macamic' , 1),
(8, 'Magog', 1),
(8, 'Malartic' , 1),
(8, 'Maniwaki' , 1),
(8, 'Marieville' , 1),
(8, 'Maskinonge' , 1),
(8, 'Matagami' , 1),
(8, 'Matane' , 1),
(8, 'Metabetchouan' , 1),
(8, 'Mont-joli' , 1),
(8, 'Montmagny' , 1),
(8, 'Montreal' , 1),
(8, 'Murdochville' , 1),
(8, 'Napierville' , 1),
(8, 'New Richmond' , 1),
(8, 'Nicolet' , 1),
(8, 'Normandin' , 1),
(8, 'Notre-dame-du-lac' , 1),
(8, 'Ormstown' , 1),
(8, 'Papineauville' , 1),
(8, 'Pierreville' , 1),
(8, 'Plessisville' , 1),
(8, 'Pont-rouge' , 1),
(8, 'Port-cartier' , 1),
(8, 'Portneuf' , 1),
(8, 'Price', 1),
(8, 'Princeville' , 1),
(8, 'Quebec' , 1),
(8, 'Rawdon' , 1),
(8, 'Richmond' , 1),
(8, 'Rigaud' , 1),
(8, 'Rimouski' , 1),
(8, 'Riviere-au-renard' , 1),
(8, 'Riviere-du-loup' , 1),
(8, 'Roberval' , 1),
(8, 'Saint-agapit' , 1),
(8, 'Saint-alexandre' , 1),
(8, 'Saint-ambroise' , 1),
(8, 'Saint-andre-avellin' , 1),
(8, 'Saint-anselme' , 1),
(8, 'Saint-augustin' , 1),
(8, 'Saint-cesaire' , 1),
(8, 'Saint-denis' , 1),
(8, 'Saint-donat-de-montcalm' , 1),
(8, 'Saint-fabien' , 1),
(8, 'Saint-felicien' , 1),
(8, 'Saint-felix-de-valois' , 1),
(8, 'Saint-gabriel' , 1),
(8, 'Saint-gedeon' , 1),
(8, 'Saint-georges' , 1),
(8, 'Saint-germain-de-grantham' , 1),
(8, 'Saint-henri-de-levis' , 1),
(8, 'Saint-honore' , 1),
(8, 'Saint-hyacinthe' , 1),
(8, 'Saint-jacques' , 1),
(8, 'Saint-jean-de-dieu' , 1),
(8, 'Saint-jean-port-joli' , 1),
(8, 'Saint-jerome' , 1),
(8, 'Saint-jovite' , 1),
(8, 'Saint-marc-des-carrieres' , 1),
(8, 'Saint-michel-des-saints' , 1),
(8, 'Saint-pacome' , 1),
(8, 'Saint-pascal' , 1),
(8, 'Saint-pie' , 1),
(8, 'Saint-prosper' , 1),
(8, 'Saint-raphael' , 1),
(8, 'Saint-raymond' , 1),
(8, 'Saint-remi' , 1),
(8, 'Saint-sauveur-des-monts' , 1),
(8, 'Saint-tite' , 1),
(8, 'Sainte-adele' , 1),
(8, 'Sainte-agathe-des-monts' , 1),
(8, 'Sainte-anne-des-monts' , 1),
(8, 'Sainte-claire' , 1),
(8, 'Sainte-julienne' , 1),
(8, 'Sainte-marie' , 1),
(8, 'Sainte-martine' , 1),
(8, 'Sainte-thecle' , 1),
(8, 'Salaberry-de-valleyfield' , 1),
(8, 'Sayabec' , 1),
(8, 'Senneterre' , 1),
(8, 'Sept-iles' , 1),
(8, 'Shawinigan' , 1),
(8, 'Shawville' , 1),
(8, 'Sherbrooke' , 1),
(8, 'Sorel', 1),
(8, 'Temiscaming' , 1),
(8, 'Thetford Mines' , 1),
(8, 'Thurso' , 1),
(8, 'Trois-pistoles' , 1),
(8, 'Trois-rivieres' , 1),
(8, 'Val-david' , 1),
(8, 'Valcourt' , 1),
(8, 'Vallee-jonction' , 1),
(8, 'Vercheres' , 1),
(8, 'Victoriaville' , 1),
(8, 'Ville-marie' , 1),
(8, 'Warwick' , 1),
(8, 'Waterloo' , 1),
(8, 'Windsor' , 1),
(8, 'Yamachiche' , 1),
/*<--/Cidades do Québec-->*/
/*<--Cidades do Saskatchewan-->*/

(9, 'Assiniboia', 1),
(9, 'Biggar', 1),
(9, 'Canora', 1),
(9, 'Carlyle', 1),
(9, 'Carnduff', 1),
(9, 'Caronport', 1),
(9, 'Dalmeny', 1),
(9, 'Davidson', 1),
(9, 'Esterhazy', 1),
(9, 'Estevan', 1),
(9, 'Eston', 1),
(9, 'Foam Lake', 1),
(9, 'Gravelbourg', 1),
(9, 'Grenfell', 1),
(9, 'Gull Lake', 1),
(9, 'Hudson Bay', 1),
(9, 'Humboldt', 1),
(9, 'Indian Head', 1),
(9, 'Kamsack', 1),
(9, 'Kelvington', 1),
(9, 'Kerrobert', 1),
(9, 'Kindersley', 1),
(9, 'La Ronge', 1),
(9, 'Langenburg', 1),
(9, 'Langham', 1),
(9, 'Lanigan', 1),
(9, 'Lloydminster', 1),
(9, 'Lumsden', 1),
(9, 'Macklin', 1),
(9, 'Maple Creek', 1),
(9, 'Meadow Lake', 1),
(9, 'Melfort', 1),
(9, 'Melville', 1),
(9, 'Moose Jaw', 1),
(9, 'Moosomin', 1),
(9, 'Nipawin', 1),
(9, 'North Battleford', 1),
(9, 'Outlook', 1),
(9, 'Oxbow', 1),
(9, 'Pilot Butte', 1),
(9, 'Preeceville', 1),
(9, 'Prince Albert', 1),
(9, 'Regina', 1),
(9, 'Rosetown', 1),
(9, 'Saskatoon', 1),
(9, 'Shaunavon', 1),
(9, 'Shellbrook', 1),
(9, 'Swift Current', 1),
(9, 'Unity', 1),
(9, 'Wadena', 1),
(9, 'Warman', 1),
(9, 'Watrous', 1),
(9, 'Weyburn', 1),
(9, 'Wilkie', 1),
(9, 'Wynyard', 1),
(9, 'Yorkton', 1),
/*<--/Cidades do Saskatchewan-->*/
/*<--Cidades do Terra Nova e Labrador-->*/
(10, 'Bay Roberts', 1),
(10, 'Bonavista', 1),
(10, 'Botwood', 1),
(10, 'Burgeo', 1),
(10, 'Carbonear', 1),
(10, 'Catalina', 1),
(10, 'Channel-port Aux Basques', 1),
(10, 'Corner Brook', 1),
(10, 'Deer Lake', 1),
(10, 'Gambo', 1),
(10, 'Gander', 1),
(10, 'Grand Bank', 1),
(10, 'Harbour Breton', 1),
(10, 'Hare Bay', 1),
(10, 'Lewisporte', 1),
(10, 'Marystown', 1),
(10, 'Saint Anthony', 1),
(10, 'Springdale', 1),
(10, 'Stephenville', 1),
(10, 'Stephenville Crossing', 1),
(10, 'Torbay', 1),
(10, 'Wabana', 1),
/*<--/Cidades do Terra Nova e Labrador-->*/
/*<--Cidades do Nunavut-->*/
(1, 'Clyde River', 1),
(1, 'Iqaluit', 1),
(1, 'Pangnirtung', 1),
/*<--/Cidades do Nunavut-->*/
/*<--/Canada-->*/

CREATE TABLE usuarios( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
url_imagem VARCHAR(100),
nome_completo VARCHAR(100),
senha VARCHAR(100),
admin INT,
registro_ativo BIT
);

INSERT INTO usuarios(nome,nome_completo,url_imagem, admin, senha,  registro_ativo)
VALUES  ( 'lipefw','Felipe','gatodandopinote.png',1 , 'anaumsei', 1),
	    ( 'illan','Illan','gato-confuo.jpg',0 , 'illanzoka', 1),
	    ( 'eduardo','Eduardo','guaxinimdoido.jpg',1 , 'RetardoMental', 1),
	    ( 'henrique','Henrique','hamsterchavoso.png',1 , 'pimbinha6000', 1),
	    ( 'pablo','Pablo','', 1, '1234', 1),
	    ( 'nathan','Nathan','passaroseila.jpg', 1, '1203', 1);


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

 CREATE TABLE inventarios(
id INT PRIMARY KEY IDENTITY(1,1),
numero_caminhao INT,
registro_ativo BIT,
);

INSERT INTO inventarios(numero_caminhao, registro_ativo)
VALUES (002, 1 );

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