import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";

export default function App() {
	return (
		<>
		<RouterProvider
			router={router}
			fallbackElement={
				<div style={{
					display: 'flex',
					width: '100vw',
					height: '100vh',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					Loading...
				</div>
			}
		/>
		<ToastContainer />
		</>
	)
}
