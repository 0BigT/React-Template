import { useRouteError } from "react-router-dom"

export default function RoutingErrorHandler(props) {
	let error = useRouteError();

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100vw',
			height: '100vh'
		}}>
			{process.env.NODE_ENV !== 'development' && <div>Oops! This isn't supposed to happen...</div>}
			{process.env.NODE_ENV === 'development' &&
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					whiteSpace: 'break-spaces'
				}}>
					<span><b>{error.message}</b></span>
					<span><b>{error.fileName}</b></span>
					<span><b>{error.lineNumber}</b></span>
					<span><b>{error.cause}</b></span>
					<code>{error.stack}</code>
				</div>
			}
		</div>
	)
}