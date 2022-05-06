const bonds = [
	{
		'name': 'Uni-v2 BOOTusd/BOOT LP Bond',
		'address':'0xc5b8c9d43F9025a479Ee6A9b84cb8FEDfCb4213a',
		'principal': {
			'address':'0x620eFeAdCBe247e7B7cb00c72f77e76503a14a90',
			'name':'Uniswap V2 BOOT/BOOTusd LP',
			'symbol':'BOOTusdLP',
			'decimals':18,
		},
		'token0': {
			'address':'0x78a3B2f1e7eec1073088ea4a193618743F81cEf8',
			'name':'BOOT USD',
			'symbol':'BOOTusd',
			'decimals':18,
			'logoURI':'https://raw.githubusercontent.com/vetherasset/vader-dapp/65a55cc1d1e89e1549b3d119d296ac8d701a37ea/src/assets/png/eth-diamond-purple-purple.png',
		},
		'token1': {
			'address':'0x0337fe811809A0aaf9B5D07945b39E473dE4c46E',
			'name':'Boot Finance',
			'symbol':'BOOT',
			'decimals':18,
			'logoURI':'https://sale.boot.finance/logo192.png',
		},
		'payout': {
			'address':'0x0337fe811809A0aaf9B5D07945b39E473dE4c46E',
			'name':'Boot Finance',
			'symbol':'BOOT',
			'decimals':18,
			'logoURI':'https://sale.boot.finance/logo192.png',
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