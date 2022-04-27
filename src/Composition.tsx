import {useVideoConfig} from 'remotion';
import {France} from './France';
import {Rain} from './Rain';

export const MyComposition = () => {
	const {width, height, fps, durationInFrames} = useVideoConfig();

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				background: 'black',
				color: 'red',
			}}
		>
			Hi Mom! 👋 I made a {width}x{height}px video that is{' '}
			{durationInFrames / fps}s long.
			<France />
			<Rain />
		</div>
	);
};
