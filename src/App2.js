import './App.css';
import './func.js';
import './contato.js';
import './index.js';


function App() {
    return (
    <div>
        <div className="conteudo">
			<header className="menu-principal">
				<div className="header1">
					<div className="menu1">
						<ul>
							<li><a href="App.js" target="_self"><b>Home</b></a></li>
							<li><a href="#" target="_self"><b>Vagas</b></a></li>
							<li><a href="contato.js" target="_self"><b>Contato</b></a></li>
						</ul>
					</div>
				</div>
			</header>
			<main className="mainP">
				<div className="main1">
					<div className="dividi2">
						<div className="conteudoleft">
							<ul>
								<li><label>Unidade: <input style="border: 0; color: #fff; font-size: 19px; width: 100px; margin-right: 100px; background: transparent; font-weight: bold" className="unidade1" name="unidade" id="unidade" disabled/></label><br/></li>
								<li><label>Aluno: <input name="nome" type="text" id="txtColuna0"/></label><br/></li>
								<li><label>Curso: <input name="curso" type="text" id="txtColuna3"/></label><br/></li>
								<li><label>Data: <input name="data" type="text" id="txtColuna1"/></label><br/></li>
								<li><button className="btnFinaliza" onClick="direcinarIndex()">Concluir</button></li>
							</ul>
						</div>
					<div className="divid1">
						<table className="cofre1" id="tabela">
							<tbody>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Enfermagem</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Eletronica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button></td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Eletronica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Administração</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Administração</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Enfermgem</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Radiologia</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend. </td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Enfermagem</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">08/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">03/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Enfermagem</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">01/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">18/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Radiologia</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">05/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Radiologia</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">05/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Informatica</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">15/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Radiologia</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
								<tr>
									<td className="rowData">25/03/2021</td>
									<td className="rowVaga">Lorem ipsum commodo sodales molestie est etiam platea nisl lorem, ligula suspendisse nibh neque duis eget at sodales aenean tincidunt, eleifend.</td>
									<td className="rowCurso">Enfermagem</td>
									<td className="rowAcao"><button className="btnEnvia" onclick="enviar()">Candidatar</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					
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