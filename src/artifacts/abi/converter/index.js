module.exports = [{ 'inputs':[{ 'internalType':'contract IERC20', 'name':'_vether', 'type':'address' }, { 'internalType':'contract IERC20', 'name':'_vader', 'type':'address' }, { 'internalType':'bytes32', 'name':'_root', 'type':'bytes32' }, { 'internalType':'uint256', 'name':'_salt', 'type':'uint256' }], 'stateMutability':'nonpayable', 'type':'constructor' }, { 'anonymous':false, 'inputs':[{ 'indexed':true, 'internalType':'address', 'name':'user', 'type':'address' }, { 'indexed':false, 'internalType':'uint256', 'name':'vetherAmount', 'type':'uint256' }, { 'indexed':false, 'internalType':'uint256', 'name':'vaderAmount', 'type':'uint256' }], 'name':'Conversion', 'type':'event' }, { 'inputs':[{ 'internalType':'bytes32', 'name':'', 'type':'bytes32' }], 'name':'claimed', 'outputs':[{ 'internalType':'bool', 'name':'', 'type':'bool' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[{ 'internalType':'bytes32[]', 'name':'proof', 'type':'bytes32[]' }, { 'internalType':'uint256', 'name':'amount', 'type':'uint256' }], 'name':'convert', 'outputs':[{ 'internalType':'uint256', 'name':'vaderReceived', 'type':'uint256' }], 'stateMutability':'nonpayable', 'type':'function' }, { 'inputs':[], 'name':'getChainId', 'outputs':[{ 'internalType':'uint256', 'name':'chainId', 'type':'uint256' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'root', 'outputs':[{ 'internalType':'bytes32', 'name':'', 'type':'bytes32' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'salt', 'outputs':[{ 'internalType':'uint256', 'name':'', 'type':'uint256' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[{ 'internalType':'bytes32', 'name':'_root', 'type':'bytes32' }], 'name':'setRoot', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function' }, { 'inputs':[{ 'internalType':'contract ILinearVesting', 'name':'_vesting', 'type':'address' }], 'name':'setVesting', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function' }, { 'inputs':[], 'name':'vader', 'outputs':[{ 'internalType':'contract IERC20', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'vesting', 'outputs':[{ 'internalType':'contract ILinearVesting', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }, { 'inputs':[], 'name':'vether', 'outputs':[{ 'internalType':'contract IERC20', 'name':'', 'type':'address' }], 'stateMutability':'view', 'type':'function' }]