module.exports = [
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': '_vader',
				'type': 'address',
			},
		],
		'stateMutability': 'nonpayable',
		'type': 'constructor',
	},
	{
		'inputs': [],
		'name': 'VADER',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'collateralAsset',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'debtAsset',
				'type': 'address',
			},
		],
		'name': 'assetChecks',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'u',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'U',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'A',
				'type': 'uint256',
			},
		],
		'name': 'calcAsymmetricShare',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'B0',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'T0',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'B1',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'T1',
				'type': 'uint256',
			},
		],
		'name': 'calcCoverage',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'b',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'B',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 't',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'T',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'P',
				'type': 'uint256',
			},
		],
		'name': 'calcLiquidityUnits',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'bp',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'total',
				'type': 'uint256',
			},
		],
		'name': 'calcPart',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'part',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'total',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'amount',
				'type': 'uint256',
			},
		],
		'name': 'calcShare',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'share',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'x',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'X',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'Y',
				'type': 'uint256',
			},
		],
		'name': 'calcSwapFee',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'x',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'X',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'Y',
				'type': 'uint256',
			},
		],
		'name': 'calcSwapOutput',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'x',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'X',
				'type': 'uint256',
			},
		],
		'name': 'calcSwapSlip',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'amount',
				'type': 'uint256',
			},
		],
		'name': 'calcSwapValueInBase',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'amount',
				'type': 'uint256',
			},
		],
		'name': 'calcSwapValueInToken',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'S',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'B',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'T',
				'type': 'uint256',
			},
		],
		'name': 'calcSynthUnits',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'amount',
				'type': 'uint256',
			},
		],
		'name': 'calcValueInBase',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'value',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'amount',
				'type': 'uint256',
			},
		],
		'name': 'calcValueInToken',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'value',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token1',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'amount',
				'type': 'uint256',
			},
			{
				'internalType': 'address',
				'name': 'token2',
				'type': 'address',
			},
		],
		'name': 'calcValueOfTokenInToken',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'value',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'member',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'collateral',
				'type': 'uint256',
			},
			{
				'internalType': 'address',
				'name': 'collateralAsset',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'debtAsset',
				'type': 'address',
			},
		],
		'name': 'getCollateralValueInBase',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'debt',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'baseValue',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'member',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
		],
		'name': 'getCoverage',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'collateralAsset',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'debtAsset',
				'type': 'address',
			},
		],
		'name': 'getDebtLoading',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'member',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'debt',
				'type': 'uint256',
			},
			{
				'internalType': 'address',
				'name': 'collateralAsset',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'debtAsset',
				'type': 'address',
			},
		],
		'name': 'getDebtValueInCollateral',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'totalSupply',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'maxSupply',
				'type': 'uint256',
			},
		],
		'name': 'getFeeOnTransfer',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'collateralAsset',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'debtAsset',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'timeElapsed',
				'type': 'uint256',
			},
		],
		'name': 'getInterestOwed',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'interestOwed',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'collateralAsset',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'debtAsset',
				'type': 'address',
			},
		],
		'name': 'getInterestPayment',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'basisPoints',
				'type': 'uint256',
			},
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'member',
				'type': 'address',
			},
		],
		'name': 'getMemberShare',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'units',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'outputBase',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'outputToken',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'member',
				'type': 'address',
			},
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'basisPoints',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'timeForFullProtection',
				'type': 'uint256',
			},
		],
		'name': 'getProtection',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'protection',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'amount',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'rewardReductionFactor',
				'type': 'uint256',
			},
		],
		'name': 'getReducedShare',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'rewardReductionFactor',
				'type': 'uint256',
			},
		],
		'name': 'getRewardShare',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'rewardShare',
				'type': 'uint256',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'b',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'B',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 't',
				'type': 'uint256',
			},
			{
				'internalType': 'uint256',
				'name': 'T',
				'type': 'uint256',
			},
		],
		'name': 'getSlipAdjustment',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
		],
		'name': 'isBase',
		'outputs': [
			{
				'internalType': 'bool',
				'name': 'base',
				'type': 'bool',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
		],
		'name': 'isPool',
		'outputs': [
			{
				'internalType': 'bool',
				'name': 'pool',
				'type': 'bool',
			},
		],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': 'token',
				'type': 'address',
			},
			{
				'internalType': 'uint256',
				'name': 'bound',
				'type': 'uint256',
			},
			{
				'internalType': 'bool',
				'name': 'inside',
				'type': 'bool',
			},
			{
				'internalType': 'uint256',
				'name': 'targetPrice',
				'type': 'uint256',
			},
		],
		'name': 'requirePriceBounds',
		'outputs': [],
		'stateMutability': 'view',
		'type': 'function',
	},
	{
		'inputs': [
			{
				'internalType': 'uint256[]',
				'name': 'array',
				'type': 'uint256[]',
			},
		],
		'name': 'sortArray',
		'outputs': [
			{
				'internalType': 'uint256[]',
				'name': '',
				'type': 'uint256[]',
			},
		],
		'stateMutability': 'pure',
		'type': 'function',
	},
]