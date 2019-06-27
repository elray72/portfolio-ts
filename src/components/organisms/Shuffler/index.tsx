import * as React from 'react';
import classNames from 'classnames';
import './_shuffler.scss';
import Tile from '../../molecules/Tile';

interface IProps {
	//shuffler: typeof MixItUp,
	ref: any
	// children: any;
}

const Shuffler: React.FC<IProps> = (props) => {

	//let shuffler: typeof MixItUp = undefined;
	// const shufflerRef = React.useRef<HTMLDivElement>(null);
	// const initShuffler = () => {
	// 	console.log(shufflerRef);
	// 	if (!shufflerRef.current) {
	// 		props.shuffler = MixItUp(shufflerRef.current);
	// 	}
	// };
	//
	// React.useLayoutEffect(() => {
	// 	initShuffler();
	// }, []);

	// const shufflerRef = React.useRef<HTMLDivElement>(null);

	return (
		<div className="grid__shuffle" ref={props.ref}>
			<div className="grid__item mix">
				<Tile tags="red" />
			</div>
			<div className="grid__item mix mix--green">
				<Tile tags="green" />
			</div>
			<div className="grid__item mix">
				<Tile tags="blue" />
			</div>
			<div className="grid__item mix mix--green">
				<Tile tags="green" />
			</div>
			<div className="grid__item mix">
				<Tile tags="yellow" />
			</div>
			<div className="grid__item mix">
				<Tile tags="red" />
			</div>
			<div className="grid__item mix">
				<Tile tags="yellow" />
			</div>
			<div className="grid__item mix">
				<Tile tags="blue" />
			</div>
			<div className="grid__item mix">
				<Tile tags="blue" />
			</div>
			<div className="grid__item mix mix--green">
				<Tile tags="green" />
			</div>
		</div>
	);
};

export default Shuffler;
