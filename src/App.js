import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer/footer.js";
import './Iniciar.css';

function App() {
	return (
		<main>
			<div className="d-flex justify-content-center">
				<form action className="d-flex flex-column">
					<h3>Inicie sesión</h3>
					<label htmlFor="eMail">Ingrese su correo electrónico</label>
					<input type="text" name id="eMail" />
					<br />
					<label htmlFor="password">Ingrese su contraseña</label>
					<input type="password" name id="password" />
					<br />
					<button type="button" id="botonGuardar" onclick="Guardar();">Iniciar sesión</button>
					<p id="recor">
						<label htmlFor="check">Recordarme</label>
						<input type="checkbox" id="check" name="chekbox" /><br />
						<a id="lin" href> Olvidé mi contraseña</a><br />
						<a id="lin" href="2 registro.html"> Registrarse</a>
					</p></form>
			</div>
			<Footer />
		</main>
	);
}

export default App;
