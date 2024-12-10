import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import image1 from '@/public/image1.jpg';
import image2 from '@/public/image2.jpg';
import image3 from '@/public/image3.jpg';
import image4 from '@/public/image4.jpg';
import Image from 'next/image';

export function RadioGroupComponent({ setImage }: { setImage: Function }) {
	return (
		<RadioGroup className="grid-cols-4">
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="r1"
					id="r1"
					onClick={(e) => setImage('image1.jpg')}
				/>
				<Image
					src={image1}
					alt={'image1'}
					width={'200'}
					className="rounded-3xl"
				/>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="r2"
					id="r2"
					onClick={(e) => setImage('image2.jpg')}
				/>
				<Image
					src={image2}
					alt={'image2'}
					width={'200'}
					className="rounded-3xl"
				/>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="r3"
					id="r3"
					onClick={(e) => setImage('image3.jpg')}
				/>
				<Image
					src={image3}
					alt={'image3'}
					width={'200'}
					className="rounded-3xl"
				/>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="r4"
					id="r4"
					onClick={(e) => setImage('image4.jpg')}
				/>
				<Image
					src={image4}
					alt={'image4'}
					width={'200'}
					className="rounded-3xl"
				/>
			</div>
		</RadioGroup>
	);
}
