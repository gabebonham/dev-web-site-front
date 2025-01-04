'use client';
import { Skeleton } from './ui/skeleton';

export default function DefaultSkeleton() {
	return (
		<div className="w-auto h-auto flex flex-col space-y-4 items-center">
			<Skeleton className="bg-gray-100 rounded-2xl w-full h-64" />
			<div className="w-full h-full ">
				<Skeleton className="bg-gray-100 mb-2 rounded-full w-96 h-4" />
				<Skeleton className="bg-gray-100 rounded-full w-64 h-4" />
			</div>
		</div>
	);
}
