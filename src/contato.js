import './App.css';

function App() {
  return (
    <div>
		<div className="organiza">
			<header className="menu-principal">
				<div className="header1">
					<div className="menu1">
						<ul>
							<li><a href="App.js" target="_self"><b>Home</b></a></li>
							<li><a href="App2.js" target="_self"><b>Vagas</b></a></li>
							<li><a href="#" target="_self"><b>Contato</b></a></li>
						</ul>
					</div>
				</div>
			</header>
			<main className="mainP">
				<div className="registroformulario"><h1> Contato </h1></div>
				<div className="conteudo">
					<form className="formulario">

						<div className="cadaluno">
							<h2 className="nome">Nome </h2>
							<input className="primeironome" type="text" name="primeiro_nome"/><br/>
						</div>

						<h2 className="nome">Email</h2>
						<input className="email" type="text" name="email"/>
						
						<h2 className="nome">Telefone</h2>
						<input className="codigo" type="text" name="codigo_area"/>
						<label className="codigo_area">DDD</label> 
						<input className="number" type="text" name="phone"/>
						<label className="numero-telefone">Telefone</label>


					
						<h2 className="nome">Unidade</h2>
						<select className="opcoes" name="assunto">
							<option disabled="disabled" selected="selected">--Selecione a unidade--</option>
							<option>GTC - BH</option>
							<option>Polo - BH</option>
						</select>

						
						<h2 className="nome">Curso</h2>
							<select className="opcoes">
							<option selected disabled value="">Selecione</option>
							<optgroup label="Tecnologia">
								<option value="inf">Informática(T.I)</option>
								<option value="rd">Redes</option>
								<option value="ma">Manutenção</option>
								<option value="it">Informática Web</option>
							</optgroup>
							<optgroup label="Saúde">
								<option value="enf">Enfermagem</option>
								<option value="rd">Radilogia</option>
								<option value="an">Análise-Clinícas</option>
								<option value="fm">Farmácia</option>
								<option value="nt">Nutrição</option>
								<option value="es">Estética</option>
								<option value="sd">Saúde Bucal</option>
							</optgroup>
							<optgroup label="Negócios">
								<option value="ad">Administração</option>
								<option value="rh">Recursos Humanos</option>
								<option value="lg">Logística</option>
								<option value="ct">Contabilidade</option>
								<option value="tr">Transações Imobiliárias</option>
								<option value="sj">Serviços Jurídicos</option>
							</optgroup>
							<optgroup label="Indústria">
								<option value="ed">Edificações</option>
								<option value="mb">Meio Ambiente</option>
								<option value="mc">Mecânica</option>
								<option value="st">Segurança do Trabalho</option>
								<option value="el">Eletrotécnica</option>
								<option value="en">Eletrônica</option>
								<option value="qm">Química</option>
								<option value="mk">Mecatrônica</option>
							</optgroup>
						</select>



						<h2 className="nome">Motivo</h2>
						<input style="position: relative; left: 200px; top: -37px; line-height: 40px; border-radius: 6px; padding: 0 22px; font-size: 16px; width: 468px; height: 150px; size: 256;"/><br/>
					</form>
					<div className="posBotao">
					<button className="btnFinaliza" onClick="direcionarVaga()">Concluir</button>
					</div>
				</div>
			</main>
			<footer>
				<div className="rodape">
					<div className="rodape1">
						<p>&copy;2021 INF01 Grau Técnico</p>			
					</div>
				</div>
			</footer>
		</div>

    </div>
  );
}

export default App;