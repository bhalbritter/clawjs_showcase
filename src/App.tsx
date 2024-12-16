import {ClawMachine} from 'clawjs'
import {useRef, useState} from 'react'
import {ClawMachineCommands} from 'clawjs/dist/ClawMachine'
import {IClawSettings} from '@/interfaces/IClawSettings.ts'
import SettingsCard from '@/modules/settingsCard/SettingsCard.tsx'
import {IInitialBall} from 'clawjs/dist/interfaces/InitialBall'
import {Button} from '@/components/ui/button.tsx'

function App() {
	const [clawSettings, setClawSettings] = useState<IClawSettings>({
		height: 500,
		width: 500,
		gravity: 0.8,
		friction: 0.99,
		groundFriction: 0.8,
		ballRadius: 20,
		clawSize: 25,
		clawWidth: 5,
		clawSpeedX: 10,
		clawSpeedY: 5,
		clawColor: '#808080',
		clawBoldColor: '#000000',
		dividerLineWidth: 70,
		dividerLineHeight: 140,
		dividerLineThickness: 20,
		dividerLineBorderColor: '#808080',
		dividerLineFillColor: '#808080',
	})
	const [balls, setBalls] = useState<IInitialBall[]>([
		{
			text: 'test123',
			ballColor: 'green',
			ballTextColor: 'yellow',
		},
	])
	const clawMachineRef = useRef<ClawMachineCommands>(null)

	const handleMoveClawRight = async () => {
		if (clawMachineRef.current) {
			clawMachineRef.current.moveClawRight()
		}
	}
	const handleMoveClawLeft = async () => {
		if (clawMachineRef.current) {
			clawMachineRef.current.moveClawLeft()
		}
	}

	const handleStopMoving = async () => {
		if (clawMachineRef.current) {
			clawMachineRef.current.stopMoving()
		}
	}

	const handleMoveClawDown = async () => {
		if (clawMachineRef.current) {
			clawMachineRef.current.moveClawDown()
		}
	}

	return (
		<div className={'flex flex-row w-full h-screen'}>
			<div className={'flex flex-col w-full h-screen'}>
				<div className={'text-6xl font-bold m-1'}>Claw JS - Demo</div>
				<div className={'flex justify-center items-center h-full'}>
					<ClawMachine
						alreadyDroppedBalls={[]}
						ref={clawMachineRef}
						addToDroppedBalls={() => console.log('ASDF')}
						ballData={balls}
						height={clawSettings.height}
						width={clawSettings.width}
						gravity={clawSettings.gravity}
						friction={clawSettings.friction}
						groundFriction={clawSettings.groundFriction}
						clawSize={clawSettings.clawSize}
						clawColor={clawSettings.clawColor}
						clawBoltColor={clawSettings.clawBoldColor}
						clawWidth={clawSettings.clawWidth}
						clawSpeedY={clawSettings.clawSpeedY}
						clawSpeedX={clawSettings.clawSpeedX}
						ballRadius={clawSettings.ballRadius}
						dividerLineWidth={clawSettings.dividerLineWidth}
						dividerLineHeight={clawSettings.dividerLineHeight}
						dividerLineThickness={clawSettings.dividerLineThickness}
						dividerLineBorderColor={clawSettings.dividerLineBorderColor}
						dividerLineFillColor={clawSettings.dividerLineFillColor}
					/>
				</div>
				<div className={'w-full flex justify-center gap-2 mb-2'}>
					<Button
						onMouseDown={() => handleMoveClawLeft()}
						onTouchStart={() => handleMoveClawLeft()}
						onTouchEnd={() => handleStopMoving()}
						onMouseUp={() => handleStopMoving()}
						onMouseLeave={() => handleStopMoving()}
					>
						Left
					</Button>
					<Button
						onMouseDown={() => handleMoveClawRight()}
						onTouchStart={() => handleMoveClawRight()}
						onTouchEnd={() => handleStopMoving()}
						onMouseUp={() => handleStopMoving()}
						onMouseLeave={() => handleStopMoving()}
					>
						Right
					</Button>
					<Button onClick={() => handleMoveClawDown()}>Go</Button>
				</div>
			</div>
			<div className={'w-1/4 overflow-scroll'}>
				<SettingsCard
					clawSettings={clawSettings}
					balls={balls}
					setBalls={setBalls}
					setClawSettings={setClawSettings}
				/>
			</div>
		</div>
	)
}

export default App
