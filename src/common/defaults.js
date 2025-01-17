import { ApolloClient, InMemoryCache } from '@apollo/client'
import { QueryClient } from 'react-query'
import { ethers } from 'ethers'
import tokenListSources from '../tokenListSources'
import vaderTokens from '../artifacts/json/vaderTokens'
import { bonds, bondsRinkeby } from '../artifacts/js/vaderBonds'
import snapshot from '../artifacts/json/vetherSnapshot'

const defaults = {}

defaults.network = {}
defaults.network.chainId = Number(process.env.REACT_APP_CHAIN_ID)
defaults.network.provider = new ethers.providers.FallbackProvider(
	[
		/*
		{
			provider: new ethers.providers.AlchemyProvider(
				defaults.network.chainId,
				process.env.REACT_APP_ALCHEMY_KEY,
			),
			weight: 1,
			priority: 1,
			stallTimeout: 2000,
		},
		*/
		{
			provider: new ethers.providers.InfuraProvider(
				defaults.network.chainId,
				process.env.REACT_APP_INFURA_KEY,
			),
			weight: 1,
			priority: 2,
			stallTimeout: 2000,
		},
	],
	1,
)

defaults.network.connectors = {
	metamask: {
		meta: {
			key: 'injected',
			name: 'MetaMask',
			logo: 'https://raw.githubusercontent.com/vetherasset/' +
			'vader-dapp/main/src/assets/svg/icons/' +
			'metamask.svg',
		},
	},
	walletlink: {
		// WalletLink supports only ChainID 1
		chainId: defaults.network.chainId,
		url: (
			defaults.network.chainId === 1 ?
				`https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_KEY}` :
				undefined
		),
		appName: 'Vader Protocol',
		appLogoUrl: 'https://assets.website-files.com/' +
			'61ae0d8ed7b1917746ece3a2/61b1dc02bd76743dd3dedfdc_logo.png',
		meta: {
			key: 'walletlink',
			name: 'Coinbase Wallet',
			logo: 'https://raw.githubusercontent.com/vetherasset/' +
			'vader-dapp/main/src/assets/svg/icons/' +
			'coinbasewallet.svg',
		},
	},
	walletconnect: {
		rpc: {
			[defaults.network.chainId]: (
				defaults.network.chainId === 1 ?
					`https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_KEY}` :
					defaults.network.chainId === 4 ?
						`https://eth-rinkeby.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_KEY}` :
						undefined
			),
		},
		meta: {
			key: 'walletconnect',
			name: 'WalletConnect',
			logo: 'https://raw.githubusercontent.com/vetherasset/' +
			'vader-dapp/main/src/assets/svg/icons/' +
			'walletconnect.svg',
		},
	},
	other: {
		meta: {
			key: 'injected',
			name: 'Other',
			logo: 'https://raw.githubusercontent.com/vetherasset/' +
			'vader-dapp/main/src/assets/svg/icons/' +
			'otherwallets.svg',
		},
	},
}
defaults.network.autoConnect = true
defaults.network.pollInterval = 100000

defaults.network.tx = {}
defaults.network.tx.confirmations = 2

defaults.network.blockTime = {}
defaults.network.blockTime.second = (
	defaults.network.chainId === 1 ? 0.07407407 :
		defaults.network.chainId === 4 ? 0.06666667 :
			0)
defaults.network.blockTime.minute = defaults.network.blockTime.second * 60
defaults.network.blockTime.hour = defaults.network.blockTime.minute * 60
defaults.network.blockTime.day = defaults.network.blockTime.hour * 24

defaults.network.erc20 = {}
defaults.network.erc20.maxApproval = '302503999000000000299700000'

defaults.api = {}
defaults.api.staleTime = 100000
defaults.api.client = new QueryClient()

defaults.api.graphql = {}
defaults.api.graphql.uri = {}
defaults.api.graphql.uri.vaderProtocol = (
	defaults.network.chainId === 1 ? 'https://api.thegraph.com/subgraphs/name/satoshi-naoki/vader-protocol-mainnet' :
		defaults.network.chainId === 42 ? 'https://api.thegraph.com/subgraphs/name/satoshi-naoki/vader-protocol' :
			undefined
)
defaults.api.graphql.uri.uniswapV2 = (
	defaults.network.chainId === 1 ? 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2' :
		defaults.network.chainId === 4 ? 'https://api.thegraph.com/subgraphs/name/sc0vu/uniswap-v2-rinkeby' :
			undefined
)

defaults.api.graphql.cache = new InMemoryCache()

defaults.api.graphql.client = {}
defaults.api.graphql.client.vaderProtocol = new ApolloClient({
	uri: defaults.api.graphql.uri.vaderProtocol,
	cache: defaults.api.graphql.cache,
})
defaults.api.graphql.client.uniswapV2 = new ApolloClient({
	uri: defaults.api.graphql.uri.uniswapV2,
	cache: defaults.api.graphql.cache,
})

defaults.api.graphql.pollInterval = 100000

defaults.api.etherscanUrl = (
	defaults.network.chainId === 1 ? 'https://etherscan.io' :
		defaults.network.chainId === 4 ? 'https://rinkeby.etherscan.io' :
			undefined
)

defaults.address = {}
defaults.address.vader = (
	defaults.network.chainId === 1 ? '0x0337fe811809A0aaf9B5D07945b39E473dE4c46E' :
		defaults.network.chainId === 4 ? '0x9C2Ae69186f925108D9518a999978D5259A5858A' :
			undefined
)
defaults.address.vether = (
	defaults.network.chainId === 1 ? '0x4Ba6dDd7b89ed838FEd25d208D4f644106E34279' :
		defaults.network.chainId === 42 ? '0x4402a7c8829489705852e54da50ebec60c8c86a8' :
			undefined
)
defaults.address.xvader = (
	defaults.network.chainId === 1 ? '0x665ff8fAA06986Bd6f1802fA6C1D2e7d780a7369' :
		defaults.network.chainId === 42 ? '0x0AA1056Ee563C14484fCC530625cA74575C97512' :
			undefined
)
defaults.address.usdv = (
	defaults.network.chainId === 1 ? '0xea3Fb6f331735252E7Bfb0b24b3B761301293DBe' :
		defaults.network.chainId === 42 ? '0xF5783253A21E5E740908CEdB800183b70A004479' :
			undefined
),
defaults.address.converter = (
	defaults.network.chainId === 1 ? '0x6D4a43Ee4770a2Bab97460d3a3B783641D85d108' :
		defaults.network.chainId === 42 ? '0x8A313Fa0cb3ed92bE4Cae3a4deF7C32c78181E09' :
			undefined
)
defaults.address.linearVesting = (
	defaults.network.chainId === 1 ? '0xb3C600C04AaF603b0f422b73Db244216C2e491f6' :
		defaults.network.chainId === 42 ? '0xDaA4B82D5Bdd315a3191B080E26ff7A88eb8034E' :
			undefined
)

defaults.address.uniswapV2 = {}
defaults.address.uniswapV2.vaderEthPair = (
	defaults.network.chainId === 1 ? '0x452c60e1e3ae0965cd27db1c7b3a525d197ca0aa' :
		defaults.network.chainId === 42 ? '0xC42706E83433580dd8d865a30e2Ae61082056007' :
			undefined
)
defaults.address.uniswapV2.usdcEthPair = (
	defaults.network.chainId === 1 ? '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc' :
		defaults.network.chainId === 42 ? '0x00ba37fd79ba75b631e74de45299bb8021611e22' :
			undefined
)

defaults.tokenList = {}
defaults.tokenList.default = vaderTokens
defaults.tokenList.sources = tokenListSources

defaults.ether = {
	'name':'ETHER',
	'symbol':'ETH',
	'decimals':18,
	'logoURI':'https://raw.githubusercontent.com/vetherasset/vader-dapp/65a55cc1d1e89e1549b3d119d296ac8d701a37ea/src/assets/png/eth-diamond-purple-purple.png',
	'isEther': true,
}

defaults.vader = {
	'chainId':defaults.network.chainId,
	'address':defaults.address.vader,
	'name':'Boot Finance',
	'symbol':'BOOT',
	'decimals':18,
	'logoURI':'https://assets.website-files.com/61ae0d8ed7b1917746ece3a2/61b1dc02bd76743dd3dedfdc_logo.png',
},
defaults.vader.conversionRate = 10000

defaults.xvader = {
	'chainId':defaults.network.chainId,
	'address':defaults.address.xvader,
	'name':'xVADER',
	'symbol':'xVADER',
	'decimals':18,
	'logoURI':'https://raw.githubusercontent.com/vetherasset/branding/main/xvader/xvader-symbol-w-ring.png',
},

defaults.usdv = {
	'chainId':defaults.network.chainId,
	'address':defaults.address.usdv,
	'name':'USDV',
	'symbol':'USDV',
	'decimals':18,
	'logoURI':'https://raw.githubusercontent.com/vetherasset/branding/main/usdv/usdv-symbol-w-ring.png',
}

defaults.vether = {
	'chainId':defaults.network.chainId,
	'address':defaults.address.vether,
	'name':'VETHER',
	'symbol':'VETH',
	'decimals':18,
	'logoURI':'https://raw.githubusercontent.com/vetherasset/branding/main/vether/vether-symbol-w-ring.png',
}

defaults.redeemables = [
	{
		...defaults.vether,
		'convertsTo':defaults.vader,
		'snapshot':snapshot,
		'salt':(
			defaults.network.chainId === 1 ? '13662469' :
				defaults.network.chainId === 42 ? '13662469' :
					undefined
		),
	},
	{
		...defaults.usdv,
		'convertsTo':defaults.vader,
		'disabled': false,
	},
	{
		...defaults.vader,
		'convertsTo':defaults.usdv,
		'disabled': false,
	},
]

defaults.stakeable = [
	...[defaults.vader],
]

defaults.unstakeable = [
	...[defaults.xvader],
]

defaults.bonds = defaults.network.chainId === 1 ? bonds :
	defaults.network.chainId === 4 ? bondsRinkeby :
		[]

defaults.bondConsideredSoldOutMinVader = ethers.BigNumber.from('5000000000000000000')
defaults.bondZapMinPayoutAllowed = '10000000000000000'

defaults.xVaderAPRBasedNumberOfRecords = 14

defaults.layout = {}
defaults.layout.header = {}
defaults.layout.header.width = '100%'
defaults.layout.header.padding = '1.2rem 1rem'
defaults.layout.header.minHeight = '98.4px'

defaults.layout.container = {}
defaults.layout.container.xl = {}
defaults.layout.container.xl.width = '75rem'
defaults.layout.container.lg = {}
defaults.layout.container.lg.width = '65rem'
defaults.layout.container.lg.padding = { base: '0 1.25rem', md: '0 2.5rem' }
defaults.layout.container.md = {}
defaults.layout.container.md.width = '840px'
defaults.layout.container.sm = {}
defaults.layout.container.sm.width = '768px'

defaults.toast = {}
defaults.toast.duration = 5000
defaults.toast.txHashDuration = 8000
defaults.toast.closable = true
defaults.toast.position = 'top'

export default defaults
