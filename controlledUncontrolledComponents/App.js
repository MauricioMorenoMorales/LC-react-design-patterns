import { Modal } from './UncontrolledModal';
import { ControlledForm } from './ControlledForm';
import { UncontrolledForm } from './UncontrolledForm';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';
import { useState } from 'react';
import { ControlledModal } from './ControlledModal';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({ goToNext }) => (
	<>
		<h1>Step One</h1>
		<button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
		<h1>Step Two</h1>
		<button onClick={() => goToNext({ age: 10 })}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
		<h1>Step Three</h1>
		<button onClick={() => goToNext({ hairColor: '#000' })}>Next</button>
	</>
);
const StepFour = ({ goToNext }) => (
	<>
		<h1>Step Four</h1>
		<p>Congratulations! You qualify for our senior discount</p>
		<button onClick={() => goToNext({ hairColor: '#000' })}>Next</button>
	</>
);

const App = () => {
	const [shouldShowModal, setShouldShowModal] = useState(false);
	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);
	const onNext = stepData => {
		setOnboardingData({ ...onboardingData, ...stepData });
		setCurrentIndex(currentIndex + 1);
	};
	if (false)
		return (
			<div>
				<ControlledForm />
				<ControlledModal
					shouldShow={shouldShowModal}
					onRequestClose={() => {
						setShouldShowModal(false);
					}}
				>
					<h1>Hello!</h1>
				</ControlledModal>
				<button onClick={() => setShouldShowModal(!shouldShowModal)}>
					{shouldShowModal ? 'Hide Modal' : 'Show Modal'}
				</button>
			</div>
		);
	return (
		<>
			<ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
				<StepOne />
				<StepTwo />
				<StepThree />
				{onboardingData.age > 30 && <StepFour />}
			</ControlledOnboardingFlow>
		</>
	);
};

export default App;
