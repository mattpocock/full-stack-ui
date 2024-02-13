import clsx from 'clsx';

export const Title = (props: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div className="flex-1 w-full h-full bg-gray-900 flex items-center justify-center">
			<h1
				className={clsx(
					'text-6xl font-bold text-white tracking-tight leading-snug',
					props.className
				)}
			>
				{props.children}
			</h1>
		</div>
	);
};
