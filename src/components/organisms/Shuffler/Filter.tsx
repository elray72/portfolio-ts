import React from 'react';
import MixItUp from 'mixitup';
import '../../../common/extensions/string';
import './_shuffler.scss';

interface IProps {
	items: React.ReactElement[];
	mixitup: typeof MixItUp;
	name: string;
	handleAllClick: (event: React.MouseEvent<HTMLInputElement>) => void;
	handleFilterClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<IProps> = (props) => {
	// group the items by tags and return as string[]
	let options = props.items
		.map((n: React.ReactElement) => n.props.tags)
		.join()
		.split(/[\s,|]+/)
		.filter((v, i, a) => a.indexOf(v) === i);

	// init states and refs
	const [active, setActive] = React.useState('All'); // set state for active filter
	const filterItemsRef = React.useRef([]) as any; // ref for shuffler item elements
	const filterMarkerRef = React.useRef<HTMLSpanElement>(null); // ref for underline marker

	const moveMarker = (marker: HTMLSpanElement, filterValue: string) => {
		// get the current clicked filter button's inner span
		const filterSpan = filterItemsRef.current.find((el: HTMLSpanElement) => {
			return el.innerText === filterValue;
		});

		// calculate offset and slide the marker to that position
		const diffX = Math.round(filterSpan.offsetWidth / 2) - 1;
		marker.style.transform = `translateX(${filterSpan.offsetLeft + diffX}px) scaleX(${filterSpan.offsetWidth})`;
	};

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
		return `${props.name}_filter_${o.toAlphaNumeric().toLowerCase()}`;
	};

	// run move marker on load and set up window event listener
	React.useLayoutEffect(() => {
		const _moveMarker = () => moveMarker(filterMarkerRef.current as HTMLSpanElement, active);

		_moveMarker();
		window.addEventListener('resize', () => _moveMarker());

		// on unmount, cleanup the listener
		return () => {
			window.removeEventListener('resize', _moveMarker);
		};
	});

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
				<label className="shuffler__filter-item" htmlFor={getId(o)} key={`shuffler_filter_${o}`}>
					<input type="radio" id={getId(o)} name={`${props.name}_filter`} value={o} onClick={handleFilterClick} />
					<span ref={(el) => (filterItemsRef.current[i + 1] = el)}>{o}</span>
				</label>
			))}
			<span className="shuffler__filter-marker" ref={filterMarkerRef} />
		</div>
	);
};

export default Filter;
