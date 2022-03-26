import React from 'react'
import { Flex, Box, Link } from '@chakra-ui/react'
import { FaBookOpen, FaDiscord, FaTelegramPlane, FaGithub } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import defaults from '../common/defaults'

export const Footer = (props) => {

	const linkWrapper = {
		minWidth: '105.55px',
		textAlign: 'center',
	}

	const linkStyle = {
		textAlign: 'center',
	}

	const iconStyle = {
		display: 'inline-block',
		marginInlineEnd: '0.5rem',
		fontSize: '0.83rem',
		verticalAlign: 'baseline',
	}

	const soloIconStyle = {
		...iconStyle,
		verticalAlign: 'text-top',
		fontSize: '1.2rem',
		marginInlineEnd: '0',
	}

	const container = {
		w: '100%',
		justifyContent: 'center',
		m: '20px 0',
	}

	return(
		<Flex {...props}>
			<Flex
				{...container}
				gridGap={['1.3rem', '9rem']}
				direction={['column', 'row']}
			>
				<Box {...linkWrapper}>
					<Link {...linkStyle} isExternal href='https://bootfinance.notion.site/Litepaper-v0-9-eaf14e3fbff443c494eb43059ce29734'>
						<IoIosPaper style={iconStyle}/>
							Whitepaper
					</Link>
				</Box>
				<style>
					{`
						#svgUni {
							fill: #fff;
						}
						#svgUni:hover {
						fill: #3fa3fa;
					}`}
				</style>
				<Box {...linkWrapper}>
					<Link id='svgUni' {...linkStyle} isExternal href={`https://uniswap.exchange/swap/${defaults.address.vader}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 168.30571 193.80701"
							version="1.1"
							style={{
								display: 'inline-block',
								marginInlineEnd: '0.5rem',
								width: '14.4px',
								verticalAlign: 'text-top',
							}}>
							<defs
								id="defs24" />
							<path
								d="m 66.040183,44.1088 c -2.0913,-0.3244 -2.1795,-0.3625 -1.1953,-0.5137 1.886,-0.2901 6.3396,0.1052 9.4086,0.835 7.164,1.703 13.683,6.0656 20.642,13.8136 l 1.849,2.0584 2.645,-0.4252 c 11.141997,-1.7905 22.475997,-0.3675 31.956997,4.0121 2.608,1.2049 6.72,3.6033 7.234,4.2196 0.163,0.1964 0.464,1.4608 0.667,2.81 0.705,4.6678 0.352,8.2457 -1.075,10.918 -0.777,1.4542 -0.821,1.9151 -0.299,3.1594 0.418,0.993 1.58,1.728 2.731,1.727 2.356,-0.003 4.892,-3.8119 6.067,-9.111 l 0.466,-2.1049 0.925,1.0473 c 5.071,5.7457 9.055,13.5816 9.739,19.1586 l 0.178,1.455 -0.852,-1.322 c -1.468,-2.275 -2.942,-3.824 -4.829,-5.073 -3.403,-2.251 -7,-3.018 -16.529,-3.52 -8.605,-0.453 -13.475,-1.188 -18.305,-2.763 -8.216,-2.6788 -12.358,-6.2466 -22.118997,-19.0521 -4.335,-5.6879 -7.014,-8.8348 -9.68,-11.3691 -6.056,-5.7584 -12.007,-8.7784 -19.6253,-9.96 z"
								id="path2" />
							<path
								d="m 140.52148,56.8083 c 0.216,-3.8114 0.733,-6.3253 1.772,-8.6211 0.411,-0.9087 0.797,-1.6525 0.856,-1.6525 0.06,0 -0.119,0.6708 -0.397,1.4904 -0.756,2.2281 -0.88,5.2756 -0.359,8.8213 0.66,4.4988 1.036,5.1479 5.791,10.0076 2.23,2.2794 4.824,5.1542 5.765,6.3885 l 1.71,2.2442 -1.71,-1.6039 c -2.091,-1.9613 -6.9,-5.7864 -7.963,-6.3332 -0.712,-0.3667 -0.818,-0.3603 -1.257,0.077 -0.405,0.4029 -0.49,1.0084 -0.547,3.8708 -0.087,4.4613 -0.695,7.3247 -2.163,10.1879 -0.793,1.5486 -0.919,1.2181 -0.2,-0.5298 0.536,-1.3051 0.591,-1.8789 0.587,-6.1976 -0.009,-8.6774 -1.039,-10.7635 -7.08,-14.3372 -1.531,-0.9053 -4.053,-2.2109 -5.604,-2.9015 -1.552,-0.6907 -2.784,-1.2922 -2.739,-1.3371 0.171,-0.1703 6.063,1.5494 8.434,2.4616 3.527,1.3569 4.11,1.5327 4.538,1.369 0.287,-0.1097 0.426,-0.946 0.566,-3.4044 z"
								id="path4" />
							<path
								d="m 70.102483,71.6529 c -4.2456,-5.8451 -6.8724,-14.8071 -6.3037,-21.5065 l 0.1758,-2.0731 0.9664,0.1763 c 1.8149,0.331 4.9445,1.4957 6.4095,2.3857 4.021,2.442 5.761,5.6572 7.532,13.9131 0.519,2.4182 1.2,5.1548 1.513,6.0812 0.504,1.4913 2.409,4.9745 3.958,7.2367 1.116,1.6293 0.375,2.4013 -2.091,2.1787 -3.767,-0.34 -8.869,-3.8611 -12.16,-8.3921 z"
								id="path6"/>
							<path
								d="m 135.37148,115.155 c -19.841,-7.988 -26.829,-14.923 -26.829,-26.623 0,-1.721 0.059,-3.13 0.131,-3.13 0.072,0 0.84,0.568 1.706,1.263 4.023,3.227 8.529,4.605 21.002,6.425 7.339,1.07 11.469,1.935 15.28,3.199 12.11,4.016 19.602,12.167 21.389,23.268 0.519,3.226 0.215,9.275 -0.627,12.463 -0.665,2.518 -2.693,7.057 -3.23,7.231 -0.149,0.049 -0.296,-0.523 -0.334,-1.301 -0.204,-4.168 -2.311,-8.227 -5.848,-11.267 -4.023,-3.456 -9.427,-6.208 -22.64,-11.528 z"
								id="path8" />
							<path
								d="m 121.44248,118.474 c -0.249,-1.479 -0.68,-3.369 -0.958,-4.198 l -0.507,-1.509 0.941,1.056 c 1.301,1.46 2.329,3.329 3.201,5.819 0.665,1.9 0.74,2.465 0.735,5.552 -0.005,3.031 -0.088,3.667 -0.703,5.377 -0.968,2.697 -2.17,4.609 -4.187,6.661 -3.624,3.689 -8.284,5.731 -15.008,6.578 -1.169,0.147 -4.576,0.395 -7.570997,0.551 -7.548,0.393 -12.516,1.204 -16.979,2.771 -0.642,0.225 -1.215,0.362 -1.273,0.304 -0.181,-0.179 2.858,-1.991 5.369,-3.2 3.539,-1.705 7.063,-2.636 14.957,-3.95 3.899997,-0.65 7.926997,-1.438 8.949997,-1.752 9.657,-2.961 14.622,-10.602 13.033,-20.06 z"
								id="path10"/>
							<path
								d="m 130.53748,134.627 c -2.636,-5.667 -3.241,-11.138 -1.797,-16.241 0.154,-0.545 0.403,-0.992 0.552,-0.992 0.15,0 0.772,0.337 1.383,0.748 1.214,0.817 3.651,2.195 10.142,5.734 8.099,4.416 12.717,7.835 15.858,11.742 2.75,3.422 4.452,7.318 5.271,12.07 0.464,2.692 0.192,9.168 -0.498,11.879 -2.178,8.546 -7.239,15.258 -14.458,19.176 -1.058,0.573 -2.008,1.044 -2.11,1.047 -0.103,0.002 0.282,-0.978 0.856,-2.178 2.429,-5.077 2.705,-10.015 0.869,-15.511 -1.124,-3.365 -3.416,-7.472 -8.044,-14.412 -5.381,-8.069 -6.7,-10.216 -8.024,-13.062 z"
								id="path12" />
							<path
								d="m 56.012183,165.203 c 7.3629,-6.217 16.5243,-10.633 24.8693,-11.989 3.596,-0.584 9.588,-0.352 12.918,0.5 5.338,1.366 10.112997,4.426 12.596997,8.072 2.427,3.563 3.468,6.668 4.552,13.576 0.428,2.725 0.893,5.462 1.034,6.081 0.814,3.581 2.398,6.443 4.362,7.88 3.118,2.282 8.488,2.424 13.77,0.364 0.896,-0.35 1.675,-0.592 1.729,-0.537 0.192,0.19 -2.468,1.97 -4.344,2.908 -2.525,1.261 -4.533,1.749 -7.201,1.749 -4.838,0 -8.854,-2.461 -12.206,-7.48 -0.659,-0.987 -2.141,-3.945 -3.294,-6.573 -3.538,-8.071 -5.285997,-10.529 -9.393997,-13.22 -3.576,-2.341 -8.187,-2.761 -11.656,-1.06 -4.557,2.234 -5.828,8.057 -2.564,11.748 1.297,1.466 3.716,2.731 5.694,2.977 3.7,0.461 6.88,-2.354 6.88,-6.09 0,-2.426 -0.932,-3.81 -3.28,-4.87 -3.205,-1.446 -6.651,0.245 -6.635,3.256 0.007,1.284 0.567,2.091 1.854,2.673 0.826,0.374 0.845,0.404 0.171,0.264 -2.941,-0.61 -3.63,-4.156 -1.265,-6.51 2.839,-2.826 8.711,-1.579 10.727,2.278 0.847,1.62 0.945,4.847 0.207,6.796 -1.653,4.361 -6.472,6.655 -11.361,5.407 -3.328,-0.85 -4.684,-1.77 -8.697,-5.904 -6.9728,-7.183 -9.6799,-8.575 -19.733,-10.144 l -1.9264,-0.301 z"
								id="path14"/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M 3.4295826,4.2965 C 26.716883,32.5605 62.619383,76.566 64.401783,79.0297 c 1.4716,2.0343 0.9178,3.8632 -1.6034,5.2963 -1.402,0.797 -4.2845,1.605 -5.7277,1.605 -1.6323,0 -3.4713,-0.786 -4.8104,-2.057 -0.9464,-0.8973 -4.7666,-6.6018 -13.5854,-20.2854 -6.7478,-10.4703 -12.3947,-19.1559 -12.5488,-19.3013 -0.3562,-0.3363 -0.3501,-0.325 11.8607,21.5234 7.6674,13.7192 10.2558,18.5693 10.2558,19.2183 0,1.319 -0.36,2.013 -1.9876,3.828 -2.7132,3.027 -3.926,6.428 -4.8016,13.467 -0.9815,7.89 -3.7415,13.463 -11.3902,23.002 -4.4774,5.584 -5.21,6.608 -6.3397,8.858 -1.423,2.835 -1.8143,4.422 -1.9729,8.001 -0.1676,3.784 0.1588,6.228 1.3149,9.846 1.0121,3.167 2.0685,5.259 4.7692,9.442 2.3307,3.61 3.6727,6.292 3.6727,7.342 0,0.835 0.1594,0.836 3.771,0.02 8.6431,-1.951 15.6612,-5.384 19.6083,-9.591 2.4428,-2.604 3.0163,-4.041 3.0349,-7.61 0.0122,-2.333 -0.0699,-2.822 -0.7008,-4.165 -1.0269,-2.185 -2.8965,-4.002 -7.017,-6.819 -5.3991,-3.691 -7.7051,-6.662 -8.3421,-10.748 -0.5225,-3.353 0.0837,-5.719 3.0705,-11.979 3.0915,-6.479 3.8576,-9.241 4.3758,-15.772 0.3347,-4.219 0.7983,-5.884 2.0106,-7.219 1.2645,-1.393 2.4027,-1.865 5.5319,-2.292 5.1016,-0.697 8.3501,-2.017 11.0202,-4.478 2.3168,-2.134 3.2858,-4.191 3.4348,-7.2873 l 0.113,-2.3468 -1.295,-1.5092 C 65.435883,71.5529 0.29028263,0 0.00178263,0 -0.05981737,0 1.4827826,1.9335 3.4295826,4.2965 Z M 34.138783,146.466 c 1.0599,-1.877 0.4968,-4.29 -1.2761,-5.468 -1.6751,-1.114 -4.2773,-0.59 -4.2773,0.862 0,0.443 0.2449,0.765 0.7969,1.049 0.9295,0.478 0.997,1.016 0.2657,2.115 -0.7406,1.114 -0.6809,2.092 0.1686,2.757 1.3691,1.072 3.3072,0.483 4.3222,-1.315 z"
								id="path16"/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="m 74.637483,93.871 c -2.395,0.735 -4.723,3.273 -5.4436,5.935 -0.4397,1.624 -0.1902,4.472 0.4686,5.351 1.064,1.421 2.092,1.795 4.878,1.776 5.454,-0.038 10.196,-2.377 10.747,-5.302 0.452,-2.397 -1.631,-5.719 -4.499,-7.177 -1.48,-0.752 -4.628,-1.051 -6.151,-0.583 z m 6.376,4.985 c 0.841,-1.195 0.473,-2.487 -0.957,-3.36 -2.725,-1.664 -6.844,-0.287 -6.844,2.286 0,1.281 2.148,2.679 4.117,2.679 1.311,0 3.105,-0.782 3.684,-1.605 z"
								id="path18" />
						</svg>
				Uniswap
					</Link>
				</Box>
				<Box {...linkWrapper}>
					<Link {...linkStyle} isExternal href='https://bootfinance.notion.site/Boot-finance-FAQ-b855dfc4651146768bd49015d510bdd4'>
						<FaBookOpen style={iconStyle}/>
						Docs
					</Link>
				</Box>
			</Flex>
			<Flex
				{...container}
				gridGap={['1.3rem', '9rem']}
			>
				<Box {...linkWrapper}>
					<Link {...linkStyle} isExternal href='https://discord.gg/qVNFJrzj'>
						<FaDiscord style={soloIconStyle}/>
					</Link>
				</Box>
				<Box {...linkWrapper}>
					<Link {...linkStyle} isExternal href='https://github.com/bootfinance/'>
						<FaGithub style={soloIconStyle}/>
					</Link>
				</Box>
			</Flex>
		</Flex>
	)
}
