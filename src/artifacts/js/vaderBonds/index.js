const bonds = [
	{
		'name': 'Uniswap V2 VADER / ETH LP',
		'address':'0x1b96d82b8b13c75d4ce347a53284b10d93b63684',
		'zap': '0x781b2844605298fb45c653dc1ef0d0b941293323',
		'principal': {
			'address':'0x452c60e1e3ae0965cd27db1c7b3a525d197ca0aa',
			'name':'Uniswap VADER/ETH LP',
			'symbol':'UNI-V2',
			'decimals':18,
		},
		'token0': {
			'address':'0x2602278ee1882889b946eb11dc0e810075650983',
			'name':'VADER',
			'symbol':'VADER',
			'decimals':18,
			'logoURI':'https://raw.githubusercontent.com/vetherasset/branding/main/vader/vader-symbol-w-ring.png',
		},
		'token1': {
			'name':'ETHER',
			'symbol':'ETH',
			'decimals':18,
			'isEther':true,
			'logoURI':'https://raw.githubusercontent.com/vetherasset/vader-dapp/65a55cc1d1e89e1549b3d119d296ac8d701a37ea/src/assets/png/eth-diamond-purple-purple.png',
		},
		'payout': {
			'address':'0x2602278ee1882889b946eb11dc0e810075650983',
			'name':'VADER',
			'symbol':'VADER',
			'decimals':18,
			'logoURI':'https://raw.githubusercontent.com/vetherasset/branding/main/vader/vader-symbol-w-ring.png',
		},
	},
]

const bondsRinkeby = [
	{
		'name': 'Uni-v2 BOOTusd/BOOT LP Bond',
		'address':'0x8154495B68741Cba832803EE802f4b6192377967',
		'principal': {
			'address':'0xf28701F4655412403077802E230fe59d6C9bCda6',
			'name':'Uniswap V2 BOOT/BOOTusd LP',
			'symbol':'BOOTusdLP',
			'decimals':18,
		},
		'token0': {
			'address':'0x7bcfded5ff78bef4eafad04747ea05fe6904c4ae',
			'name':'BOOT USD',
			'symbol':'BOOTusd',
			'decimals':18,
			'logoURI':'https://raw.githubusercontent.com/vetherasset/vader-dapp/65a55cc1d1e89e1549b3d119d296ac8d701a37ea/src/assets/png/eth-diamond-purple-purple.png',
		},
		'token1': {
			'address':'0x9C2Ae69186f925108D9518a999978D5259A5858A',
			'name':'Boot Finance',
			'symbol':'BOOT',
			'decimals':18,
			'logoURI':'https://sale.boot.finance/logo192.png',
		},
		'payout': {
			'address':'0x9C2Ae69186f925108D9518a999978D5259A5858A',
			'name':'Boot Finance',
			'symbol':'BOOT',
			'decimals':18,
			'logoURI':'https://sale.boot.finance/logo192.png',
		},
	},
]

export { bonds, bondsRinkeby }