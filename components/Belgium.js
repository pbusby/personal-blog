import * as React from 'react'
import { forwardRef } from 'react'

const Belgium = (props, ref) => (
	<svg
		id="map"
		width="100%"
		strokeLinecap="round"
		strokeLinejoin="round"
		preserveAspectRatio="xMidYMid meet"
		viewBox="250 616 42 33"
		xmlns="http://www.w3.org/2000/svg"
    style={{
			fill: "var(--color-text)",
			stroke: "var(--color-background)",
			transition: "all 0.50s linear"
		}}
		strokeWidth={0.2}
		ref={ref}
		{...props}
	>
		<path
			id="Hainaut_BE"
			d="m256.13 628.69-0.6 0.28v0.06l0.22 0.25-0.4 0.19-0.04 0.16-0.28 0.06-0.15-0.13-0.1 0.03-0.25 0.19 0.22 0.66 0.07 0.15 0.06 0.03 0.15 0.03 0.13-0.12 0.31-0.56 0.19-0.22 0.22-0.16 0.53-0.19v-0.06l-0.13-0.56-0.15-0.1zm7.4 0.15-0.28 0.2-0.4 0.84-0.28-0.2-0.72 0.04-0.1-0.53-0.4 0.15-0.38-0.15-0.47 0.37-0.43 0.53-0.03 0.13-0.13-0.03h-0.06l-0.25-0.2v-0.21l-0.25-0.31-0.44 0.1-0.44-0.23-0.47 0.25-0.12 0.06 0.15 0.25 0.16 0.32 0.1 0.1h0.12l0.15 0.05 0.1 0.13 0.12 0.4-0.12 0.29 0.1 0.46 0.3 0.94 0.07 0.53 0.06 0.2 0.16 0.18 0.15 0.1 0.47 0.21 0.19 0.06 0.25-0.03 0.47-0.22 0.12-0.1 0.1-0.12 0.12-0.06 0.13-0.03 0.16 0.03 0.09 0.1-0.03 0.12-0.1 0.19 0.16 0.1 0.66-0.04 0.25 0.06 0.25 0.1 0.22 0.18 0.18 0.32 0.13 0.62 0.03 0.78 0.12 0.69 0.38 0.3 0.03-0.08h0.03l0.06-0.03 0.03-0.07 0.03-0.12 0.2-0.35 0.05-0.09 0.16-0.06 0.44-0.06 0.47 0.03 0.22 0.09 0.18 0.13 0.2 0.06h0.24l0.66-0.31 0.22-0.03 0.19 0.06 0.37 0.37 0.25 0.13 0.22 0.19 0.31 0.6 0.22 0.09 0.06-0.1v-0.22l0.13-0.06 0.1 0.03 0.12 0.1 0.15 0.09 0.07 0.13v0.15l-0.1 0.13-0.25 0.22-0.09 0.15-0.06 0.16-0.03 0.3-0.16 0.67-0.03 0.3 0.16 0.07 0.21-0.1 0.13-0.02 0.1 0.03 0.21 0.71 0.06 0.16 0.1 0.13v0.09l-0.25 0.15-0.22 0.19-0.19 0.19-0.09 0.12-0.03 0.13-0.03 0.19 0.06 0.03 0.07 0.25 0.03 0.22h-0.1l0.63 0.28 0.12 0.03 0.16-0.03 0.66-0.13 1.62 0.35 0.03-0.06 0.13-0.35-0.35-0.62-0.15-0.88-0.16-0.03-0.06-0.28-0.06-0.66 0.12-0.28-0.44-0.69 0.38-0.34-0.13-0.22 0.13-0.56-0.19-0.1-0.22-0.03-0.19 0.25h-0.06l-0.4-0.22-0.2-0.21 0.41-0.35 0.34-0.03 0.13-0.25 0.19-0.03 0.06-0.31 0.6 0.06 0.18-0.4 0.31-0.03 0.2 0.25 0.71-0.16-0.1-0.63 0.23-0.43-0.22-0.25 0.15-0.07 0.13-0.37-0.47-0.25 0.1-0.1-0.1-0.12 0.12-0.03 0.13-0.38-0.16-0.18 0.1-0.16-0.38 0.12 0.13-0.84-0.63 0.31-0.16-0.06v-0.15l-0.3 0.21v-0.4l-0.07-0.1-0.47 0.04-0.12-0.1-0.6 0.1-0.25 0.3 0.03-0.43-0.3 0.06-0.32-0.4-0.34-0.07 0.06-0.34-0.6-0.1 0.07-0.37-0.22-0.25-0.13 0.06-0.31 0.47-0.25 0.06-0.19-0.06-0.09-0.31-0.06-0.6 0.03-0.21 0.19-0.06h-0.13l-0.28-0.1-0.16 0.31-0.06-0.12-0.25 0.15-0.18-0.06-0.22 0.19h-0.63l-0.25-0.06-0.15-0.2-0.07-0.18 0.07-0.28-0.13-0.28-0.56 0.15-0.16-0.12-0.44 0.1v-0.04l-0.18-0.5-0.44 0.22-0.13-0.22z"
		/>
		<path
			id="Limburg_BE"
			d="m281.4 619.31-0.18 0.1-0.44 0.34-0.18 0.1-1.26 0.03-0.3 0.12-0.13 0.1-0.07 0.65 0.47 0.38 0.06 0.65-0.21 0.25-0.35-0.06-0.22 0.35-0.53 0.06-0.37 0.6-0.82 0.21v0.22l-0.25 0.44 0.25-0.1 0.2 0.32 0.18-0.1 0.25 0.13 0.16-0.13-0.03-0.4 0.28-0.07 0.25 0.1 0.3 0.34-0.24 0.13-0.06-0.13-0.1 0.03 0.1 0.38-0.44 0.22 0.03 0.37-0.4 0.4 0.15 0.35 0.1 0.06 0.15-0.1 0.2 0.2 0.37-0.23 0.06 0.13 0.37-0.03 0.16 0.13-0.06 0.47-0.07 0.06-0.18-0.06-0.16 0.5-0.03 0.56 0.25 0.06-0.44 0.53 0.1 0.31-0.13 0.35 0.22 0.1-0.19 0.46 0.72 0.16 0.13-0.2-0.13-0.24 0.62 0.03 0.07-0.16 0.1 0.16 0.3-0.22 0.35 0.15 0.03-0.18 0.22-0.22 0.47-0.19 0.12 0.06 0.16 0.31 0.28 0.1 0.25-0.06 0.06-0.28 0.22 0.21 0.16-0.06 0.28-0.28-0.06-0.25 0.9-0.34 0.47-0.57-0.19-0.12-0.18-0.22-0.07-0.37 0.7-0.91 0.24-0.12 0.03-0.03 0.13-0.22 0.15-0.4 0.1-0.2-0.1-0.06h-0.12l-0.22 0.1 0.38-0.7 0.12-0.43-0.16-0.19v-0.21l0.04-0.16 0.1-0.06 0.11 0.09 0.07-0.1 0.06-0.12 0.06-0.25-0.03-0.06-0.03-0.03-0.03-0.13h0.13l0.09-0.03 0.1-0.06 0.09-0.06-0.25-0.22 0.03-0.22 0.12-0.16-0.03-0.06-0.12-0.22h-0.16l-0.3 0.12-0.16-0.12-0.25-0.28-0.16-0.1h-0.16l-0.4 0.13-0.2 0.03-0.12-0.1-0.09-0.1-0.15-0.08-0.6-0.13-0.19-0.16-0.06-0.03-0.06-0.37-0.1-0.31-0.21-0.25-0.25-0.13h-0.22zm3.57 8.32-0.1 0.06-0.09 0.18 0.19 0.19 0.28-0.1 0.47 0.57 0.37-0.1 0.25 0.1 0.1-0.03 0.21-0.4-0.21-0.23-0.13-0.03-0.9 0.1-0.1-0.07-0.25-0.22-0.1-0.03z"
		/>
		<path
			id="Brussels_BE"
			d="m271.64 628.17-0.82 0.51-0.22 0.07-0.24-0.03-0.3-0.18-0.3-0.56-0.2 0.1-0.4-0.2 0.11-0.25 0.26-0.06 0.05-0.28-0.11-0.19 0.17-0.4 0.37-0.22 0.45 0.05 0.26-0.28 0.19 0.13 0.18 0.27v0.16l-0.15 0.18 0.43 0.25 0.2 0.51-0.22 0.04-0.08 0.15 0.37 0.24z"
		/>
		<path
			id="Flemish_Brabant_BE"
			d="m278.23 629.17-0.27 0.07-0.17-0.07-0.19-0.21-0.01-0.3-0.26-0.13-0.42-0.29-0.48 0.45-0.16 0.03-0.14-0.1 0.02-0.3-0.79 0.13 0.04-0.18h-0.26l-0.24-0.37-0.45-0.12-0.28 0.12-0.07 0.22-0.05-0.12-0.18 0.11-0.55-0.1-0.02 0.42 0.2 0.25-0.18 0.25-0.35 0.04-0.08-0.36-0.23 0.29-0.45 0.13v0.21l-0.35-0.17-0.06-0.08 0.03-0.2h-0.15l-0.23 0.08-0.36 0.32-0.5 0.11-0.04 0.26h-0.2l-0.22-0.27-0.07 0.09 0.12 0.16-0.23 0.02v0.25l-0.07 0.1-0.15 0.05-0.3-0.08-0.2 0.16-0.35-0.26-0.29 0.03-0.24-0.3-0.1-0.05-0.1 0.05-0.07 0.19h-0.26l-0.07 0.18-0.29-0.08-0.13 0.29-0.08-0.11-0.24 0.14-0.2-0.06-0.2 0.19-0.64 0.01-0.23-0.07-0.16-0.18-0.06-0.19 0.06-0.28 0.25 0.08 0.33-0.1 0.01-0.1-0.23-0.29 0.12-0.3 0.12-0.08 0.28 0.2 0.17-0.23 0.16 0.13 0.17-0.09 0.3-0.28 0.13-0.47-0.11-0.24-0.27-0.04 0.45-0.74v-0.17l-0.16-0.13 0.26-0.22-0.1-0.31 0.48 0.17 0.23-0.18v-0.21l-0.18-0.46 0.14-0.34 0.35 0.1 0.23-0.13 0.2-0.8 0.35-0.12 0.25 0.03 0.53 0.2-0.06 0.12 0.07 0.03 0.3-0.24-0.08 0.26 0.2 0.05 0.07 0.24 0.62-0.19 0.25 0.22 0.17-0.3 0.37 0.25 0.17-0.19 0.35 0.18h0.16l0.11-0.36 0.75-0.25 0.29 0.14-0.1 0.27 0.37-0.49 0.24 0.04 0.32-0.29 0.2 0.38 0.14 0.08 0.53-0.26 0.13 0.06 0.26-0.27 0.4-0.19 0.19-0.03 0.15 0.17 0.26-0.1 0.19 0.32 0.2-0.1 0.23 0.13 0.18-0.13-0.04-0.42 0.3-0.06 0.23 0.1 0.3 0.34-0.25 0.12-0.06-0.12-0.1 0.03 0.1 0.39-0.42 0.23v0.36l-0.38 0.4 0.16 0.36 0.07 0.05 0.17-0.09 0.19 0.18 0.38-0.22 0.05 0.13 0.37-0.02 0.16 0.12-0.06 0.47-0.05 0.06-0.2-0.06-0.15 0.5-0.03 0.56 0.24 0.07-0.44 0.53 0.1 0.3-0.11 0.34 0.2 0.1-0.16 0.46zm-6.6-1-0.36-0.23 0.08-0.16 0.22-0.04-0.2-0.51-0.43-0.25 0.15-0.18v-0.16l-0.18-0.27-0.2-0.13-0.25 0.29-0.45-0.05-0.37 0.21-0.17 0.4 0.11 0.2-0.05 0.27-0.26 0.06-0.11 0.26 0.4 0.2 0.19-0.1 0.3 0.56 0.31 0.18 0.23 0.03 0.22-0.06 0.82-0.51z"
		/>
		<path
			id="Namur_BE"
			d="m277.06 630.36v0.4l0.54 0.46 0.32 0.77-0.19 0.17 0.6-0.01 0.18 0.38 0.14 0.01 0.24-0.13-0.13 0.15 0.1 0.25 0.2-0.04-0.04 0.15 0.13 0.19 0.34-0.17 0.25 0.21 0.22 0.43-0.14 0.34 0.15 0.2 0.53 0.1 0.01 0.31 0.16 0.2 0.55-0.44 0.46 0.12 0.1 0.21-0.2 0.32 0.17 0.18-0.54 0.47 0.09 0.08 0.12-0.2 0.24-0.03 0.13 0.26v0.25l-0.26 0.32-0.71 0.54-0.13-0.14-0.11 0.02-0.23 0.18 0.04 0.2h-0.3l-0.19 0.15 0.43 0.2-0.1 0.17h0.12v0.16l0.4 0.42-0.07 0.3-0.3 0.12 0.29 0.24-0.04 0.18h-0.29l-0.27 0.21-0.22 0.07-1 0.14-0.22-0.07-0.1-0.46-0.1 0.65 0.09 0.1-0.1 0.28-0.31 0.38-0.1 0.05-0.11-0.1-0.06 0.27h-0.2l0.27 0.24 0.18 0.53 0.11 0.05 0.45-0.12 0.11 0.22 0.32 0.14-0.01 0.37 0.25 0.22-0.52 0.25-0.26 0.28 0.2 0.16-0.77 0.63-0.03 0.15 0.1 0.31-0.13 0.05-0.03 0.29-0.03 0.11-0.2 0.03-0.44 0.2-0.24 0.05-0.28-0.03-0.1-0.12-0.04-0.62-0.04-0.1-0.11-0.16-0.03-0.08 0.01-0.1 0.1-0.12 0.02-0.1 0.05-0.2 0.04-0.14 0.02-0.14-0.03-0.22-0.19-0.3-0.52-0.17-0.15-0.22 0.03-0.27 0.34-1.05v-0.18l-0.03-0.13v-0.15l0.18-0.46 0.06-0.02 0.12 0.12v-0.3l0.04-0.34v-0.29l-0.1-0.13-0.33 0.1-0.13-0.05-0.06-0.24-0.28 0.15-1.06 1.23-0.05 0.13-0.02 0.17 0.03 0.1 0.05 0.07 0.01 0.12-0.04 0.53-0.06 0.27-0.09 0.2-0.1 0.08-0.45 0.1-1.44 0.83-0.3 0.07-0.1-0.01 0.04-0.07 0.12-0.36-0.35-0.62-0.14-0.86-0.17-0.05-0.06-0.27-0.05-0.66 0.12-0.3-0.45-0.68 0.37-0.33-0.1-0.23 0.1-0.54-0.16-0.1-0.23-0.04-0.18 0.24h-0.08l-0.4-0.2-0.2-0.23 0.41-0.33 0.36-0.05 0.12-0.25h0.19l0.07-0.32 0.59 0.05 0.19-0.39 0.3-0.05 0.2 0.24 0.7-0.16-0.1-0.62 0.23-0.44-0.23-0.24 0.16-0.07 0.14-0.35-0.47-0.25 0.09-0.1-0.11-0.12 0.14-0.03 0.12-0.4-0.14-0.17 0.07-0.16-0.37 0.12 0.13-0.83-0.05-0.28 0.17-0.15 0.18-0.04 0.4 0.11 0.22-0.06-0.15-0.51 0.1-0.2 0.1-0.01 0.31 0.18 0.04-0.18 0.27-0.1 0.09 0.34 0.4-0.2 0.14 0.17-0.06-0.19 0.05-0.06 1.1-0.37 0.01-0.1h0.28l0.22-0.34 0.34 0.06z"
		/>
		<path
			id="Luxembourg_BE"
			d="m288.63 637.72-0.1-0.04-0.08-0.12-0.05-0.15-0.07-0.07-0.15 0.14-0.23 0.04-0.07 0.16-0.03 0.24-0.07 0.24-0.14 0.18-0.38 0.22-0.16 0.18-0.03 0.1v0.28l-0.02 0.11-0.06 0.1-0.14 0.15-0.06 0.1 0.03 0.2 0.01 0.16-0.01 0.13-0.07 0.09-0.21 0.11-0.06 0.09v0.23l0.09 0.09 0.05 0.09-0.1 0.23-0.08 0.1-0.16 0.04-0.07 0.06-0.07 0.11-0.04 0.1-0.02 0.08-0.03 0.1-0.32 0.68-0.03 0.16 0.13 0.05 0.25 0.16 0.1 0.15-0.27-0.01v0.15l-0.03 0.04-0.01 0.06 0.1 0.08-0.11 0.1-0.04 0.16 0.03 0.2 0.09 0.2 0.12 0.18 0.11 0.05h0.12l0.14 0.08 0.08 0.1 0.29 0.48 0.02 0.08 0.04 0.23v0.04l0.07 0.05 0.15 0.03 0.07 0.03 0.06 0.01 0.07-0.03h0.07l0.07 0.1v0.03l0.02 0.1-0.03 0.06-0.05 0.07v0.19l-0.03 0.06-0.01 0.06 0.04 0.12 0.08 0.05 0.22 0.01 0.08 0.06 0.08 0.23-0.05 0.15-0.1 0.1-0.08 0.11-0.1 0.4-0.07 0.17-0.12 0.12 0.2 0.09-0.09 0.27-0.22 0.28-0.25 0.14-0.13-0.02-0.24-0.13h-0.12l-0.1 0.07-0.13 0.2-0.13 0.06-0.24-0.02-0.24-0.1-0.25-0.04-0.25 0.16-0.12 0.19-0.01 0.12-0.03 0.07-0.16 0.03-0.1-0.02-0.34-0.13-0.2 0.1-0.25 0.24-0.26 0.18-0.24-0.04-0.08-0.14v-0.15l0.03-0.16-0.01-0.18-0.06-0.15-0.58-0.9-0.13-0.1-0.08-0.07-0.34-0.1-0.13-0.06h-0.07l-0.04 0.04-0.04 0.1-0.05 0.08-0.07 0.03-0.18-0.02-0.06-0.06-0.03-0.15 0.01-0.24 0.09-0.06 0.04-0.06-0.09-0.25-0.23-0.24-0.23-0.2-0.23 0.02-0.48 0.17-0.25-0.06-0.2-0.13-0.17-0.15-0.5-0.63-0.14-0.11-0.39-0.09-0.22-0.1-0.42-0.37-0.2-0.1h-0.03l0.03-0.11 0.03-0.29 0.13-0.05-0.1-0.3 0.03-0.16 0.76-0.63-0.2-0.16 0.26-0.28 0.52-0.25-0.24-0.22 0.01-0.37-0.32-0.14-0.11-0.22-0.45 0.12-0.12-0.05-0.17-0.53-0.27-0.24h0.2l0.05-0.27 0.1 0.1 0.1-0.04 0.33-0.39 0.1-0.29-0.1-0.09 0.1-0.65 0.1 0.47 0.23 0.06 0.99-0.14 0.22-0.06 0.27-0.23 0.3 0.01 0.03-0.18-0.28-0.23 0.29-0.12 0.08-0.3-0.41-0.42v-0.17h-0.13l0.1-0.16-0.42-0.2 0.2-0.16h0.3l-0.04-0.2 0.22-0.17 0.12-0.02 0.12 0.14 0.71-0.54 0.27-0.33-0.01-0.25-0.13-0.26-0.24 0.04-0.12 0.2-0.09-0.08 0.54-0.47-0.16-0.19 0.2-0.31-0.11-0.21 0.33-0.36-0.24-0.36 0.06-0.12 0.14-0.02 0.48 0.33 0.4-0.31 0.12 0.32 0.18 0.02-0.02 0.15 0.06 0.05 0.18 0.01 0.35-0.2 0.6 0.5 0.35-0.05-0.03 0.2 0.53-0.04-0.15 0.43 0.02 0.18 0.2 0.28 0.29 0.05-0.24 0.63 0.63-0.15 0.17 0.04 0.09 0.15 0.05-0.16 0.66-0.15 0.06-0.17-0.37-0.03 0.19-0.6-0.21-0.15 0.07-0.3 1.3 0.17 0.03 0.14 0.35 0.15 0.06 1.55 0.06 0.18 0.24 0.03-0.13 0.18 0.06 0.17 0.01 0.04 0.02 0.51z"
		/>
		<path
			id="East_Flanders_BE"
			d="m269.29 620.42-0.04 0.03-0.06 0.17 0.26 0.7-0.08 0.06 0.27 0.35 0.07 0.2 0.03 0.12-0.03 0.37-0.11 0.27-0.4 0.16-0.43 0.02-0.2 0.05-0.18 0.15-0.12 0.16-0.03 0.07 0.02 0.07 0.02 0.15 0.04 0.15 0.07 0.19 0.04 0.19-0.04 0.17-0.02 0.01 0.13 0.1 0.12 0.05 0.19-0.18 0.1 0.1-0.2 0.8-0.24 0.13-0.34-0.1-0.14 0.35 0.17 0.45v0.21l-0.22 0.19-0.5-0.18 0.12 0.32-0.27 0.22 0.16 0.12v0.18l-0.45 0.74 0.27 0.03 0.1 0.24-0.12 0.48-0.3 0.28-0.17 0.09-0.16-0.14-0.16 0.24-0.29-0.2-0.12 0.08-0.12 0.3 0.24 0.3-0.01 0.08-0.34 0.1-0.25-0.07-0.12-0.28-0.59 0.16-0.15-0.13-0.41 0.07-0.2-0.5-0.45 0.2-0.12-0.2-0.3 0.18-0.38 0.85-0.3-0.2-0.7 0.03-0.09-0.52-0.41 0.14-0.39-0.14 0.63-0.52 0.02-0.12-0.26-0.32 0.13-0.18-0.67-0.53 0.23-0.26-0.1-0.31-0.16-0.06-0.24 0.16-0.1-0.22 0.14-0.15-0.09-0.19 0.25 0.03 0.07-0.08-0.17-0.15h0.21l-0.51-0.24 0.32-0.16-0.2-0.23 0.26-0.43-0.34-0.52 0.22-0.17-1.22-0.8 0.44-0.31 0.34-0.73-0.26-0.43-0.28-0.08 0.24-0.19-0.2-0.42 0.34-0.23-0.02-0.03 0.25 0.1 0.33 0.02 0.49-0.1 0.02-0.16-0.04-0.2 0.01-0.2 0.11-0.12 0.15-0.05 0.17-0.02 0.4-0.11 0.26-0.03 0.27 0.03 1.29 0.36 0.2 0.12 0.06 0.21v0.2l0.02 0.16 0.16 0.18 0.13 0.05 1.23-0.08 0.23-0.09 0.45-0.4 1.25-0.72 0.5-0.43 0.37-0.59 0.05-0.17 0.05-0.39v-0.07h0.01l0.2 0.18 0.1 0.16 0.09 0.3 0.18 0.2 0.2 0.15 0.14 0.16 0.04 0.1 0.02 0.1-0.02 0.12-0.07 0.12z"
		/>
		<path
			id="West_Flanders_BE"
			d="m259.98 621.33 0.02 0.03-0.34 0.23 0.2 0.42-0.24 0.2 0.29 0.07 0.26 0.43-0.34 0.73-0.44 0.32 1.21 0.79-0.22 0.17 0.34 0.52-0.25 0.42 0.19 0.24-0.32 0.16 0.51 0.23h-0.2l0.16 0.16-0.07 0.07-0.25-0.02 0.09 0.19-0.13 0.14 0.1 0.23 0.23-0.16 0.16 0.06 0.1 0.3-0.23 0.27 0.67 0.53-0.13 0.18 0.26 0.32-0.02 0.12-0.63 0.52-0.45 0.37-0.46 0.52-0.03 0.13-0.1-0.03h-0.07l-0.26-0.18v-0.23l-0.24-0.3-0.44 0.08-0.44-0.23-0.46 0.26-0.12 0.05-0.2-0.3-0.18-0.16-0.27-0.07-0.83 0.3v-0.06l-0.12-0.55-0.17-0.1-0.6 0.27v0.07l0.22 0.25-0.39 0.18-0.04 0.15-0.3 0.07-0.15-0.13-0.07 0.03-0.27 0.18 0.24 0.68 0.05 0.15-0.85-0.35-0.2-0.16-0.06-0.1-0.16-0.33-0.06-0.1-0.4-0.37-0.08-0.12-0.03-0.11-0.06-0.1-0.14-0.06-0.1-0.01-0.2 0.03h-0.08l-0.16-0.03-0.08-0.03-0.06-0.09-0.1-0.2-0.04-0.06-0.13-0.06-0.04-0.05v-0.08l0.08-0.19 0.01-0.1-0.23-0.73 0.06-0.15 0.23-0.25 0.06-0.1-0.05-0.33-0.17-0.25-0.39-0.4-0.11-0.31-0.13-0.73-0.17-0.38 0.2-0.16 0.4-0.15 1.36-1.12 2.11-1.36 2.03-1.47 2.29-0.86 0.13 0.64-0.03 0.41 0.01 0.39 0.17 0.41 0.26 0.27z"
		/>
		<path
			id="Antwerp_BE"
			d="m279.04 620-0.12 0.1-0.07 0.65 0.45 0.37 0.08 0.66-0.24 0.25-0.35-0.07-0.2 0.36-0.52 0.07-0.39 0.56-0.82 0.23 0.02 0.22-0.27 0.45-0.16-0.17-0.2 0.03-0.38 0.19-0.27 0.26-0.13-0.05-0.53 0.26-0.14-0.08-0.2-0.38-0.32 0.28-0.23-0.03-0.38 0.48 0.1-0.27-0.29-0.13-0.75 0.25-0.11 0.35h-0.16l-0.35-0.17-0.17 0.2-0.37-0.26-0.17 0.3-0.25-0.22-0.62 0.19-0.07-0.24-0.2-0.05 0.09-0.26-0.31 0.24-0.07-0.03 0.06-0.12-0.53-0.2-0.25-0.03-0.35 0.1-0.1-0.09-0.2 0.18-0.11-0.04-0.13-0.1 0.02-0.02 0.04-0.17-0.04-0.19-0.07-0.18-0.04-0.15-0.02-0.15-0.02-0.07 0.03-0.07 0.12-0.17 0.18-0.14 0.2-0.05 0.43-0.03 0.4-0.16 0.12-0.26 0.02-0.37-0.03-0.11-0.07-0.2-0.27-0.36 0.09-0.06-0.27-0.7 0.06-0.17 0.04-0.03-0.02 0.03 0.12-0.07 0.08-0.1 0.13-0.32-0.36-0.13-0.08-0.06-0.05-0.15-0.01-0.36-0.05-0.17-0.08-0.13-0.16-0.18h0.3l0.38 0.18 0.2 0.05h0.49l0.19-0.11 0.03-0.3-0.07-0.15-0.25-0.26-0.09-0.15v-0.17l0.06-0.13 0.02-0.12-0.14-0.13 0.52-0.35 0.54-0.24 0.3-0.07 0.13 0.02 0.1 0.13v0.28l-0.08 0.22v0.16l0.2 0.13h0.14l0.3-0.07 0.33 0.06 0.16-0.02 0.13-0.06 0.1-0.09 0.74-1.03 0.32-0.2h0.15l0.2 0.06 0.18 0.1 0.11 0.14 0.04 0.25-0.05 0.24-0.03 0.26 0.1 0.28-0.47-0.18-0.11 0.02-0.05 0.2 0.23 0.09 0.72-0.03 0.2 0.04 0.4 0.16 0.22-0.08 0.24-0.27 0.22-0.34 0.14-0.28 0.06-0.21 0.03-0.16 0.05-0.1 0.16-0.05 0.03 0.04 0.32 0.18 0.23 0.38-0.02 0.27-0.1 0.28v0.36l0.07 0.16 0.38 0.37 0.07 0.14 0.13 0.36 0.06 0.1 0.19 0.09 0.4-0.06h0.19l0.2 0.22 0.04 0.6 0.19 0.03 0.06-0.02z"
		/>
		<path
			id="Liege_BE"
			d="m284.78 627.87 0.03 0.04 0.17 0.15 0.26-0.1 0.49 0.56 0.37-0.09 0.26 0.11 0.09-0.04 0.21-0.4-0.21-0.24 0.11 0.03 0.76-0.03 0.21-0.06-0.01 0.03v0.06l0.01 0.03 0.18 0.08 0.02 0.16-0.02 0.18 0.05 0.13h0.14l0.4-0.14h0.18l0.22 0.18 0.71 0.93-0.13 0.1 0.15 0.23 0.22 0.1 0.72-0.05 0.04 0.1-0.07 0.15-0.1 0.16v0.06l-0.22 0.16-0.3 0.3-0.17 0.32 0.2 0.21-0.08 0.14 0.02 0.07 0.09 0.03h0.12l-0.07 0.15 0.1 0.07 0.1 0.18 0.09 0.06h0.1l0.35-0.14 0.02-0.02 0.03-0.01h0.02l0.03 0.02 0.16 0.07 0.47 0.06h0.19l-0.11 0.12-0.01 0.14 0.04 0.14 0.07 0.17 0.1 0.14h0.08l0.05 0.06 0.01 0.28-0.04 0.4-0.05 0.22 0.03 0.2 0.42 0.6 0.02 0.11 0.02 0.13-0.12 0.15-0.28 0.07-0.14-0.01-0.13-0.04h-0.12l-0.13 0.1-0.1 0.13-0.05 0.17v0.17l0.05 0.14-0.18 0.2-0.44 0.16-0.2 0.12-0.1 0.17-0.22 0.2-0.1 0.15 0.15 0.14 0.08 0.19 0.01 0.18-0.05 0.17-0.08 0.05-0.2 0.04-0.1 0.06v0.06l-0.03 0.2-0.01 0.07 0.11 0.08 0.05 0.1-0.02 0.11-0.09 0.12-0.16-0.05-0.04-0.13v-0.16l-0.06-0.15-0.14-0.12-0.08 0.02-0.07 0.08-0.08 0.06-0.24 0.06h-0.12l-0.05-0.03-0.02-0.5-0.01-0.05-0.06-0.17 0.13-0.18-0.23-0.03-0.07-0.18-0.06-1.55-0.35-0.15-0.03-0.14-1.3-0.18-0.07 0.32 0.2 0.15-0.18 0.6 0.37 0.02-0.06 0.17-0.66 0.15-0.05 0.17-0.09-0.16-0.17-0.04-0.63 0.15 0.24-0.63-0.3-0.05-0.18-0.28-0.03-0.18 0.15-0.42-0.53 0.04 0.04-0.2-0.35 0.04-0.61-0.49-0.35 0.2-0.17-0.01-0.06-0.05 0.02-0.15-0.18-0.03-0.12-0.32-0.4 0.31-0.49-0.32-0.14 0.02-0.05 0.12 0.24 0.36-0.33 0.36-0.46-0.12-0.55 0.43-0.16-0.2v-0.3l-0.54-0.1-0.14-0.21 0.14-0.34-0.23-0.42-0.24-0.22-0.35 0.17-0.13-0.2 0.04-0.14-0.2 0.04-0.1-0.25 0.14-0.15-0.24 0.13-0.15-0.02-0.18-0.38-0.6 0.01 0.2-0.16-0.33-0.78-0.54-0.45 0.01-0.4 0.18-0.4-0.05-0.48 0.16-0.13-0.28-0.36 0.24-0.15 0.01-0.31 0.27 0.13 0.01 0.3 0.2 0.21 0.16 0.07 0.27-0.07 0.7 0.16 0.13-0.17-0.13-0.27 0.62 0.04 0.07-0.16 0.09 0.18 0.32-0.24 0.35 0.16 0.03-0.19 0.2-0.2 0.47-0.2 0.14 0.05 0.16 0.32 0.29 0.1 0.23-0.05 0.06-0.3 0.22 0.2 0.16-0.04 0.27-0.27-0.04-0.27 0.88-0.34 0.47-0.56 0.07 0.04 0.23 0.09 0.17 0.04v0.2l-0.09 0.39 0.2 0.1h0.12l0.1-0.02 0.05-0.09z"
		/>
		<path
			id="Walloon_Brabant_BE"
			d="m277.32 628.53v0.31l-0.25 0.15 0.28 0.36-0.15 0.13 0.04 0.49-0.17 0.39-0.34-0.05-0.22 0.34h-0.28v0.1l-1.1 0.37-0.06 0.05 0.05 0.2-0.13-0.18-0.4 0.2-0.1-0.33-0.26 0.1-0.04 0.18-0.3-0.2-0.1 0.02-0.1 0.2 0.15 0.51-0.24 0.07-0.39-0.12-0.18 0.04-0.17 0.15 0.05 0.28-0.61 0.31-0.16-0.06v-0.15l-0.33 0.2v-0.41l-0.05-0.08-0.48 0.03-0.11-0.11-0.6 0.1-0.24 0.3v-0.41l-0.3 0.05-0.3-0.4-0.34-0.05 0.04-0.35-0.57-0.11 0.03-0.35-0.21-0.26-0.12 0.05-0.3 0.48-0.24 0.05-0.19-0.07-0.12-0.29-0.04-0.61 0.03-0.22 0.19-0.06h-0.14l0.07-0.17h0.26l0.06-0.2 0.1-0.04 0.1 0.03 0.25 0.3 0.29-0.02 0.35 0.27 0.2-0.16 0.3 0.08 0.15-0.06 0.06-0.1 0.02-0.25 0.23-0.02-0.12-0.16 0.07-0.09 0.21 0.27h0.2l0.05-0.25 0.5-0.11 0.36-0.32 0.22-0.1 0.16 0.02-0.04 0.2 0.06 0.08 0.34 0.17 0.01-0.2 0.46-0.14 0.23-0.29 0.07 0.36 0.35-0.04 0.2-0.25-0.22-0.25 0.02-0.43 0.56 0.1 0.17-0.1 0.05 0.11 0.08-0.21 0.27-0.12 0.45 0.12 0.25 0.36h0.25l-0.03 0.19 0.78-0.13-0.01 0.3 0.14 0.1 0.16-0.03 0.48-0.45 0.42 0.29z"
		/>
	</svg>
)

const ForwardRef = forwardRef(Belgium)
export default ForwardRef
