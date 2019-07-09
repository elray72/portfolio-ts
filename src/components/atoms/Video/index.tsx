import * as React from 'react';
import Helmet from 'react-helmet';
import { Events } from '../../../utils/helpers/events';
import classNames from 'classnames';
import './_video.scss';

interface IProps {
	autoPlay?: boolean;
	className?: string;
	listens?: string;
	loop?: boolean;
	muted?: boolean;
	preload?: string;
	poster?: string;
	src: string;
}

export const Video: React.FC<IProps> = (props) => {
	const videoRef = React.useRef<HTMLVideoElement>(null);

	if (props.listens) {
		Events.subscribe(props.listens, (play: any) => {
			if (videoRef.current) {
				if (play) videoRef.current.play();
				else {
					videoRef.current.currentTime = 0;
					videoRef.current.pause();
				}
			}
		});
	}

	const componentClass = classNames(
		props.className, 'video'
	);

	return (
		<div className={componentClass}>
			<Helmet>
				<link rel="preload" as="image" href={props.poster}/>
				<link rel="preload" as="video" href={props.src}/>
			</Helmet>
			<video src={props.src} ref={videoRef} {...props}/>
		</div>
	);
};

export default Video;
