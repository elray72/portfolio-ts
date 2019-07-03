import React from 'react';
import MixItUp from 'mixitup';

interface IProps {
	items: React.ReactElement[];
	mixitup: typeof MixItUp;
	name: string;
	handleAllClick: (event: React.MouseEvent<HTMLInputElement>) => void;
	handleFilterClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<IProps> = (props) => {
	let options = props.items
		.map((n: React.ReactElement) => n.props.tags)
		.join()
		.split(/[\s,|]+/)
		.filter((v, i, a) => a.indexOf(v) === i);

	const [active, setActive] = React.useState('All');
	const filterItemsRef = React.useRef([]) as any;
	const filterMarkerRef = React.useRef<HTMLSpanElement>(null);

	// eslint-disable-next-line
	const moveMarker = (marker: HTMLSpanElement, value: string) => {
		const target = filterItemsRef.current.find((el: HTMLSpanElement) => {
			return el.innerText === value;
		});
		const diffX = Math.round(target.offsetWidth / 2) - 1;
		marker.style.transform = `translateX(${target.offsetLeft + diffX}px) scaleX(${target.offsetWidth})`;
	};

	React.useLayoutEffect(() => {
		moveMarker(filterMarkerRef.current as HTMLSpanElement, active);
		// eslint-disable-next-line
	}, []);

	React.useLayoutEffect(() => {
		window.addEventListener('resize', () => {
			moveMarker(filterMarkerRef.current as HTMLSpanElement, active);
		});
	}, [moveMarker, active]);

	const handleFilterClick = (e: React.MouseEvent<HTMLInputElement>) => {
		const marker = filterMarkerRef.current as HTMLSpanElement;
		const filter = e.target as HTMLInputElement;

		setActive(() => filter.value);
		moveMarker(marker, filter.value);

		if (filter.id === getId('all')) {
			props.handleAllClick(e);
		} else {
			props.handleFilterClick(e);
		}
	};

	const getId = (o: string) => {
		return `${props.name}_filter_${o.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()}`;
	};

	return (
		<div className="shuffler__filter">
			<label className="shuffler__filter-item" htmlFor={getId('all')}>
				<input
					type="radio"
					id={getId('All')}
					name={`${props.name}_filter`}
					onClick={handleFilterClick}
					value={'All'}
					defaultChecked={true}
				/>
				<span ref={(el) => (filterItemsRef.current[0] = el)}>All</span>
			</label>
			{(options || []).map((o: string, i: number) => (
				<label
					className="shuffler__filter-item"
					htmlFor={getId(o)}
					key={`shuffler_filter_${o}`}
				>
					<input type="radio" id={getId(o)} name={`${props.name}_filter`} value={o} onClick={handleFilterClick} />
					<span ref={(el) => (filterItemsRef.current[i + 1] = el)}>{o}</span>
				</label>
			))}
			<span className="shuffler__filter-marker" ref={filterMarkerRef} />
			<span className="shuffler__filter-marker-2" />
		</div>
	);
};

export default Filter;
