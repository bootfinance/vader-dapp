/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
	Box,
	Button,
	Flex,
	Text,
	Tab,
	TabList,
	Tabs,
	TabPanels,
	TabPanel,
	NumberInput,
	NumberInputField,
	InputGroup,
	InputRightElement,
	useToast,
	Image,
} from '@chakra-ui/react'
import defaults from '../common/defaults'
import { useWallet } from 'use-wallet'
import { ethers } from 'ethers'
import {
	getERC20BalanceOf,
	getERC20Allowance,
	approveERC20ToSpend,
	stakeVader,
	unstakeVader,
} from '../common/ethereum'
import { getXVaderPrice, getXVaderApy } from '../common/calculation'
import {
	approved,
	rejected,
	failed,
	walletNotConnected,
	noAmount,
	staked,
	unstaked,
} from '../messages'
import { prettifyNumber } from '../common/utils'
const Stake = props => {
	const wallet = useWallet()
	const [accessApproved, setAccessApproved] = useState(false)
	const [vdrBalance, setVdrBalance] = useState(0)
	const [xvdrBalance, setXvdrBalance] = useState(0)
	const [xvdrExchangeRate, setXvdrExchangeRate] = useState(0)
	const [stakeApy, setStakeApy] = useState(0)
	const [refreshDataToken, setRefreshDataToken] = useState(Date.now())

	useEffect(() => {
		getXVaderPrice().then(price => {
			setXvdrExchangeRate(Number(price))
		})
	}, [refreshDataToken])

	useEffect(() => {
		getXVaderApy().then(apy => {
			setStakeApy(Number(apy))
		})
	}, [refreshDataToken])

	useEffect(() => {
		if (wallet.account) {
			const provider = new ethers.providers.Web3Provider(wallet.ethereum)
			getERC20Allowance(
				defaults.address.fakeVader,
				wallet.account,
				defaults.address.xvader,
				provider,
			)
				.then(data => {
					setAccessApproved(data.gt(0))
				})
				.catch(console.error)
		}
	}, [wallet.account, refreshDataToken])

	useEffect(() => {
		if (wallet.account) {
			const provider = new ethers.providers.Web3Provider(wallet.ethereum)
			getERC20BalanceOf(defaults.address.fakeVader, wallet.account, provider)
				.then(data => {
					setVdrBalance(+ethers.utils.formatEther(data))
				})
				.catch(console.error)
		}
	}, [wallet.account, refreshDataToken])

	useEffect(() => {
		if (wallet.account) {
			const provider = new ethers.providers.Web3Provider(wallet.ethereum)
			getERC20BalanceOf(defaults.address.xvader, wallet.account, provider)
				.then(data => {
					setXvdrBalance(+ethers.utils.formatEther(data))
				})
				.catch(console.error)
		}
	}, [wallet.account, refreshDataToken])

	return (
		<Box
			height={`calc(100vh - ${defaults.layout.header.minHeight})`}
			maxWidth={defaults.layout.container.sm.width}
			m='0 auto'
			p={{ base: '5rem 1.2rem 0', md: '5rem 0 0' }}
			{...props}
		>
			<Flex
				w='100%'
				maxW='49ch'
				minH='478.65px'
				m='0 auto'
				p='0 0 2rem'
				layerStyle='colorful'
				flexDir='column'
			>
				<Tabs isFitted colorScheme='bluish'>
					<TabList mb='1rem'>
						<Tab p='1.5rem 0' _focus={{
							boxShadow: '0',
							borderRadius: '24px 0 0 0',
						}}>
							<Text as='h3' m='0' fontSize='1.24rem'>
            		Stake
							</Text>
						</Tab>
						<Tab p='1.5rem 0' _focus={{
							boxShadow: '0',
							borderRadius: '0 24px 0 0',
						}}>
							<Text as='h3' m='0' fontSize='1.24rem'>
            		Unstake
							</Text>
						</Tab>
					</TabList>
					<TabPanels
						p='0 2.6rem'
					>
						<TabPanel p='0'>
							<StakePanel
								exchangeRate={xvdrExchangeRate}
								accessApproved={accessApproved}
								balance={vdrBalance}
								refreshData={setRefreshDataToken}
							/>
						</TabPanel>
						<TabPanel p='0'>
							<UnstakePanel
								exchangeRate={xvdrExchangeRate}
								balance={xvdrBalance}
								refreshData={setRefreshDataToken}
							/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Flex>
		</Box>
	)
}

const ExchangeRate = props => {
	return <>1 xVADER = {prettifyNumber(props.rate, 2, 6)} VADER</>
}
ExchangeRate.propTypes = {
	rate: PropTypes.number.isRequired,
}

const StakePanel = props => {

	const tokens = defaults.stakeable

	const [amount, setAmount] = useState('')
	const [processingTxStatus, setProcessingTxStatus] = useState(false)

	const wallet = useWallet()
	const toast = useToast()
	const [showTokenList, setShowTokenList] = useState(false)
	const [tokenSelect, setTokenSelect] = useState(tokens[0])
	const setMaxAmount = () => {
		setAmount(props.balance)
	}

	const HiddenList = {
		visibility: 'hidden',
		opacity: 0,
		display: 'none',
	}

	const ShowList = {
		position: 'absolute',
		transition: 'all 0.5s ease',
		marginTop: '1rem',
		left: '-18px',
	}

	const ToggleList = {
		visibility: 'visible',
		opacity: 1,
		display: 'block',
	}

	const handleChange = value => {
		if (value > props.balance) {
			value = props.balance
		}
		setAmount(value)
	}

	const approveAccess = async provider => {
		return approveERC20ToSpend(
			defaults.address.fakeVader,
			defaults.address.xvader,
			'0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
			provider,
		)
	}

	const stake = async provider => {
		try {
			const ret = await stakeVader(
				ethers.utils.parseEther(String(amount)),
				provider,
			)
			provider.once(ret.hash, tx => {
				setProcessingTxStatus(false)
				if (tx.status === 1) {
					props.refreshData(Date.now())
					setAmount(0)
					return toast(staked)
				}
				else {
					return toast(failed)
				}
			})
		}
		catch (error) {
			console.error(error)
			setProcessingTxStatus(false)
			if (error.code === 4001) {
				return toast(rejected)
			}
			toast(failed)
		}
	}

	const submit = async () => {
		if (!wallet.account) {
			return toast(walletNotConnected)
		}
		if (!amount) {
			return toast(noAmount)
		}
		const provider = new ethers.providers.Web3Provider(wallet.ethereum)
		setProcessingTxStatus(true)
		if (props.accessApproved) {
			return stake(provider)
		}
		try {
			const ret = await approveAccess(provider)
			provider.once(ret.hash, tx => {
				if (tx.status === 1) {
					toast(approved)
					props.refreshData(Date.now())
					return stake(provider)
				}
				else {
					setProcessingTxStatus(false)
					return toast(failed)
				}
			})
		}
		catch (error) {
			console.error(error)
			setProcessingTxStatus(false)
			if (error.code === 4001) {
				return toast(rejected)
			}
			toast(failed)
		}
	}
	return (
		<>
			<Flex
				mt='4.5rem'
				flexDir='column'>
				<Flex alignItems="center" justifyContent="space-between">
					<Text as='h4' fontSize='1.24rem' fontWeight='bolder'>Amount</Text>
					<Text as='h4'>
						<ExchangeRate rate={props.exchangeRate} />
					</Text>
				</Flex>
				<Flex
					layerStyle='inputLike'
				>
					<InputGroup>
						<NumberInput
							variant="transparent"
							flex="1"
							value={amount}
							max={props.balance}
							onChange={handleChange}
						>
							<NumberInputField
								placeholder="0"
								fontSize="1.3rem"
								fontWeight="bold"
							/>
						</NumberInput>
						<InputRightElement
							width='auto'
						>
							<Flex
								cursor='pointer'
								zIndex='1'
							>
								<Box d='flex' alignItems='center'>
									<Image
										width='24px'
										height='24px'
										mr='10px'
										src={tokenSelect.logoURI}
									/>
									<Box
										as='h3'
										m='0'
										fontSize='1.02rem'
										fontWeight='bold'
										textTransform='capitalize'>{tokenSelect.symbol}</Box>
								</Box>
							</Flex>
						</InputRightElement>
					</InputGroup>
				</Flex>
				<Flex
					mt='.6rem'
					justifyContent='flex-start'
				>
					<Button
						variant='outline'
						size='sm'
						onClick={setMaxAmount}>
							Max
					</Button>
				</Flex>
				<Flex mt='4.75rem' justifyContent='center'>
					<Button
						minWidth="230px"
						size="lg"
						variant="solidRadial"
						onClick={submit}
						disabled={processingTxStatus}
					>
						<Text fontWeight="bold">
							{processingTxStatus
								? 'PROCESSING TRANSACTION'
								: props.accessApproved || !wallet.account
									? 'STAKE'
									: 'APPROVE ACCESS'}
						</Text>
					</Button>
				</Flex>
			</Flex>
		</>
	)
}
StakePanel.propTypes = {
	exchangeRate: PropTypes.number.isRequired,
	accessApproved: PropTypes.bool.isRequired,
	balance: PropTypes.number.isRequired,
	refreshData: PropTypes.func,
}

const UnstakePanel = props => {
	const tokens = defaults.unstakeable

	const [amount, setAmount] = useState('')
	const [processingTxStatus, setProcessingTxStatus] = useState(false)

	const wallet = useWallet()
	const toast = useToast()
	const [showTokenList, setShowTokenList] = useState(false)
	const [tokenSelect, setTokenSelect] = useState(tokens[0])
	const setMaxAmount = () => {
		setAmount(props.balance)
	}

	const HiddenList = {
		visibility: 'hidden',
		opacity: 0,
		display: 'none',
	}

	const ShowList = {
		position: 'absolute',
		transition: 'all 0.5s ease',
		marginTop: '1rem',
		left: '-18px',
	}

	const ToggleList = {
		visibility: 'visible',
		opacity: 1,
		display: 'block',
	}

	const handleChange = value => {
		if (value > props.balance) {
			value = props.balance
		}
		setAmount(value)
	}

	const approveAccess = async provider => {
		return approveERC20ToSpend(
			defaults.address.fakeVader,
			defaults.address.xvader,
			'0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
			provider,
		)
	}

	const stake = async provider => {
		try {
			const ret = await stakeVader(
				ethers.utils.parseEther(String(amount)),
				provider,
			)
			provider.once(ret.hash, tx => {
				setProcessingTxStatus(false)
				if (tx.status === 1) {
					props.refreshData(Date.now())
					setAmount(0)
					return toast(staked)
				}
				else {
					return toast(failed)
				}
			})
		}
		catch (error) {
			console.error(error)
			setProcessingTxStatus(false)
			if (error.code === 4001) {
				return toast(rejected)
			}
			toast(failed)
		}
	}

	const submit = async () => {
		if (!wallet.account) {
			return toast(walletNotConnected)
		}
		if (!amount) {
			return toast(noAmount)
		}
		const provider = new ethers.providers.Web3Provider(wallet.ethereum)
		setProcessingTxStatus(true)
		try {
			const ret = await approveAccess(provider)
			provider.once(ret.hash, tx => {
				if (tx.status === 1) {
					toast(approved)
					props.refreshData(Date.now())
					return stake(provider)
				}
				else {
					setProcessingTxStatus(false)
					return toast(failed)
				}
			})
		}
		catch (error) {
			console.error(error)
			setProcessingTxStatus(false)
			if (error.code === 4001) {
				return toast(rejected)
			}
			toast(failed)
		}
	}
	return (
		<>
			<Flex
				mt='4.5rem'
				flexDir='column'>
				<Flex alignItems="center" justifyContent="space-between">
					<Text as='h4' fontSize='1.24rem' fontWeight='bolder'>Amount</Text>
					<Text as='h4'>
						<ExchangeRate rate={props.exchangeRate} />
					</Text>
				</Flex>
				<Flex
					layerStyle='inputLike'
				>
					<InputGroup>
						<NumberInput
							variant="transparent"
							flex="1"
							value={amount}
							max={props.balance}
							onChange={handleChange}
						>
							<NumberInputField
								placeholder="0"
								fontSize="1.3rem"
								fontWeight="bold"
							/>
						</NumberInput>
						<InputRightElement
							width='auto'
						>
							<Flex
								cursor='default'
								zIndex='1'
							>
								<Box d='flex' alignItems='center'>
									<Image
										width='24px'
										height='24px'
										mr='10px'
										src={tokenSelect.logoURI}
									/>
									<Box
										as='h3'
										m='0'
										fontSize='1.02rem'
										fontWeight='bold'
									>{tokenSelect.symbol}</Box>
								</Box>
							</Flex>
						</InputRightElement>
					</InputGroup>
				</Flex>
				<Flex
					mt='.6rem'
					justifyContent='flex-start'
					flexDir='row'
				>
					<Button
						variant='outline'
						size='sm'
						mr='0.4rem'
						onClick={setMaxAmount}>
							MAX
					</Button>
					<Button
						variant='outline'
						size='sm'
						mr='0.4rem'
						onClick={setMaxAmount}>
							25%
					</Button>
					<Button
						variant='outline'
						size='sm'
						mr='0.4rem'
						onClick={setMaxAmount}>
							50%
					</Button>
					<Button
						variant='outline'
						size='sm'
						mr='0.4rem'
						onClick={setMaxAmount}>
							75%
					</Button>
				</Flex>
				<Flex mt='4.75rem' justifyContent='center'>
					<Button
						minWidth="230px"
						size="lg"
						variant="solidRadial"
						onClick={submit}
						disabled={processingTxStatus}
					>
						<Text fontWeight="bold">
								UNSTAKE
						</Text>
					</Button>
				</Flex>
			</Flex>
		</>
	)
}
UnstakePanel.propTypes = {
	exchangeRate: PropTypes.number.isRequired,
	balance: PropTypes.number.isRequired,
	refreshData: PropTypes.func,
}

export default Stake
