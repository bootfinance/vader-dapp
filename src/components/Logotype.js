import React from 'react'
import { useBreakpointValue, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Logotype = (props) => {

	const width = useBreakpointValue({
		base: '126.31px',
		md: '156.31px',
	})

	return (
		<Link style={{ alignSelf: 'center' }} to='/'>
			<Image
				style={{ maxWidth: width }}
				src="https://sale.boot.finance/logo192.png"
				alt="Vader Protocol Logo"
				{...props}
			/>
		</Link>
	)
}
